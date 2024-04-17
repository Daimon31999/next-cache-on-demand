export type TUser = {
  createdAt: string;
  name: string;
  image: string;
  lastSeen: string;
  email: string;
  avatar: string;
  id: string;
};

export type TTodo = {
  createdAt: string;
  title: string;
  isCompleted: boolean;
  id: string;
  userId: string;
};
