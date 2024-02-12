import { people, mailbox } from "@/components/peices";
import PortfolioWork from "@/components/PortfolioWork";
import Image from "next/image";

export default function Portfolio() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center p-10">
    <h1 className="py-20">PORTFOLIO</h1>
    <h2>Websites:</h2>
    <div className="flex flex-wrap justify-evenly content-evenly">
    <PortfolioWork pictures={people} />
    </div>
    <h2>VFX:</h2>
    <div className="flex flex-wrap justify-evenly content-evenly">
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    </div>
    <h2>Other:</h2>
    <div className="flex flex-wrap justify-evenly content-evenly">
    <PortfolioWork pictures={mailbox} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    <PortfolioWork pictures={people} />
    </div>
    </main>
    </>
  );
}