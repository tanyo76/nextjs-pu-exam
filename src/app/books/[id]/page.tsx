import { getBookById } from "@/actions/books/actions";
import { notFound } from "next/navigation";


type BookInfoPageParams = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: BookInfoPageParams) {
  const { id } = await params;
  const book = await getBookById(id);

  if (!book) {
    notFound();
  }

  return {
    title: book.title,
  };
}

export default async function BookInfoPage({ params }: BookInfoPageParams) {
  const { id } = await params;

  const book = await getBookById(id);

  if (!book) {
    notFound();
  }

  return (
    <section>
      <h1>Book info</h1>
      <h3>{book?.title}</h3>
    </section>
  );
}
