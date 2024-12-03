import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
export default function Home() {
  return (
    <>
      <div className="   fixed  top-0 z-10   w-full">
        <Navbar />
      </div>
      <div className="pt-28">
        <HomePage />
      </div>
    </>
  );
}
