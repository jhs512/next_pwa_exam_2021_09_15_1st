import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Cbc: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <div>{id}</div>
      <h1>CBC</h1>
      <div>
        <Link href="/abc?a=20">abc</Link>
      </div>
    </>
  );
};

export default Cbc;
