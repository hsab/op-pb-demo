/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { BsDot, BsThreeDots } from 'react-icons/bs';
import { PiChatCircleBold, PiArrowUpBold } from 'react-icons/pi';

const Post = () => {
  return (
    <div className="px-4 py-3 text-black">
      <div className="mb-2">
        <div className="flex h-[30px] flex-row items-center  justify-between">
          <div className="flex flex-row items-center gap-2">
            <img
              className="w-6 h-6"
              width={24}
              height={24}
              src="https://api.dicebear.com/6.x/thumbs/svg?seed=asd&radius=50&size=24&shapeRotation=0&shapeOffsetX=0&shapeOffsetY=-5&scale=120"
              alt="Kiwi standing on oval"
            />

            <div>
              <div className="text-xs">Beatrice F.</div>
              <div className="flex flex-row text-gray-dark">
                <div className="text-xxs">1 week</div>
                <div className="flex flex-col items-center justify-center w-3">
                  <BsDot color="#606a6c" size="12px" />
                </div>
                <div className="text-xxs">Transporetation</div>
              </div>
            </div>
          </div>

          <div>
            <BsThreeDots color="#394548" size="16px" />
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center gap-2 mb-2">
        <h3 className="text-base leading-none">Coast-to-coast transport</h3>
        <div className="flex flex-col items-center justify-center rounded-normal bg-[#F24405] bg-opacity-50 p-1 text-[11px] leading-[13px]">
          High
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-dark line-clamp-3 ">
        We need a reliable transportation system from one coast to the other.
        Every time I need to visit family on the other side of the island it
        takes FOREVER…
      </div>

      <div className="flex flex-row items-center gap-4 mb-1 text-sm text-teal">
        <div className="flex flex-row items-center gap-1">
          <div className="flex flex-col items-center justify-center w-6 h-6">
            <PiArrowUpBold color="#0396a6" size="16px" />
          </div>
          133 upvotes
        </div>
        <div className="flex flex-row items-center gap-1">
          <div className="flex flex-col items-center justify-center w-6 h-6 -scale-x-100">
            <PiChatCircleBold color="#0396a6" size="16px" />
          </div>
          24 comments
        </div>
      </div>
    </div>
  );
};

export default Post;
