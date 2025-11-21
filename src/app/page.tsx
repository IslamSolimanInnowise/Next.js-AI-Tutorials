import Link from "next/link";

const navigationLinks = [
  { name: "Basic Completion (Generate Text)", href: "/ui/completion" },
  { name: "Basic Completion (Stream Text)", href: "/ui/stream" },
  { name: "Chatbot (With Memory)", href: "/ui/chat" },
];

const Home = () => {
  return (
    <main className="py-4 bg-gray-50 min-h-screen">
      <div className="w-full bg-gradient-to-b from-gray-50 via-blue-50 to-gray-50 rounded-2xl p-4">
        <h1 className="p-2 text-center font-black text-3xl h-15 rounded-sm bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-2xl transform transition duration-200 ease-out">
          Choose Your Route
        </h1>
        <div className="flex flex-wrap justify-center items-center min-h-[calc(100vh-124px)]">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-6 py-3 m-2 bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-semibold rounded-2xl shadow-lg transform transition duration-200 ease-out hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:translate-y-1 active:shadow-md focus:outline-none focus:ring-4 focus:ring-blue-200 w-40 h-40 flex items-center justify-center text-center"
              aria-label={link.name}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Home;
