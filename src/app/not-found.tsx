import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Page not found",
};

const RootNotFound = () => {
  return (
    <div className="w-full h-full flex justify-center flex-col text-center">
      <h1>404!Page was not found!</h1>
      <Link href="/books" className="hover:underline">Go to books</Link>
    </div>
  );
};

export default RootNotFound;
