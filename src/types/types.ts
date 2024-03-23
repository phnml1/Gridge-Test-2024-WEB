export interface userInfo {
  accessToken?: string;
  loginId: string;
  password: string;
  realName: string;
  phone: string;
  birthDate: string;
}

export interface FeedType {
  id: number;
  feedLoginId: string;
  feedText: string;
  createdAt: string; // ISO 8601 형식의 문자열로 날짜와 시간을 표현
  updatedAt: string; // ISO 8601 형식의 문자열로 날짜와 시간을 표현
  feedCommentCount: number;
  isLiked: boolean;
  isBookMarked: boolean;
  contentList: {
    id: number;
    contentUrl: string;
  }[];
}
export interface FeedContentListType {
  id: number;
  contentUrl: string;
}

export interface CommentType {
  id: number;
  writeUserLoginId: string;
  commentText: string;
}

export interface ProfileData {
  id: number;
  loginId: string;
  realName: string;
  followerCount: number;
  followingCount: number;
  feedCount: number;
}

export interface FileInfo {
  id: number;
  file: File;
}
