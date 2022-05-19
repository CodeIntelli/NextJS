// import "../styles/Error.module.css";
import Link from "next/link";
import {useRouter} from 'next/router';
import { useEffect } from "react";
const Error = () => {
  let router = useRouter();
  let handleClick = ()=>{
    router.push('/')
  }
  useEffect(() => {
    return () => {
      setTimeout(()=>{
        handleClick()
      },2000)
    }
  }, [])
  
  return (
    <>
      <div className="number">404</div>
      <div className="text">
        <span>Ooops...</span>
        <br />
        page not found
      </div>
      <div style={{ marginTop: "50px" }}>
        
      </div>
    </>
  );
};

export default Error;
