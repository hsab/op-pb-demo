/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Avatar = ({ name }: { name: string }) => {
  return (
    <img
      className="w-6 h-6"
      width={24}
      height={24}
      src={`https://api.dicebear.com/6.x/thumbs/svg?seed=${encodeURIComponent(
        name,
      )}&radius=50&size=24&shapeRotation=0&shapeOffsetX=0&shapeOffsetY=-5&scale=120`}
      alt="Kiwi standing on oval"
    />
  );
};

export default Avatar;
