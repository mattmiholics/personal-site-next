import Image from "next/image";

export default function Resume() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center justify-between bg-gray-300 text-black p-2 md:p-10 py-20">
    <h1 className="text-5xl p-5 pt-10 md:pt-20">Resume</h1>

    <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:m-5 max-w-2xl">
      <h2 className="p-2  text-lg md:text-2xl font-bold">UI Engineer Co-op - Comcast</h2>
      <h3 className="p-2 text-md md:text-2xl font-bold">03/2023 - 09/2023, Philadelphia PA</h3>
      <ul className="text-left text-sm md:text-lg">
        <li className="p-2">- temporary content temporary content temporary content temporary content</li>
        <li className="p-2">- temporary content</li>
        <li className="p-2">- temporary content</li>
      </ul>
    </div>

    <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:m-5 max-w-2xl">
      <h2 className="p-2  text-lg md:text-2xl font-bold">Web Developer | Tech Artist - Abuducted Monkeys</h2>
      <h3 className="p-2 text-md md:text-2xl font-bold">03/2022 - present, Philadelphia PA</h3>
      <ul className="text-left text-sm md:text-lg">
        <li className="p-2">- temporary content temporary content temporary content temporary content</li>
        <li className="p-2">- temporary content</li>
        <li className="p-2">- temporary content</li>
      </ul>
    </div>
    
    <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:m-5 max-w-2xl">
      <h2 className="p-2  text-lg md:text-2xl font-bold">Web Development Co-op - Southeastern Pennsylvania Transportation Authority</h2>
      <h3 className="p-2 text-md md:text-2xl font-bold">03/2022 - 09/2022, Philadelphia PA</h3>
      <ul className="text-left text-sm md:text-lg"> 
        <li className="p-2">- Helped transition SEPTA's main website, septa.org, to WordPress</li>
        <li className="p-2">- Daily updates to SEPTA's homepage as well as alerts and advisories for SEPTA's 100+ transit routes</li>
        <li className="p-2">- Helped edit and publish online content for a major brand deal for SEPTA's first new station in 25 years</li>
      </ul>
    </div>

    <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:m-5 max-w-2xl">
      <h2 className="p-2  text-lg md:text-2xl font-bold">Game Developer - Drexel University</h2>
      <h3 className="p-2 text-md md:text-2xl font-bold">03/2021 - 09/2021, Philadelphia PA</h3>
      <ul className="text-left text-sm md:text-lg">
        <li className="p-2">- Worked with a team of eight using Perforce to create and store assets for use by other students</li>
        <li className="p-2">- Created and reported progress on twenty versions of game-ready assets in a timely manner</li>
        <li className="p-2">- Lowered production time between iterations by around 40 percent</li>
      </ul>
    </div>

    <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:m-5 max-w-2xl">
      <h2 className="p-2  text-lg md:text-2xl font-bold">Lead Server/Bartender - The Club At Shannondell</h2>
      <h3 className="p-2 text-md md:text-2xl font-bold">12/2018 - 03/2022, Valley Forge PA</h3>
      <ul className="text-left text-sm md:text-lg">
        <li className="p-2">- Took over 40 calls a shift during contactless service</li>
        <li className="p-2">- Maintain relations with residents while providing quick and friendly service</li>
        <li className="p-2">- Train new employees over five shifts regarding dining room conduct and procedures</li>
      </ul>
    </div>
    </main>
    </>
  );
}