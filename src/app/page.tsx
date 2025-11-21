import Link from "next/link";

const navigationLinks = [
  { name: "1- Completion (Generate Text)", href: "/ui/completion" },
];

const Home = () => {
  return (
    <main className="p-4 bg-blue-100 min-h-screen">
      <h1 className="bg-blue-200 p-2 text-center font-black text-3xl h-15  rounded-2xl shadow-md">
        Choose Your Route
      </h1>
      <div className="mt-4 flex flex-wrap justify-center">
        {navigationLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="inline-block px-6 py-3 m-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:translate-y-1 active:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-200"
            aria-label={link.name}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </main>
  );
};
export default Home;
