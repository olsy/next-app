import Link from 'next/link'
import {Product} from "@/app/products/types";
import Card from "@/components/Card";

// export const revalidate = 60; // in milliseconds

// export async function getServerSideProps(ctx) {
//     const {req, res} = ctx
//
//     const authHeader = req.headers.get('authorization');
//
//     if (!authHeader) {
//         res.setHeader("WWW-Authenticate", 'Basic realm="Protected"')
//         res.statusCode = 401
//         res.end("Unauthorized")
//     }
//
//     const credentials = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':')
//
//     console.log(authHeader, credentials)
//
//     const [user, pass] = credentials;
//
//     if (!(user == 'admin' && pass == 'pass')) {
//         res.setHeader("WWW-Authenticate", 'Basic realm="Protected"')
//         res.statusCode = 401
//         res.end("Unauthorized")
//     }
//
//     // return NextResponse.next();
//
//     return {
//         props: {}
//     }
// }

const fetchProducts = async (): Promise<Product[]> => {
    const res = await fetch(process.env.API_URL as string);
    return await res.json()
}

export default async function Products() {
    const products = await fetchProducts()

    return (
        <main className="flex min-h-screen flex-col items-center p-24 gap-4">
            {products.map((product) =>
                <Link key={product.id} href={`/products/${product.id}`} className="w-full">
                    <Card {...product}/>
                </Link>)}
        </main>
    );
}
