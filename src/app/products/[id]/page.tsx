import Link from 'next/link'
import {Product} from '../types'
import Card from "@/components/Card";
import { redirect } from 'next/navigation'
import {revalidatePath} from "next/cache";

// export const revalidate = 60; // in milliseconds

export const fetchProduct = async (id:string): Promise<Product | null> => {
    const res = await fetch(`${process.env.API_URL}/${id}`);

    if(!res.ok){
        revalidatePath('/products')
        return null;
    }

    return await res.json()
}

export default async function Product({params}) {
    const product = await fetchProduct(params.id)

    if(!product){
        return <main className="flex min-h-screen flex-col items-center p-24 gap-4">
            <h4>Sorry, looks like this page does not exist any more!</h4>
            <span>Please, back to <a href="/products" className="text-red-500">products</a></span>
        </main>
    }

    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-4">
            <Card {...product} />
            <Link href="/products">back</Link>
        </main>
    );
}
