import data from "@/lib/data/data.json";
export default function Home() {
  return (
    <main className="">
      <h1 className="">{data.basics.name}</h1>
    </main>
  );
}
