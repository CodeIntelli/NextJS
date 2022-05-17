import "../styles/Error.module.css";
import Link from "next/link";
const Error = () => {
  return (
    <>
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <br />
        page not found
      </div>
      <div style={{ marginTop: "50px" }}>
        <Link href="/">
          <a
            className="text"
            style={{
              border: "2px solid #000",
              padding: "10px",
              color: "inherit",
              textTransform: "none",
              textDecoration: "none",
            }}
          >
            Go To Home
          </a>
        </Link>
      </div>
    </>
  );
};

export default Error;
