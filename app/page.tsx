"use client";

import { Hero, SearchBar } from '@/components';
import ProductCard from '@/components/ProductCard';
import ProductCardList from '@/components/ProductCardList';
import { ProductProps } from '@/types';
import { fetchProducts } from '@/utils';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import type { RootState } from './GlobalRedux/store';
import { useSelector, useDispatch } from 'react-redux';
import { setAllProducts, setSearchText, setSearchedResults } from './GlobalRedux/features/search/searchSlice';

export default function Home() {
  const search = useSelector((state: RootState) => state.search);
  const dispatch = useDispatch();

  // const [allProducts, setAllProducts] = useState([]);
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(
    null
  );
  // const [searchText, setSearchText] = useState("");
  // const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const data = await fetchProducts();
    dispatch(setAllProducts(data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext: string) => {
    const regex = new RegExp(searchtext, "i"); // 'i' flag for case-insensitive search
    return search.allProducts.filter(
      (item: ProductProps) =>
        regex.test(item.title) ||
        regex.test(item.category)
    );
  };


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearTimeout(searchTimeout);
    dispatch(setSearchText(e.target.value));

    // debounce method
    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        dispatch(setSearchedResults(searchResult));
      }, 500)
    );
  };


  return (
    <main className='overflow-hidden'>
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='font-extrabold text-5xl'>Our Store</h1>
          <p>Have a look at some of our items</p>
        </div>

        <form className="mt-10 bg-gray-100 rounded-2xl p-4 flex items-center space-x-2" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Search for a product"
            value={search.searchText}
            onChange={handleSearchChange}
            required
            className="bg-transparent outline-none text-gray-800 placeholder-gray-500 w-full"
          />
        </form>

        <section>
          {/* All Prompts */}
          {search.searchText ? (
            <ProductCardList
              data={search.searchedResults}
            />
          ) : (
            <ProductCardList data={search.allProducts} />
          )}
        </section>

        <div className='flex flex-row items-center justify-center'>
          <button
            className='custom-btn bg-stone-800 text-white rounded-full mt-16'
            onClick={() => { }}
          >
            Show More
          </button>
        </div>

      </div>
    </main>
  );
}




