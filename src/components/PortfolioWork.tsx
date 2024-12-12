"use client"
import Image from 'next/image';
import Modal from './Modal';
import { useState } from 'react';
import { FaUnity } from 'react-icons/fa';
import { SiAdobephotoshop, SiUnrealengine, SiNextdotjs, SiTailwindcss  } from 'react-icons/si';
import mayaIco from "../../public/images/Icons/maya.png";
import substanceIco from "../../public/images/Icons/substance logo.png";
import Link from 'next/link';

export default function PortfolioWork({ pictures }) {
  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
    document.body.style.overflow = "hidden";
  };

  const closeModalHandler = () => {
    setShowModal(false);
    document.body.style.overflow = "auto";
  };

  const renderToolIcon = (tools) => {
    if (!tools || typeof tools !== 'object') {
      console.error("Invalid 'tools' data:", tools);
      return null;
    }

    return Object.keys(tools).map((tool, index) => {
      switch (tool) {
        case 'unity':
          return tools[tool] ? <FaUnity key={`${tool}-${index}`} className='text-4xl' /> : null;
        case 'photoshop':
          return tools[tool] ? <SiAdobephotoshop key={`${tool}-${index}`} className='text-4xl' /> : null;
        case 'substance':
          return tools[tool] ? <Image src={substanceIco} alt='Substance Icon' key={`${tool}-${index}`} className='h-9 w-auto' /> : null;
        case 'unreal':
          return tools[tool] ? <SiUnrealengine key={`${tool}-${index}`} className='text-4xl' /> : null;
        case 'maya':
          return tools[tool] ? <Image src={mayaIco} alt='Maya Icon' key={`${tool}-${index}`} className='h-9 w-auto' /> : null;
        case 'nextjs':
          return tools[tool] ? <SiNextdotjs key={`${tool}-${index}`} className='text-4xl' /> : null;
        case 'tailwind':
          return tools[tool] ? <SiTailwindcss key={`${tool}-${index}`} className='text-4xl' /> : null;
        default:
          return null;
      }
    });
  };

  if (!pictures || !Array.isArray(pictures) || pictures.length === 0) {
    console.error("Invalid 'pictures' data:", pictures);
    return null;
  }

  const firstPicture = pictures[0];

  if (!firstPicture || typeof firstPicture !== 'object') {
    console.error("Invalid first picture data:", firstPicture);
    return null;
  }

  const { src, alt, name, desc, toolsused } = firstPicture;

  if (!src || !alt || !name || !desc || !toolsused || !Array.isArray(toolsused) || toolsused.length === 0) {
    console.error("Invalid picture details or 'toolsused' data:", firstPicture);
    return null;
  }

  return (
    <>
    { pictures[0].href != null ? (
    <>
      <Link href={pictures[0].href} target='_blank'>
      <div
      className='max-w-md aspect-square flex flex-row justify-center mx-2 py-5 md:py-10 cursor-pointer'
      onClick={pictures[0].href == null ? openModalHandler : null}
    >
      
      <div className='group relative aspect-video overflow-hidden bg-cover bg-no-repeat'>
  <Image
    src={src}
    alt={alt}
    className='h-full w-full object-cover rounded-lg'
  />
  <div className='absolute bottom-0 left-0 right-0 top-0 justify-around items-center overflow-hidden rounded-lg flex flex-col bg-orange-400 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-70'></div>
  <div className='absolute inset-0 justify-center items-center self-center flex flex-col opacity-0 text-black group-hover:opacity-100'>
    <div className='w-3/4 md:w-full text-center'>
      <h1 className='font-bold text-3xl'>{name}</h1>
      <p className='font-bold italic'>{pictures[0].hoverdesc}</p>
      <p className='font-bold py-2'>Tools Used:</p>
      <div className='flex justify-evenly'>
        {renderToolIcon(toolsused[0])}
      </div>
    </div>
  </div>
</div>
    </div>
      </Link> 
    </>
    ) : (
    <>
    <div
    className='max-w-md aspect-square flex flex-row justify-center mx-2 py-5 md:py-10 cursor-pointer'
    onClick={pictures[0].href == null ? openModalHandler : null}
  >
    
    <div className='group relative aspect-video  overflow-hidden bg-cover bg-no-repeat'>
      <Image
        src={src}
        alt={alt}
        priority={true}
        loading='eager'
        className='h-full w-full  object-cover rounded-lg'
      />
      <div className='absolute bottom-0 left-0 right-0 top-0 justify-center overflow-hidden rounded-lg flex flex-col bg-orange-400 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-80'></div>
      <div className='absolute bottom-0 left-0 right-0 top-0 justify-center flex flex-col opacity-0 text-black group-hover:opacity-100'>
        <h1 className='flex self-center font-bold text-2xl'>{name}</h1>
        <p className='flex self-center font-bold italic'>{pictures[0].hoverdesc}</p>
        <p className='flex self-center font-bold py-2'>Tools Used:</p>
        <div className='flex self-center justify-evenly w-1/2'>
          {renderToolIcon(toolsused[0])}
        </div>
      </div>
    </div>
  </div>
  <Modal isOpen={showModal} onDismiss={closeModalHandler} title={name} images={pictures}></Modal>
  </>
  )}
    </>
    
  );
}