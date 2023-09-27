import FilterSection from "./components/FilterSection";

export default function Home() {
  return <main className="grid grid-cols-4 gap-10">
    <FilterSection/>
    <div className="col-span-3">
      Main content
    </div>
  </main>;
}
