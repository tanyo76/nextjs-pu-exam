import { getBookById } from "@/actions/books/actions";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "Article",
  description: "Individual blog article",
};

type BookInfoPageParams = {
  params: {
    id: string;
  };
};

export default async function BookInfoPage({ params }: BookInfoPageParams) {
  const { id } = params;

  const book = await getBookById(id);

  if(!book) {
    notFound();
  }

  
  return (
    <section>
      <h1>Book info</h1>
      <h3>{book?.title}</h3>
    </section>
  );
}
