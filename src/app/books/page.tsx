import { getBooks } from "@/actions/books/actions";
import BookCard from "@/components/books/BookCard";
import PageHeading from "@/components/common/PageHeading";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Books",
  description: "Showcases all the blog articles",
};

type ReadingStatus = "Reading" | "Has been read";

export type Book = {
  id: string;
  title: string;
  description: string;
  author: string;
  publishDate: string;
  readingStatus: ReadingStatus;
};

export default async function Books() {
  const books = await getBooks();

  return (
    <section>
      <PageHeading text="Books" />

      <div className="flex flex-wrap justify-center gap-6 mx-2">
        {!books.length && <p>There are no books added yet!</p>}
        {books.map((book) => (
          <div key={book.id} className="w-full sm:w-80">
            <BookCard book={book}/>
          </div>
        ))}
      </div>
    </section>
  );
}
