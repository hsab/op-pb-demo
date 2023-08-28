'use client';

import { db } from '~/libs/firebase';
import Header from '~/components/Header';

import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

import { useEffect, useState } from 'react';
import BottomSheet from '~/components/BottomSheet';
import { PostType } from '~/types';
import RequestForm from '~/components/RequestForm/RequestForm';
import PostCard from '~/components/Post/PostCard';
import Link from 'next/link';

const Page = () => {
  const [open, setOpen] = useState(false);
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));

    const unsub = onSnapshot(q, (snapshot) => {
      const currPosts: PostType[] = [];
      snapshot.forEach((doc) => {
        currPosts.push({ id: doc.id, ...doc.data() } as PostType);
      });
      setPosts(currPosts);
    });

    return () => {
      unsub();
    };
  }, []);

  return (
    <>
      <main className="flex flex-col justify-start w-full min-h-screen pt-2 bg-white">
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

        <div>
          {posts.map((post) => {
            return (
              <Link href={`/${post.id}`} key={post.id}>
                <PostCard key={post.id} post={post} />
              </Link>
            );
          })}
        </div>

        <button
          className="fixed bottom-0 right-0 flex flex-col items-center justify-center h-10 px-3 mb-5 mr-5 text-sm rounded-lg bg-blue-light text-blue-dark"
          onClick={() => setOpen(true)}
        >
          Make a request
        </button>
      </main>

      <BottomSheet open={open} setOpen={setOpen}>
        <RequestForm
          onSubmitCallback={() => {
            setOpen(false);
          }}
        />
      </BottomSheet>
    </>
  );
};

export default Page;
