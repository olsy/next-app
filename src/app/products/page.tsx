import Link from 'next/link';
import { Product } from '@/app/products/types';
import Card from '@/components/Card';

export const revalidate = 60; // in seconds

const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch(process.env.API_URL as string);
  return await res.json();
};

export default async function ProductsPage() {
  const products = await fetchProducts();

  return (
    <main className='flex min-h-screen flex-col items-center p-24 gap-4'>
      {products?.map(product => (
        <Link
          key={product.id}
          href={`/products/${product.id}`}
          className='w-full'
          prefetch={false}
        >
          <Card {...product} />
        </Link>
      ))}
    </main>
  );
}
