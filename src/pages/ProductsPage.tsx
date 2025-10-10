import { products } from '../data/products';

export function ProductsPage() {
    return (
        <div className="text-center p-5 text-xl">
            <h2 className="text-base text-slate-600">
                Here are some great tools for React
            </h2>

            <ul className="list-none m-0 p-0">
                {products.map((product) => (
                    <li key={product.id} className="p-1 text-base text-slate-800">
                        {product.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

