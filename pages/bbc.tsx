import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Bbc: NextPage = () => {
  const router = useRouter();
  const { a } = router.query;

  return (
    <>
      <div>{a}</div>
      <h1>BBC</h1>
      <div>
        <Link href="/abc?a=20">abc</Link>
      </div>
    </>
  );
};

export default Bbc;
