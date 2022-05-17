import { useRouter } from "next/router";

const pageNo = () => {
  const router = useRouter();
  const cardCat = router.query.card;
  return (
    <>
      <h1>Card No {cardCat}</h1>
    </>
  );
};
export default pageNo;
