// import "../styles/Error.module.css";
import Link from "next/link";
import {useRouter} from 'next/router';
const Error = () => {
  let router = useRouter();
  let handleClick = ()=>{
    router.push('/')
  }
  return (
    <>
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <br />
        page not found
      </div>
      <div style={{ marginTop: "50px" }}>
        
          <a
          onClick={()=>{
            router.push('/')
          }}
            className="text"
            style={{
              border: "2px solid #000",
              padding: "10px",
              color: "inherit",
              textTransform: "none",
              textDecoration: "none",
              cursor:'pointer'
            }}
          >
            Home(OnClick)
          </a>
        <a
          onClick={handleClick}
            className="text"
            style={{
              border: "2px solid #000",
              padding: "10px",
              marginLeft:'12px',
              color: "inherit",
              textTransform: "none",
              textDecoration: "none",
              cursor:'pointer'
            }}
          >
            Home(using Function)
          </a>
      </div>
    </>
  );
};

export default Error;
