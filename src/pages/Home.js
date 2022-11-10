import BookForm from "../components/BookForm";
import BookList from "../components/BookList";
import { useCollection } from "../hooks/useCollection";

export default function Home() {
  const { documents: books } = useCollection("books");

  return (
    <div>
      {books && <BookList books={books} />}
      <BookForm />
    </div>
  );
}
