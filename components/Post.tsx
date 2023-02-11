import { IPost } from '@/interfaces/post.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface PostProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    Omit<IPost, 'id'> {}

export const Post = (props: PostProps) => {
  return <div {...props}>Post</div>;
};
