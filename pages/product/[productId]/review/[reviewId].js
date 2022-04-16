import { useRouter } from "next/router";
function ReviewId() {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <h3>
      Review of {reviewId} of Product is {productId}
    </h3>
  );
}
export default ReviewId
