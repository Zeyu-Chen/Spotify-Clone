'use client';

import React from 'react';
import Image from 'next/image';

import { Song } from '@/types';
import useLoadImage from '@/hooks/useLoadImage';

interface MediaItemProps {
  data: Song;
  onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({
                                               data,
                                               onClick
                                             }) => {
  const imagePath = useLoadImage(data);

  const handleClick = () => {
    if (onClick) {
      return onClick(data.id);
    }

    // todo: default turn on player
  }

  return (
    <div
      className='flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md'
      onClick={handleClick}
    >
      <div className='relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden'>
        <Image
          fill
          src={imagePath || '/images/placeholder.png'}
          alt='Image'
          className='object-cover'
          sizes='128px'
          priority
        />
      </div>
      <div className='flex flex-col gap-y-1 overflow-hidden'>
        <p className='text-white truncate'>
          {data.title}
        </p>
        <p className='text-neutral-400 text-sm truncate'>
          {data.author}
        </p>
      </div>
    </div>
  );
};

export default MediaItem;