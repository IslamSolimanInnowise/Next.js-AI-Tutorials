import Link from "next/link";

const navigationLinks = [
  { name: "Basic Completion (Generate Text)", href: "/ui/completion" },
  { name: "Basic Completion (Stream Text)", href: "/ui/stream" },
];

const Home = () => {
  return (
    <main className="p-4 bg-gray-50 min-h-screen">
      <h1 className="bg-blue-200 p-2 text-center font-black text-3xl h-15 rounded-2xl shadow-md">
        Choose Your Route
      </h1>
      <div className="flex flex-wrap justify-center min-h-[calc(100vh-92px)] items-center">
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
