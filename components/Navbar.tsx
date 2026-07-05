export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-950/70 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        <h1 className="text-2xl font-bold">
          <span className="text-blue-500">Sameer</span>.dev
        </h1>

        <div className="flex gap-8 text-gray-300">

          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            About
          </a>

          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            Projects
          </a>

          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            Contact
          </a>

        </div>

      </div>
    </nav>
  );
}