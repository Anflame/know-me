export interface IChat {
  _id: string;
  title: string;
  image: string;
  alt: string;
  lastMessage: string;
  lastMessageTimeSent: string;
}

export interface IMessage {
  _id: string;
  isCurrentUser: boolean;
  content: string;
  dispatchTime: string;
}

export interface IUserImage {
  image: string;
  alt: string;
}

export interface UserChats {
  userImage: IUserImage;
  chats: IChat[];
}
