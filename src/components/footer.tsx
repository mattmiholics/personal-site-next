
import {AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaTiktok} from 'react-icons/fa'


function Footer() {
  
  return (
  <>
  <footer className="bg-grimace pb-2 w-full">
  <div className="inline-flex mx-auto w-full justify-center pt-9">
    <div className="mb-8">
      <a href="https://www.tiktok.com/@abductedmonkeys" className=" flex mx-5 text-4xl hover:text-mTan text-mPink ">
        <FaTiktok/>
      </a>
    </div>
    <div className="mb-8 ">
      <a href="https://twitter.com/Abduct3dMonkeys" className=" flex mx-5 text-4xl hover:text-mTan text-mPink ">
        <FaSquareXTwitter/>
      </a>
    </div>
    <div className="mb-8  ">
      <a href="https://www.youtube.com/@AbductedMonkeys" className=" flex mx-5 text-4xl hover:text-mTan text-mPink ">
        <AiFillYoutube/>
      </a>
    </div>
    <div className="mb-8  ">
      <a href='https://www.linkedin.com/company/abductedmonkeys/' className='flex mx-5 text-4xl hover:text-mTan text-mPink '>
        <AiFillLinkedin />
      </a>
    </div>
  </div>
  <div
    className="p-4 text-center text-mPink bg-grimace">
    <p
      className="text-mPink "
      >Abducted Monkeys LLC</p>
  </div>
</footer>
  </>
);

}

export default Footer;