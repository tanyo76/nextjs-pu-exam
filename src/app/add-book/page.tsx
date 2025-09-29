"use client";

import { addBook } from "@/actions/books/actions";
import PageHeading from "@/components/common/PageHeading";
import Link from "next/link";
import { useActionState } from "react";

export default function AddBookPage() {
  const [state, formAction, pending] = useActionState(addBook, {});
  return (
    <section className="flex flex-col space-around items-center">
      <PageHeading text="Add a book" />
      <form
        action={formAction}
        className="flex flex-col text-center px-4 w-[400px]"
      >
        <div className="my-2">
          <input
            name="title"
            placeholder="Book title..."
            className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500"
          />
          {state.errors?.title && (
            <p className="text-red-600 text-sm">{state.errors.title[0]}</p>
          )}
        </div>

        <div className="my-2">
          <input
            name="author"
            placeholder="Author"
            className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500"
          />
          {state.errors?.author && (
            <p className="text-red-600 text-sm">{state.errors.author[0]}</p>
          )}
        </div>

        <div className="my-2">
          <input
            name="publishDate"
            type="date"
            placeholder="Book's publication date..."
            className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500"
          />
          {state.errors?.publishDate && (
            <p className="text-red-600 text-sm">
              {state.errors.publishDate[0]}
            </p>
          )}
        </div>

        <div className="my-2">
          <input
            name="description"
            placeholder="Book description..."
            className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500"
          />
        </div>

        <div className="my-2">
          <select
            name="readingStatus"
            className="block w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-gray-900 shadow-sm outline-none ring-0 transition focus:border-indigo-500"
          >
            <option value="" disabled={true}>
              Please, tell us if you are reading this book or already have done
              so
            </option>
            <option value="Reading">Reading....</option>
            <option value="Has been read">Has been read</option>
          </select>
          {state.errors?.readingStatus && (
            <p className="text-red-600 text-sm">
              {state.errors.readingStatus[0]}
            </p>
          )}
        </div>

        <div>
          <button type="submit" disabled={pending} className="w-[200px] xl p-2 my-4 rounded cursor-pointer border border-gray-300 hover:bg-gray-100">
            {pending ? "Adding..." : "Add book"}
          </button>
        </div>

        {state.ok && (
          <div>
            <p className="text-green-700 text-sm">Success</p>
            <Link href="/books">Go to books</Link>
          </div>
        )}
      </form>
    </section>
  );
}
