// import { QueryClientProvider, QueryClient, useQuery } from "@tanstack/react-query";
// const queryClient = new QueryClient();

import { ProductProps } from "@/types";

// export async function fetchProducts() {
//   const { data } = useQuery({
//     queryKey: ['products'],
//     queryFn: () =>
//       fetch('https://fakestoreapi.com/products').then(
//         (res) => res.json(),
//       ),
//   });
//   console.log(data);
//   return data;
// }

export async function fetchProducts() {
  const response = await fetch(
    `https://fakestoreapi.com/products`
  );
  const result = await response.json();
  return result;
}

export async function fetchThisProduct(id: string) {
  const result = await fetch(`https://fakestoreapi.com/products/${id}`);
  const data: ProductProps = await result.json();

  return data;
}
