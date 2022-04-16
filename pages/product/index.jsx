import Link from "next/link";
function ProductList({ productId = 100 }) {
  return (
    <>
      <Link href={`/product/${productId}`}>
        <h4>Product {productId}</h4>
      </Link>

      <Link href="/product/one"><h4>Product 2</h4></Link>
      <h4>Product 3</h4>
    </>
  );
}
export default ProductList;
