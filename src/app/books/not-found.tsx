import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Book not found",
};

const BookNotFound = () => {
  return (
    <div className="w-full flex justify-center flex-col text-center h-[80vh]">
      <h1 className="text-3xl mb-4">Book cannot be found!</h1>
      <Link href="/books" className="hover:underline">Go to books</Link>
    </div>
  );
};

export default BookNotFound;
