import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

const Abc: NextPage = () => {
  const router = useRouter();
  const { a } = router.query;

  return (
    <>
      <div>{a}</div>
      <h1>ABC</h1>
      <div>
        <Link href="/bbc?a=10">bbc</Link>
      </div>
    </>
  );
};

export default Abc;
