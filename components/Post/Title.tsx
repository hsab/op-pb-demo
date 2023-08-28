import React from 'react';
import { PostType } from '~/types';
import { getColor } from '../RequestForm/InputPriority';

const Title = ({ post }: { post: PostType }) => {
  return (
    <div className="flex flex-row items-center gap-2 mb-2">
      <h3 className="text-base leading-none">{post.title}</h3>
      <div
        className={`flex flex-col items-center justify-center rounded-normal p-1 text-[11px] leading-[13px] ${getColor(
          post.priority,
        )}`}
      >
        {post.priority.charAt(0).toUpperCase() + post.priority.slice(1)}
      </div>
    </div>
  );
};

export default Title;
