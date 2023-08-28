/* eslint-disable @next/next/no-img-element */
import { doc, increment, updateDoc } from 'firebase/firestore';
import React from 'react';
import { BsThreeDots } from 'react-icons/bs';
import { PiChatCircleBold, PiArrowUpBold } from 'react-icons/pi';
import { PostType } from '~/types';
import { db } from '~/libs/firebase';

import MetaHeader from './MetaHeader';
import Title from './Title';

const PostCard = ({ post }: { post: PostType }) => {
  if (!post) return <div />;

  return (
    <div className="px-4 py-3 text-black">
      <div className="mb-2">
        <div className="flex h-[30px] flex-row items-center  justify-between">
          <MetaHeader post={post} />

          <div>
            <BsThreeDots color="#394548" size="16px" />
          </div>
        </div>
      </div>

      <Title post={post} />

      <div className="mb-4 text-sm text-gray-dark line-clamp-3 ">
        {post.description}
      </div>

      <div className="flex flex-row items-center gap-4 mb-1 text-sm text-teal">
        <button
          className="flex flex-row items-center gap-1"
          onClick={async (e) => {
            e.preventDefault();
            await updateDoc(doc(db, 'posts', post.id), {
              votes: increment(1),
            });
          }}
        >
          <div className="flex flex-col items-center justify-center w-6 h-6">
            <PiArrowUpBold color="#0396a6" size="16px" />
          </div>
          {post.votes} upvotes
        </button>
        <button className="flex flex-row items-center gap-1">
          <div className="flex flex-col items-center justify-center w-6 h-6 -scale-x-100">
            <PiChatCircleBold color="#0396a6" size="16px" />
          </div>
          {post.comments} comments
        </button>
      </div>
    </div>
  );
};

export default PostCard;
