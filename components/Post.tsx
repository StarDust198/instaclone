import {
  EllipsisHorizontalIcon,
  HeartIcon,
  ChatBubbleLeftEllipsisIcon,
  BookmarkIcon,
  FaceSmileIcon,
} from '@heroicons/react/24/outline';

import { IPost } from 'interfaces';

export const Post = ({
  img,
  userImg,
  username,
  id,
  caption,
  ...props
}: IPost) => {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt={username}
          className="h-12 rounded-full object-cover border p-1 mr-3"
        />
        <p className="font-bold flex-1">{username}</p>
        <EllipsisHorizontalIcon className="h-5" />
      </div>

      {/* Post Image */}
      <img className="object-cover w-full" src={img} alt={caption} />

      {/* Post Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleLeftEllipsisIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>

      {/* Post comments */}
      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/* Post Input Box */}
      <form action="" className="flex items-center p-4">
        <FaceSmileIcon className="h-7" />
        <input
          className="border-none flex-1 focus:ring-0"
          type="text"
          placeholder="Enter your comment..."
        />
        <button className="text-blue-400 font-bold">Post</button>
      </form>
    </div>
  );
};
