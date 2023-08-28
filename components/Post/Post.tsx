/* eslint-disable @next/next/no-img-element */
import { doc, increment, updateDoc } from 'firebase/firestore';
import React from 'react';
import { BiEditAlt, BiArrowBack } from 'react-icons/bi';
import { PiChatCircleBold, PiArrowUpBold } from 'react-icons/pi';
import { PostType } from '~/types';
import { db } from '~/libs/firebase';

import Link from 'next/link';
import MetaHeader from './MetaHeader';
import Title from './Title';

const Post = ({ post }: { post: PostType }) => {
  if (!post) return <div />;

  return (
    <div className="pt-3 text-black">
      <div className="px-4 mb-2">
        <div className="flex h-[30px] flex-row items-center  justify-between">
          <div className="flex flex-row items-center gap-2">
            <Link
              className="flex flex-col items-center justify-center w-6 h-6"
              href="/"
            >
              <BiArrowBack color="#142326" size="22px" />
            </Link>

            <MetaHeader post={post} />
          </div>

          <button className="flex flex-row items-center gap-1 text-sm text-teal">
            <div className="flex flex-col items-center justify-center w-6 h-6">
              <BiEditAlt color="#0396a6" size="22px" />
            </div>
            Suggest
          </button>
        </div>
      </div>

      <div className="px-4">
        <Title post={post} />

        <div className="mb-4 text-sm text-gray-dark">{post.description}</div>
      </div>

      <div className="border-t">
        <div className="flex flex-row gap-4 px-4 py-2 text-sm text-charcoal">
          <div>
            <span className="font-bold">{post.votes}</span> upvotes
          </div>
          <div>
            <span className="font-bold">{post.comments}</span> comments
          </div>
        </div>
      </div>

      <div className="grid items-center grid-cols-3 px-4 py-2 mb-1 text-sm border-t text-teal">
        <button
          className="flex flex-row items-center justify-start gap-1"
          onClick={async () => {
            await updateDoc(doc(db, 'posts', post.id), {
              votes: increment(1),
            });
          }}
        >
          <div className="flex flex-col items-center justify-center w-6 h-6">
            <PiArrowUpBold color="#0396a6" size="16px" />
          </div>
          Upvote
        </button>
        <button className="flex flex-row items-center gap-1">
          <div className="flex flex-col items-center justify-center w-6 h-6 -scale-x-100">
            <PiChatCircleBold color="#0396a6" size="16px" />
          </div>
          Comment
        </button>
        <button className="flex flex-row items-center justify-end gap-1">
          <div className="flex flex-col items-center justify-center w-6 h-6 -scale-x-100">
            <PiChatCircleBold color="#0396a6" size="16px" />
          </div>
          Share
        </button>
      </div>
    </div>
  );
};

export default Post;
