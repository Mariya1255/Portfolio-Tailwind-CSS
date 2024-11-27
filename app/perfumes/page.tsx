import React from 'react';
import Image from  'next/image';

const Perfumes = () => {
  const perfumeData = [
    { id: 1, name: 'Pink Rose', price: 5000, description: 'Luxury Perfume', image: '/perfume1.png' },
    { id: 2, name: 'Flower Musk', price: 3000, description: 'Beauty Perfume', image: '/perfume2.png' },
    { id: 3, name: 'White Rose', price: 8000, description: 'Nice Perfume', image: '/perfume3.png' },
    { id: 4, name: 'Pink Rose Middle', price: 5000, description: 'Beauty Look Perfume', image: '/perfume4.png' },
    { id: 5, name: 'Red Rose Motiya', price: 2000, description: 'Nice Perfume', image: '/perfume5.png' },
    { id: 6, name: 'Othi Rushal', price: 7000, description: 'Luxurious Perfumes', image: '/perfume6.png' },
  ];
  return (
    <div className='perfumes grid grid-cols-1 md:grid-cols-3 gap-10 px-10 my-10'>
        {perfumeData.map(perfume => (
          <div key={perfume.id} className='perfume-card bg-pink-200 p-5 rounded-md shadow-md text-center'>
            <Image src={perfume.image}
             alt={perfume.name}
             width={300}
             height={300}
             className='w-full rounded-md transition-transform duration-300 transform hover:scale-110' />
            <h3 className='mt-4 text-2xl font-bold'>{perfume.name}</h3>
            <p className='text-gray-600'>{perfume.description}</p>
            <div className='price text-pink-400 ext-xl font-semibold mt-2'>${perfume.price}</div>
            <button className='mt-4 px-4 py-2 bg-pink-300 text-stone-800 rounded-md'>Add to Cart</button>
          </div>
        ))}
      </div>
    );
};

export default Perfumes;
