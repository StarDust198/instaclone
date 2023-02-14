import { IPost } from 'interfaces';
import { Post } from 'components';

type Props = {};

export const Posts = (props: Props) => {
  const posts: IPost[] = [
    {
      id: '1',
      username: 'Serg198x',
      userImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png',
      img: 'https://plus.unsplash.com/premium_photo-1663924748640-8feb5f50ccb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=776&q=80',
      caption: 'Love picture',
    },
    {
      id: '2',
      username: 'Serg198x',
      userImg:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png',
      img: 'https://images.unsplash.com/photo-1676097907523-1a3dc93e4f8a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=696&q=80',
      caption: 'New picture from mountains',
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
