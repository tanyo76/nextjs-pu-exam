import NavLink from "./NavLink";

const Header = () => {
  return (
    <header className="w-full shadow-xl flex items-center p-2 h-[10vh]">
      <span className="mx-8 text-3xl font-bold">Biblio</span>
      <nav className="flex items-center list-none p-4">
        <NavLink href="/books" text="Books"/>
        <NavLink href="/add-book" text="Ad book" />
      </nav>
    </header>
  );
};

export default Header;
