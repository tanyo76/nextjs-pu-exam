import Link from "next/link";

const BookNotFound = () => {
  return (
    <div>
      <h1>Book cannot be found!</h1>
      <Link href="/books">Go to books</Link>
    </div>
  );
};

export default BookNotFound;
