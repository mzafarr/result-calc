import App from "./components/App";

export default function Home() {
  return (
    <>
      <nav className="px-8 flex justify-between bg-slate-600 text-center text-white">
        <h1 className="text-2xl font-semibold  py-4">Result Calculator</h1>
        <div className="flex items-center gap-2">
          <a href="https://github.com/mzafarr/result-calc" target="_blank" className=" mx-3">
            <button className="rounded-lg border-2 w-full border-slate-700 bg-slate-700 py-2 px-5  text-white font-medium  text-lg hover:scale-105 hover:shadow-lg duration-300">
              Code
            </button>
          </a>
          <a
            className="py-3 mb-1.5 ml-0"
            href="/file.xlsx"
            target="_blank"
            download
          >
            <button className="rounded-lg border-2 border-slate-700 bg-slate-700 py-2 px-5  text-white font-medium  text-lg hover:scale-105 hover:shadow-lg duration-300">
              Download Sample Data
            </button>
          </a>
        </div>
      </nav>

      <App />
    </>
  );
}
