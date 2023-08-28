import { Timestamp } from 'firebase/firestore';
import React from 'react';
import spacetime from 'spacetime';
import { PostType } from '~/types';
import { BsDot } from 'react-icons/bs';
import Avatar from './Avatar';

const MetaHeader = ({ post }: { post: PostType }) => {
  return (
    <div className="flex flex-row items-center gap-2">
      <Avatar name={post.name} />

      <div>
        <div className="text-xs">{post.name}</div>
        <div className="flex flex-row text-gray-dark">
          {post.createdAt && (
            <div className="text-xxs">
              {spacetime(new Date())
                .since(
                  new Timestamp(
                    post.createdAt.seconds,
                    post.createdAt.nanoseconds,
                  ).toDate(),
                )
                .rounded.replace('ago', '')}
            </div>
          )}
          {post.category && (
            <>
              <div className="flex flex-col items-center justify-center w-3">
                <BsDot color="#606a6c" size="12px" />
              </div>
              <div className="text-xxs">{post.category}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetaHeader;
