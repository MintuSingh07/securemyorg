import Home from "./Home";
import NavBar from "./components/NavBar";
import "../app/globals.css"

export default function Page() {
  return (
    <main className="bg-gray-950 h-[1000vh]">
      <NavBar/>
      <Home/>
    </main>
  )
}
