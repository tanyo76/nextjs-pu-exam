"use server";
import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "node:path";
import { Book } from "@/app/books/page";

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

export async function createBook() {
  // await db.post.update({ where: { id: postId }, data: { likes: { increment: 1 } } });
  revalidatePath("/books");
}
