import { people, mailbox, linkTest, leafVFX } from "@/components/peices";
import PortfolioWork from "@/components/PortfolioWork";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center bg-gray-300 text-black p-10">
    <h1 className="my-20 text-5xl">PORTFOLIO</h1>
    <h2 className="text-2xl">Websites:</h2>
    <div className="flex flex-wrap justify-evenly content-evenly">
    <PortfolioWork pictures={people} />
    </div>
    <h2 className="text-2xl">VFX:</h2>
    <div className="flex flex-wrap justify-evenly content-between">

    <PortfolioWork pictures={linkTest}></PortfolioWork>
    <PortfolioWork pictures={leafVFX} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    </div>
    <h2 className="text-2xl">Other:</h2>
    <div className="flex flex-wrap justify-evenly content-evenly">
    <PortfolioWork pictures={mailbox} />
    </div>
    </main>
    </>
  );
}