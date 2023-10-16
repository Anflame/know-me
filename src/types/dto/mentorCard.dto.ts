export interface IUser {
  id: number;
  name: string;
  phone: string;
  rating: string;
}

export interface ISkill {
  id: number;
  title: string;
}

export interface IMentorCard {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  user: IUser;
  skills: ISkill[];
  direction?: string;
  group?: string;
}
