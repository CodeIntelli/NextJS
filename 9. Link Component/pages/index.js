import Link from "next/link";
export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "columns",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          background: "#000",
        }}
      >
        <h1 style={{ color: "#fff", margin: 30 }}>Link Component In NEXT.JS</h1>
        <Link href="/home">
          <a className="btn btn-primary">Read More</a>
        </Link>
      </div>
    </>
  );
}
