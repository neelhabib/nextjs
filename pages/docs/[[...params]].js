import { useRouter } from "next/router";
function Docs() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);
  if (params.length === 1) {
    return (
      <h2>
        Viewing docs for feture {params[0]} and concept of {params[0]}
      </h2>
    );
  } else if (params.length === 2) {
    return (
      <h3>
        Vviewing docs for featuer {params[1]} and concept of {params[1]}
      </h3>
    );
  } else {
    return <h3>Docs home page</h3>;
  }
}
export default Docs;
