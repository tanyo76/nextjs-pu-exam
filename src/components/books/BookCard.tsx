import { removeBook } from "@/actions/books/actions";
import { Book } from "@/app/books/page";
import Link from "next/link";
import Button from "../common/Button";

type BookCardProps = {
  book: Book;
};

const BookCard = ({ book }: BookCardProps) => {
  const { title, description, author, publishDate } = book;
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md p-4 mb-4">
      <h3 className="text-lg font-semibold text-gray-900">
        <Link href={`books/${book.id}`} className="hover:underline">
          {title}
        </Link>
      </h3>

      <div className="flex flex-col pt-3 pb-3 text-sm text-gray-500">
        <span className="truncate">Author: {author}</span>
        <time className="shrink-0">Published: {publishDate}</time>
      </div>

      <Link
        href={`books/${book.id}`}
        className="inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-1.5 text-sm font-medium text-gray-900 transition hover:bg-gray-50"
      >
        View book
      </Link>
      <Button removeHandler={removeBook} text="Delete" param={book.id} />
    </article>
  );
};

export default BookCard;
