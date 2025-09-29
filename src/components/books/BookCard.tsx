import { Book } from "@/app/books/page";
import Link from "next/link";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  return (
    <div>
      <p>{book.title}</p>
      <p>{book.description}</p>
      <p>Author: {book.author}</p>
      <p>Publish date: {book.publishDate}</p>
      <Link href={`books/${book.id}`}>View book</Link>
    </div>
  );
};

export default BookCard;
