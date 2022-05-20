import Link from "next/link";
import Navbar from "../Components/Navbar";
export const getStaticProps = async () => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
};
export default function Blog({ data }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {data.slice(0, 8).map((Blogdata, index) => {
            return (
              <>
                <div className="col" key={Blogdata.id}>
                  <div className="me-2 mt-5">
                    <div className="card" style={{ width: "18rem" }}>
                      <img
                        className="card-img-top"
                        src="https://images.unsplash.com/photo-1518481612222-68bbe828ecd1?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YWJvdXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500"
                        alt="Card image cap"
                      />
                      <div className="card-body">
                        <h5 className="card-title">{Blogdata.title}</h5>
                        <p className="card-text">{Blogdata.body}</p>
                        <Link href={`/blogdetail/${Blogdata.id}`}>
                          <a className="btn btn-primary">Go somewhere</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
