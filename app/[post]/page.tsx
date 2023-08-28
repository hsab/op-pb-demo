'use client';

import {
  Unsubscribe,
  addDoc,
  collection,
  doc,
  increment,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import Post from '~/components/Post/Post';
import { db } from '~/libs/firebase';
import { CommentType, PostType } from '~/types';
import { RiOpenaiFill } from 'react-icons/ri';
import { ImSpinner8 } from 'react-icons/im';
import { IoSend } from 'react-icons/io5';
import MetaHeader from '~/components/Post/MetaHeader';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
  dangerouslyAllowBrowser: true,
});

const Page = ({ params }: { params: { post: string } }) => {
  const [post, setPost] = useState<PostType | undefined>(undefined);
  const [comments, setComments] = useState<CommentType[]>([]);

  const [name, setName] = useState<string>('Anonymous User');
  const [comment, setComment] = useState<string>('');

  const [isCompleting, setIsCompleting] = useState<boolean>(false);

  useEffect(() => {
    let unsub1: Unsubscribe | undefined;
    let unsub2: Unsubscribe | undefined;
    if (params.post) {
      unsub1 = onSnapshot(doc(db, 'posts', params.post), (currDoc) => {
        setPost({ ...currDoc.data(), id: params.post } as PostType);
      });

      const docRef = doc(db, 'posts', params.post);
      const q = query(
        collection(docRef, 'comments'),
        orderBy('createdAt', 'desc'),
      );

      unsub1 = onSnapshot(q, (snapshot) => {
        const currComments: CommentType[] = [];
        snapshot.forEach((currDoc) => {
          currComments.push({
            id: currDoc.id,
            ...currDoc.data(),
          } as CommentType);
        });
        setComments(currComments);
      });
    }

    return () => {
      unsub1?.();
      unsub2?.();
    };
  }, []);

  const completeComment = async () => {
    const prompt = `
	The following is a post in JSON from a participatory budgeting platform. 

	${JSON.stringify(post, null, 2)}
	
	Generate 3 unique and thoughtful comments that thoughtfully responds to the original post. Some comments should agree and some don't, justify the reasoning. Contain the comment within 240 characters. Also generate a unique and diverse name. Include name and comment in the following JSON format. 	Ensure JSON is RFC8259 compliant following this format without deviation.
	
	[
		{
			name: string,
			comment: string
		  }
	]
	`;

    setIsCompleting(true);
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: 'user',
          content: prompt,
        },
      ],
      model: 'gpt-3.5-turbo',
      frequency_penalty: 1,
      presence_penalty: 1,
      temperature: 1,
    });

    setIsCompleting(false);

    try {
      const completions = JSON.parse(
        completion.choices?.[0]?.message.content || '',
      );

      console.log('OpenAI Completions:', completions);

      const randomElement =
        completions[Math.floor(Math.random() * completions.length)];

      setComment(randomElement.comment);
      setName(randomElement.name);
    } catch (error) {
      /* empty */
    }
  };

  const buttonClick = async () => {
    if (post && comment !== '' && comment) {
      const docRef = doc(db, 'posts', post.id);
      const data: Partial<CommentType> = {
        name,
        description: comment,
      };

      await addDoc(collection(docRef, 'comments'), {
        ...JSON.parse(JSON.stringify(data)),
        createdAt: serverTimestamp(),
        likes: 0,
      });

      await updateDoc(doc(db, 'posts', params.post), {
        comments: increment(1),
      });

      setComment('');
      setName('');
    } else if (post) {
      completeComment();
    }
  };

  if (!post) return <div />;

  return (
    <main className="flex flex-col justify-start w-full min-h-screen pt-2 bg-white">
      {post && <Post post={post} />}

      <div className="pb-4 mb-14">
        {comments.map((currComment) => {
          return (
            <div key={currComment.id} className="p-4 border-t">
              <MetaHeader post={currComment as unknown as PostType} />

              <div className="mt-2 text-xs text-charcoal">
                {currComment.description}
              </div>

              <div className="flex flex-row gap-4 mt-2 text-xs text-blue-dark">
                <button
                  onClick={async (e) => {
                    e.preventDefault();

                    if (params.post) {
                      await updateDoc(
                        doc(
                          db,
                          'posts',
                          params.post,
                          'comments',
                          currComment.id,
                        ),
                        {
                          likes: increment(1),
                        },
                      );
                    }
                  }}
                >
                  {currComment.likes} Likes
                </button>
                <div>Reply</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="fixed bottom-0 flex flex-row w-full gap-2 p-4 bg-white border-t">
        <textarea
          value={comment}
          placeholder="Write a comment"
          className="box-border w-full p-3 text-sm leading-4 max-h-[40px] text-black border placeholder-gray-dark rounded-normal border-gray-dark"
          rows={1}
          style={{
            resize: 'none',
          }}
          onChange={(e) => setComment(e.target.value)}
        />

        <button
          className="flex flex-col items-center justify-center h-10 aspect-square bg-blue-light rounded-normal"
          onClick={async (e) => {
            e.preventDefault();
            buttonClick();
          }}
        >
          {/* eslint-disable-next-line no-nested-ternary */}
          {isCompleting ? (
            <ImSpinner8 color="#0396A6" size="22px" className="animate-spin" />
          ) : comment === '' ? (
            <RiOpenaiFill color="#0396A6" size="22px" />
          ) : (
            <IoSend color="#0396A6" size="20px" />
          )}
        </button>
      </div>
    </main>
  );
};

export default Page;
