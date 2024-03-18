
import {AiFillYoutube, AiFillLinkedin} from 'react-icons/ai';
import {FaSquareXTwitter} from 'react-icons/fa6';
import {FaTiktok} from 'react-icons/fa'


function Footer() {
  
  return (
  <>
  <footer className="pb-2 bg-black text-white h-fit w-full flex flex-row justify-between">
  <div
    className="p-4 justify-start text-mPink bg-grimace items-center self-center">
    <p
      className="text-mPink italic text-sm md:text-xl"
      >Matt Miholics 2024</p>
  </div>
  <div className="  flex flex-row justify-evenly items-center self-center">
    <div className="p-9 ">
      <a href='https://www.linkedin.com/in/matt-miholics/' target='_blank' className='text-3xl md:text-4xl hover:text-orange-400 text-white '>
        <AiFillLinkedin />
      </a>
    </div>
    
  </div>
  
</footer>
  </>
);

}

export default Footer;