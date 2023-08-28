import { Timestamp } from 'firebase/firestore';

export type FormValues = {
  name: string;
  title: string;
  priority: 'low' | 'medium' | 'high';
  category: string;
  description: string;
  image?: string;
};

export type PostType = FormValues & {
  id: string;
  comments: number;
  votes: number;
  createdAt: Timestamp;
};

export type CommentType = {
  name: string;
  description: string;
  id: string;
  likes: number;
  createdAt: Timestamp;
};
