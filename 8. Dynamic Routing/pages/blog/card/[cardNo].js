import { useRouter } from "next/router";

const pageNo = () => {
  const router = useRouter();
  const cardNumber = router.query.cardNo;
  return (
    <>
      <h1>Card No {cardNumber}</h1>
    </>
  );
};
export default pageNo;
