import Link from "next/link";
import {useRouter} from 'next/router'
function Blog() {
  const router = useRouter()
  const clickHandle = ()=>{
    router.push('/')
  }
  return (
    <div>
      <h1>Blog Main page</h1>
      <Link href="/">Retunr Home</Link>
      <h3 onClick={clickHandle}>Place Order</h3>
    </div>
  );
}
export default Blog;
