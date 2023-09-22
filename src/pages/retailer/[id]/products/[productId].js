import { useRouter } from 'next/router';

const ProductDetail = () => {
    const router = useRouter();
    const { id: retailerId, productId } = router.query;
    console.log(retailerId, productId)
    return (
        <div>
            {/* Render your component */}
            {retailerId && productId && (
                <div>
                    <div>Retailer ID: {retailerId}</div>
                    <div>Product ID: {productId}</div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;