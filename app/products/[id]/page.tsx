import { Params, ProductProps } from '@/types';
import { fetchThisProduct } from '@/utils';
import React from 'react';


const Product = async ({ params }: { params: Params; }) => {

  const data = await fetchThisProduct(params.id);
  const thisDescription: string[] = data.description.split(',');

  return (
    //make a product page for each product
    <section className="padding-x max-width py-12 sm:py-16">
      <div className="container mx-auto px-4">

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1 lg:ml-5 items-end">
            <div className="max-w-xl overflow-hidden rounded-lg">
              <img className="w-[350px] h-auto max-w-full object-contain" src={data.image} alt="" />
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">{data.title}</h1>

            <div className="mt-5 flex items-center">
              <p className="ml-2 text-sm font-medium text-gray-500"><span className='font-extrabold'>Rating: </span>{data.rating.rate}/5</p>
              <p className="ml-2 text-sm font-medium text-gray-500"><span className='font-extrabold'>Reviewers: </span>{data.rating.count}</p>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">${data.price}</h1>
              </div>

              <button type="button" className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-blue-500 bg-none px-12 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                Add to cart
              </button>
            </div>

            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" className=""></path>
                </svg>
                Free shipping worldwide
              </li>

              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                <svg className="mr-2 block h-5 w-5 align-middle text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" className=""></path>
                </svg>
                Cancel Anytime
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="border-b border-gray-300">
              <div className="flex gap-4">
                <div className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900"> Description </div>
              </div>
            </div>

            <div className="mt-8 flow-root sm:mt-12">
              <h1 className="text-3xl font-bold mb-6">{data.category.toUpperCase()}</h1>
              <ul className="list-disc pl-4">
                {thisDescription.map((item, index) => (
                  <li key={index} className="mb-2 text-lg">{item}</li>
                ))}


              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default Product;