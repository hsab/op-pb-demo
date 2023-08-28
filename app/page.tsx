'use client';

import Header from '~/components/Header';
import Post from '~/components/Post';

const Page = () => {
  return (
    <main className="flex flex-col justify-start w-full min-h-screen bg-white">
      <Header />

      <div className="grid grid-cols-4 text-sm leading-4 text-charcoal">
        <div className="flex flex-row justify-center items-center font-medium py-4  border-b-2 border-[#333333] ">
          Recent
        </div>
        <div className="flex flex-row items-center justify-center py-4">
          Trending
        </div>
        <div className="flex flex-row items-center justify-center py-4">
          Editable
        </div>
        <div className="flex flex-row items-center justify-center py-4">
          Restricted
        </div>
      </div>

      <Post />
      <Post />
      <button className="absolute bottom-0 right-0 flex flex-col items-center justify-center h-10 px-3 mb-5 mr-6 text-sm rounded-lg bg-blue-light text-blue-dark">
        Make a request
      </button>
    </main>
  );
};

export default Page;
