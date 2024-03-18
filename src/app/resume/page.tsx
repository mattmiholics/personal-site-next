import Image from "next/image";
import Link from "next/link";
import mattImg from '../../../public/images/lockjawui/mattImg.jpg'

export default function Resume() {
  return (
    <>
    <main className="bg-gray-300 text-black">
    <h1 className="text-5xl p-5 pt-10 md:pt-32 flex flex-col text-center self-center items-center">Resume</h1>
    <div className="flex min-h-full items-center justify-center bg-gray-300 text-black p-2 md:p-5">
      <div className="flex flex-col md:flex-row-reverse bg-orange-400 bg-opacity-40  rounded-lg">
        <div className="flex flex-col items-center bg-orange-400 bg-opacity-40 md:m-5 w-full md:w-1/3 rounded-lg">
          <h1 className="text-center flex flex-col self-center m-2 py-5 md:mx-5 text-5xl font-bold"> Matt Miholics </h1>
          <div className="m-5 flex md:w-1/2 flex-col py-3">
            <Image className="flex rounded-full h-auto border-none" src={mattImg} alt="Image of Me" />
          </div>
          <div className="flex flex-col self-center items-center justify-center px-4 w-full md:w-3/4">
            <h2 className="text-4xl font-bold">Skills:</h2>
            <div className="items-center justify-center flex flex-col">
              <h3 className="text-2xl items-center flex justify-center text-center font-bold">Coding</h3>
                <div className=" text-lg justify-evenly items-center flex flex-wrap w-3/4">
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">C#</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Typescript</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Python</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">JavaScript</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">HTML</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">StencilJS</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">CSS</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">C++</p>
                </div>
            </div>
            <div className="items-center justify-center flex flex-col">
              <h3 className="text-2xl items-center flex justify-center text-center font-bold">Design:</h3>
                <div className=" text-lg items-center justify-around flex flex-wrap w-3/4">
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Maya</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Unity</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Substance Painter</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Unreal</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">ZBrush</p>
                </div>
            </div>
            <div className="items-center justify-center flex flex-col">
              <h3 className="text-2xl items-center flex justify-center text-center font-bold">Other:</h3>
                <div className=" text-lg justify-around flex flex-wrap w-3/4">
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Adobe Creative Suite</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">GitHub</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Microsoft Office</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Perforce</p>
                  <p className="m-2 p-2 shadow bg-orange-400 bg-opacity-60 rounded-lg">Final Cut Pro X</p>
                </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-center items-center justify-center my-4 w-5/6 md:w-3/4 m-2 md:mx-5">
            <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:mx-5 w-full ">
              <h2 className=" p-2  text-lg md:text-2xl font-bold">UI Engineer Co-op - Comcast</h2>
              <h3 className="p-2 text-md md:text-2xl font-bold">03/2023 - 09/2023, Philadelphia PA</h3>
              <ul className="text-left flex flex-col items-center text-sm md:text-lg">
                <li className="p-2 md:px-5">- Helped maintain and write test cases for 30+ web components seen by millions of users daily</li>
                <li className="p-2 md:px-5">- Helped write test cases to simulate 1000s of users to test a web app’s performance</li>
                <li className="p-2 md:px-5">- Improved performance of a web app by around 10%</li>
              </ul>
            </div>

            <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:mx-5 w-full">
              <h2 className="p-2  text-lg md:text-2xl font-bold">Web Developer | Tech Artist - Abuducted Monkeys</h2>
              <h3 className="p-2 text-md md:text-2xl font-bold">03/2022 - present, Philadelphia PA</h3>
              <ul className="text-left flex flex-col items-center text-sm md:text-lg">
                <li className="p-2 md:px-5">- Helped write 1000+ Jira Tickets, Maintained code base, and was a leader of a team of 16 for our second game <Link href="https://www.abductedmonkeys.com/lockjaw" target="_blank">Lockjaw</Link></li>
                <li className="p-2 md:px-5">- Designed, deployed, and maintained company website seen by thousands of people </li>
                <li className="p-2 md:px-5">- Made Multiple VFX and Helped Maintain 100+ scripts post-launch for our first game: Trouble in Tornado Town</li>
              </ul>
            </div>
            
            <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:mx-5 w-full">
              <h2 className="p-2  text-lg md:text-2xl font-bold">Web Development Co-op - Southeastern Pennsylvania Transportation Authority</h2>
              <h3 className="p-2 text-md md:text-2xl font-bold">03/2022 - 09/2022, Philadelphia PA</h3>
              <ul className="text-left flex flex-col items-center text-sm md:text-lg"> 
                <li className="p-2 md:px-5">- Helped transition SEPTAs main website, septa.org, to WordPress</li>
                <li className="p-2 md:px-5">- Daily updates to SEPTAs homepage as well as alerts and advisories for SEPTAs 100+ transit routes</li>
                <li className="p-2 md:px-5">- Helped edit and publish online content for a major brand deal for SEPTAs first new station in 25 years</li>
              </ul>
            </div>

            <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:mx-5 w-full">
              <h2 className="p-2  text-lg md:text-2xl font-bold">Game Developer - Drexel University</h2>
              <h3 className="p-2 text-md md:text-2xl font-bold">03/2021 - 09/2021, Philadelphia PA</h3>
              <ul className="text-left flex flex-col items-center text-sm md:text-lg">
                <li className="p-2 md:px-5">- Worked with a team of eight using Perforce to create and store assets for use by other students</li>
                <li className="p-2 md:px-5">- Created and reported progress on twenty versions of game-ready assets in a timely manner</li>
                <li className="p-2 md:px-5">- Lowered production time between iterations by around 40 percent</li>
              </ul>
            </div>

            <div className="text-center flex flex-col self-center bg-orange-400 bg-opacity-40 rounded-lg m-2 md:mx-5 w-full">
              <h2 className="p-2  text-lg md:text-2xl font-bold">Lead Server/Bartender - The Club At Shannondell</h2>
              <h3 className="p-2 text-md md:text-2xl font-bold">12/2018 - 03/2022, Valley Forge PA</h3>
              <ul className="text-left flex flex-col items-center text-sm md:text-lg">
                <li className="p-2 md:px-5">- Took over 40 calls a shift during contactless service</li>
                <li className="p-2 md:px-5">- Maintain relations with residents while providing quick and friendly service</li>
                <li className="p-2 md:px-5">- Train new employees over five shifts regarding dining room conduct and procedures</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
    </main>
    </>
  );
}