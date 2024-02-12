import CustSwiper from "@/components/CustSwipter.tsx";
import Image from "next/image";
import { people } from './data.js';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>CORNY ABOUT ME SECTION HERE</h1>
      <CustSwiper data={people}/>
    </main>
  );
}
