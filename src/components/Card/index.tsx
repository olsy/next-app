import Image from 'next/image';
import { Product } from '@/app/products/types';
import React from 'react';
import { showPrice } from '@/flags';

const Card = async (product: Product) => {
  const showPriceFF = await showPrice();

  console.log({ showPriceFF });

  return (
    <div className='flex w-full border rounded p-4 border-black gap-4 bg-cyan-700'>
      <Image
        src={`${product.image}?id=${product.id}`}
        width={100}
        height={100}
        alt={product.title}
        className='rounded flex-shrink-0 object-cover'
      />
      <div className='flex flex-col'>
        <div className='font-bold text-lg'>{product.title}</div>
        <div>{product.description}</div>
        {showPriceFF ? (
          <div className='font-medium text-red-500'>{product.price}$</div>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
