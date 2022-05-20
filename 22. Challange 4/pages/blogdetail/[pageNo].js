import Navbar from "../../Components/Navbar";

export const getStaticPaths = async () => {
  let response = await fetch(`https://jsonplaceholder.typicode.com/posts/`);
  const data = await response.json();
  const paths = data.map((ele) => {
    return {
      params: { pageNo: ele.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.pageNo;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};

export default function blogDetail({ data }) {
  return (
    <>
      <Navbar />
      <div>
        <h1>{data.title}</h1>
        <h3>{data.body}</h3>
      </div>
    </>
  );
}
