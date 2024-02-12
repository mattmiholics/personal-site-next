
import {AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaTiktok} from 'react-icons/fa'


function Footer() {
  
  return (
  <>
  <footer className="pb-2 h-fit w-full flex flex-row justify-between">
  <div
    className="p-4 justify-start text-mPink bg-grimace items-center self-center">
    <p
      className="text-mPink "
      >Abducted Monkeys LLC</p>
  </div>
  <div className="  flex flex-row justify-evenly items-center self-center">
    <div className="p-9">
      <a href="https://www.tiktok.com/@abductedmonkeys" className="text-4xl hover:text-mTan text-mPink ">
        <FaTiktok/>
      </a>
    </div>
    <div className="p-9 ">
      <a href="https://twitter.com/Abduct3dMonkeys" className="text-4xl hover:text-mTan text-mPink ">
        <FaSquareXTwitter/>
      </a>
    </div>
    <div className="p-9 ">
      <a href="https://www.youtube.com/@AbductedMonkeys" className="text-4xl hover:text-mTan text-mPink ">
        <AiFillYoutube/>
      </a>
    </div>
    <div className="p-9 ">
      <a href='https://www.linkedin.com/company/abductedmonkeys/' className='text-4xl hover:text-mTan text-mPink '>
        <AiFillLinkedin />
      </a>
    </div>
    
  </div>
  
</footer>
  </>
);

}

export default Footer;