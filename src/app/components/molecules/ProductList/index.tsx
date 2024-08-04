import CardProduct from "@/app/components/atoms/CardProduct";
import productData from '@/app/data/product';

export default function ProductList() {

    const activeProducts = productData.filter(product => product.isActive);
    const inactiveProducts = productData.filter(product => !product.isActive);

    return(
        <>
            <div className="flex flex-col gap-6 py-4">
                {activeProducts.map((product) => (
                    <CardProduct
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        isActive={product.isActive}
                    />
                ))}
                {inactiveProducts.map((product) => (
                    <CardProduct
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        price={product.price}
                        isActive={product.isActive}
                    />
                ))}
            </div>
        </>
    );
}