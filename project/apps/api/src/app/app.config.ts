export enum ApplicationServiceUrl {
  Users = 'http://localhost:3333/api/auth',
  Blog = 'http://localhost:3334/api/posts',
  Comment ='http://localhost:3334/api/comments',
  File = 'http://localhost:3335'
}

export const HTTP_CLIENT_MAX_REDIRECTS = 5;
export const HTTP_CLIENT_TIMEOUT = 3000;
