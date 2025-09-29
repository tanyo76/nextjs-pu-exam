"use client";

import { addBook } from "@/actions/books/actions";
import { useActionState } from "react";

export default function AddBookPage() {
  const [state, formAction, pending] = useActionState(addBook, {});
  return (
    <section>
      <h1>Add book</h1>
      <form action={formAction}>
        <div>
          <input
            name="title"
            placeholder="Book title..."
            className="border p-2"
          />
          {state.errors?.title && (
            <p className="text-red-600 text-sm">{state.errors.title[0]}</p>
          )}
        </div>

        <input
          name="description"
          placeholder="Book description..."
          className="border p-2"
        />

        <div>
          <input name="author" placeholder="Author" className="border p-2" />
          {state.errors?.author && (
            <p className="text-red-600 text-sm">{state.errors.author[0]}</p>
          )}
        </div>

        <div>
          <input
            name="publishDate"
            placeholder="Book's publication date..."
            className="border p-2"
          />
          {state.errors?.publishDate && (
            <p className="text-red-600 text-sm">
              {state.errors.publishDate[0]}
            </p>
          )}
        </div>

        <div>
          <select name="readingStatus" className="border p-2">
            <option value="" disabled={true}>
              Please, tell us if you are reading this book or already have done
              so
            </option>
            <option value="Reading">Reading....</option>
            <option value="test">Test</option>
            <option value="Has been read">Has been read</option>
          </select>
          {state.errors?.readingStatus && (
            <p className="text-red-600 text-sm">
              {state.errors.readingStatus[0]}
            </p>
          )}
        </div>

        <button type="submit" disabled={pending}>
          {pending ? "Adding..." : "Add book"}
        </button>

        {state.ok && <p className="text-green-700 text-sm">Success</p>}
      </form>
    </section>
  );
}
