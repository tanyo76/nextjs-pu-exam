"use server";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "node:path";
import { Book } from "@/app/books/page";
import { randomUUID } from "node:crypto";
import { addBookValidationSchema } from "@/validation-schemas/books";

export async function getBooks(): Promise<Book[]> {
  const filePath = path.join(process.cwd(), "/src/data", "books.json");
  const text = await fs.readFile(filePath, "utf8");
  return JSON.parse(text);
}

export async function getBookById(bookId: string): Promise<Book | undefined> {
  const filePath = path.join(process.cwd(), "/src/data", "books.json");
  const text = await fs.readFile(filePath, "utf8");
  const books = JSON.parse(text) as [];
  return books.find((book: Book) => book.id == bookId);
}

export async function removeBook(bookId: string): Promise<void> {
  const filePath = path.join(process.cwd(), "/src/data", "books.json");
  const text = await fs.readFile(filePath, "utf8");
  const books = JSON.parse(text) as [];
  const newBooksArray = books.filter((book: Book) => book.id == bookId);
  await fs.writeFile(filePath, JSON.stringify(newBooksArray), "utf-8");

  revalidatePath("/books");
}

export type FormState = {
  ok?: boolean;
  errors?: Record<string, string[]>;
  values?: Record<string, string>;
};

export async function addBook(
  prev: FormState | undefined,
  formData: FormData
): Promise<FormState> {
  // Validate payload
  const values = Object.fromEntries(formData) as Record<string, string>;
  const parsed = addBookValidationSchema.safeParse(values);
  if (!parsed.success) {
    return { values, errors: parsed.error.flatten().fieldErrors };
  }

  const title = formData.get("title");
  const description = formData.get("description");
  const author = formData.get("author");
  const publishDate = formData.get("publishDate");
  const readingStatus = formData.get("readingStatus");

  const bookData: Book = {
    id: randomUUID(),
    title,
    description,
    author,
    publishDate,
    readingStatus,
  };

  const filePath = path.join(process.cwd(), "/src/data", "books.json");
  const text = await fs.readFile(filePath, "utf8");
  const books = JSON.parse(text) as [];
  const newBooksArray = [...books, bookData];

  await fs.writeFile(filePath, JSON.stringify(newBooksArray), "utf-8");

  revalidatePath("/books");

  return { ok: true };
}
