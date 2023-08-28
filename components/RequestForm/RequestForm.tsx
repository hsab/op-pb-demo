import React from 'react';
import { useForm } from 'react-hook-form';
import { IoSend } from 'react-icons/io5';
import { db } from '~/libs/firebase';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { FormValues } from '~/types';
import InputText from './InputText';
import InputPriority from './InputPriority';

const RequestForm = ({
  onSubmitCallback,
}: {
  onSubmitCallback: () => void;
}) => {
  const { control, handleSubmit, trigger } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const docRef = await addDoc(collection(db, 'posts'), {
      ...JSON.parse(JSON.stringify(data)),
      createdAt: serverTimestamp(),
      votes: 0,
      comments: 0,
    });

    console.log('Document written with ID: ', docRef.id);

    onSubmitCallback();
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const validator = (name: keyof FormValues, val: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    trigger(name).then((currIsValid) => {});
  };

  return (
    <div className="flex flex-col gap-2 p-4 text-black">
      <form className="flex flex-col gap-2">
        <InputText
          name="name"
          label="Name"
          placeholder="Your display name"
          control={control}
          validator={validator}
          rules={{
            required: 'Display name is required',
          }}
          onChange={(v) => {
            return v?.startsWith(' ') ? v.trim() : v;
          }}
        />

        <InputText
          name="title"
          label="Title"
          placeholder="Your request title"
          control={control}
          validator={validator}
          rules={{
            required: 'Title is required',
          }}
          onChange={(v) => {
            return v?.startsWith(' ') ? v.trim() : v;
          }}
        />

        <InputPriority
          name="priority"
          label="Priority"
          control={control}
          validator={validator}
          lines={10}
          defaultValue="medium"
          rules={{
            required: 'Priority is required',
          }}
          onChange={(v) => {
            return v?.startsWith(' ') ? v.trim() : v;
          }}
        />

        <InputText
          name="category"
          label="Category"
          placeholder="eg: Transportation"
          control={control}
          validator={validator}
          rules={{
            required: 'Category is required',
          }}
          onChange={(v) => {
            return v?.startsWith(' ') ? v.trim() : v;
          }}
        />

        <InputText
          name="description"
          label="Description"
          placeholder="What are you requesting?"
          control={control}
          validator={validator}
          lines={10}
          rules={{
            required: 'Description is required',
          }}
          onChange={(v) => {
            return v?.startsWith(' ') ? v.trim() : v;
          }}
        />

        <InputText
          name="image"
          label="Image URL"
          placeholder="https://example.com/image.jpg"
          control={control}
          validator={validator}
          onChange={(v) => {
            return v?.startsWith(' ') ? v.trim() : v;
          }}
        />
      </form>

      <button
        className="flex flex-row items-center justify-center w-full py-4 text-black bg-blue-light rounded-normal"
        onClick={handleSubmit(onSubmit)}
      >
        <IoSend color="#0396A6" size="24px" />
      </button>
    </div>
  );
};

export default RequestForm;
