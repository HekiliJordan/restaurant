import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

export default function Cart() {
  return (
    <Link href='/cart' className='flex items-center gap-4'>
      <div className='relative w-8 h-8 md:w-5 md:h-5'>
        <Image src='/cart.png' alt='A shopping cart icon' fill />
      </div>
      <span>Cart(3)</span>
    </Link>
  );
}
