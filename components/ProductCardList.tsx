import { ProductProps } from '@/types';
import React from 'react';
import ProductCard from './ProductCard';

const ProductCardList = ({ data }: { data: ProductProps[]; }) => {
  return (
    <div className='home__products-wrapper'>
      {data?.map((product) => (
        <div>
          <ProductCard
            product={product}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductCardList;