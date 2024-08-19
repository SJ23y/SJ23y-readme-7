import { Module } from '@nestjs/common';
import { FileUploaderService } from './file-uploader.service';
import { FileUploaderController } from './file-uploader.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FileModel, FileSchema } from './file.model';
import { FileUploaderFactory } from './file-uploader.factory';
import { FileUploaderRepository } from './file-uploader.repository';

const SERVE_ROOT = '/static';

@Module({
  imports: [ServeStaticModule.forRootAsync({
                inject: [ConfigService],
                useFactory: (configService: ConfigService) =>{
                  const rootPath = configService.get<string>('application.uploadDirectory');
                  return [{
                    rootPath: rootPath,
                    serveRoot: SERVE_ROOT,
                  serveStaticOptions: {
                    fallthrough: true,
                    etag: true
                  }}]
                }
              }),
            MongooseModule.forFeature([{name: FileModel.name, schema: FileSchema}])
  ],
  providers: [FileUploaderService, FileUploaderFactory, FileUploaderRepository],
  controllers: [FileUploaderController]
})
export class FileUploaderModule {}