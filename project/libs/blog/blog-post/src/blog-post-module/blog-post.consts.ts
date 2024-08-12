import { SortDirection } from '@project/shared-core';


export const DEFAULT_POST_COUNT_LIMIT = 10;
export const DEFAULT_SORT_DIRECTION = SortDirection.Desc;
export const DEFAULT_PAGE_COUNT = 1;

export const BlogPostValidateMessage = {
  WrongType: 'Type should be one of the next values:  video, photo, text, link, quote',
  WrongRepostStatus: 'Type of isRepost should be boolean',
  InvalidPostId: 'Original id should be valid uuid',
  InvalidUserId: 'OriginalAuthor shoul be valid MongoId',
  InvalidUrl: 'This field shoul be valid url',
  InvalidLinkDescription: 'Length of the description shouldn\'t exeed 300 characters',
  InvalidQuoteContent: 'This field should be string with length within 20-300 characters range',
  InvalidQuoteAuthor: 'This field should be string with length within 3-50 characters range',
  InvalidTextTitle: 'This field should be string with length within 20-50 characters range',
  InvalidTextPreview: 'This field should be string with length within 50-255 characters range',
  InvalidTextContent: 'This field should be string with length within 100-1024 characters range',
} as const;

export const BlogPostResponse = {
  PostsFound: 'Successfully found posts',
  PostFound: 'Post was successfully found',
  PostNotFound: 'Post wasn\'t found',
  PostCreated: 'New post successfully created',
  PostUpdated: 'Post was successfully updated',
  NotAuthorized: 'You have no rights to alter that post',
  PostDeleted: 'Post was successfully deleted'
}
