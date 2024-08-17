import * as Joi from 'joi';
import { registerAs } from '@nestjs/config'

const DEFAULT_PORT = 3000;
const ENVIRONMENTS = ['development', 'production', 'stage'] as const;

type Environment = typeof ENVIRONMENTS[number];

export interface FileVaultConfig  {
  environment: string;
  port: number;
  uploadDirectory: string;
}

const validationSchema = Joi.object({
  environment: Joi.string().valid(...ENVIRONMENTS).required(),
  port: Joi.number().port().default(DEFAULT_PORT),
  uploadDirectory: Joi.string().required()
})

function validateConfig(config: FileVaultConfig): void {
  const { error } = validationSchema.validate(config, {abortEarly: true});

  if (error) {
    throw new Error(`[FileVault config validation error]: ${error.message}`);
  }
}

function getConfig(): FileVaultConfig {
  const config: FileVaultConfig = {
    environment: process.env.NODE_ENV as Environment,
    port: parseInt(process.env.PORT, 10) ?? DEFAULT_PORT,
    uploadDirectory: process.env.UPLOAD_DIRECTORY
  }

  validateConfig(config);
  return config;
}

export default registerAs('application', getConfig);