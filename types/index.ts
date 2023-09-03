export interface ProductProps {
  id: number,
  title: string,
  price: number,
  description: string,
  category: string,
  image: string,
  rating: { rate: number, count: number; };
}

export interface searchState {
  allProducts: ProductProps[],
  searchText: string,
  searchedResults: ProductProps[];
}

export interface Params {
  id: string;
}
