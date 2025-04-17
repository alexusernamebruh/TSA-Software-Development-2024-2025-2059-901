export interface ICategory {
  id: number;
  name: string;
  places: IPlace[];
}

export interface IPlace {
  id: number;
  name: string;
  description: string;
  address: string;
  city: string;
  state: string;
  ownerId: number;
  owner: IUser;
  ratings: IRating[];
  ratingsAverage: number;
  ratingsSum: number;
  ratingsCount: number;
  category: ICategory;
  categoryId: number;
}

export interface IEvent {
  id: number;
  city: string;
  state: string;
  address: string;
  startDate: string;
  endDate: string;
  title: string;
  description: string;
  users: IUser[];
  authorId: number;
  author: IUser;
}

export interface IUser {
  id: number;
  username: string;
  events: IEvent[];
  createdEvents: IEvent[];
  ownedPlaces: IPlace[];
  ratings: IRating[];
}

export interface IRating {
  id: number;
  rating: number;
  comment?: string;
  authorId: number;
  author: IUser;
  placeId: number;
  place: IPlace;
}

export interface IChat {
  id: number;
  content: IChatContent[];
  title: string;
}

export interface IChatContent {
  role: string;
  content: string;
}
