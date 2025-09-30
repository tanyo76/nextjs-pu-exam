import { getBookById } from "@/actions/books/actions";
import PageHeading from "@/components/common/PageHeading";
import { notFound } from "next/navigation";
import { ReadingStatus } from "../page";

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

const statusStyles: { [key in ReadingStatus]: { text: string; bg: string } } = {
  "Not started": {
    text: "text-gray-600 border-gray-300",
    bg: "bg-gray-100",
  },
  Reading: {
    text: "text-yellow-800 border-yellow-400",
    bg: "bg-yellow-100",
  },
  Completed: {
    text: "text-green-800 border-green-400",
    bg: "bg-green-100",
  },
};

export default async function BookInfoPage({ params }: BookInfoPageParams) {
  const { id } = await params;

  const book = await getBookById(id);

  if (!book) {
    notFound();
  }
  const { text: statusColor, bg: statusBg } = statusStyles[book.readingStatus];

  return (
    <section className="mx-auto max-w-3xl">
      <PageHeading text="Book Details" />
      <article className="rounded-xl border border-gray-200 bg-white shadow-sm mx-4">
        <div className="p-6 sm:p-8">
          <h1 className="mb-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {book.title}
          </h1>

          <p className="mb-4 text-lg font-medium text-gray-600">
            by {book.author}
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${statusColor} ${statusBg}`}
            >
              {book.readingStatus}
            </span>
            <span className="text-gray-500">
              Published on {book.publishDate}
            </span>
          </div>
          <p className="break-words">Book description: {book.description}</p>
        </div>
      </article>
    </section>
  );
}
