import { people, mailbox, linkTest, leafVFX, monkeySite, lockjawUI } from "@/components/peices";
import PortfolioWork from "@/components/PortfolioWork";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center bg-gray-300 text-black p-10">
    <h1 className="my-20 font-bold text-5xl">PORTFOLIO</h1>
    <h2 className="text-2xl font-bold">Websites:</h2>
    <div className="flex flex-wrap justify-evenly content-evenly">
    <PortfolioWork pictures={monkeySite} />
    </div>
    <h2 className="text-2xl font-bold">Tech Art:</h2>
    <div className="flex flex-wrap justify-evenly content-between">

    <PortfolioWork pictures={leafVFX} />
    <PortfolioWork pictures={lockjawUI}></PortfolioWork>
    </div>
    <h2 className="text-2xl font-bold">Other:</h2>
    <div className="flex flex-wrap justify-evenly content-evenly">
    <PortfolioWork pictures={mailbox} />
    </div>
    </main>
    </>
  );
}