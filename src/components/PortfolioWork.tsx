"use client"
import Image from 'next/image';
import Modal from './Modal';
import { useState } from 'react';
import { FaUnity } from 'react-icons/fa';
import { SiAdobephotoshop, SiUnrealengine } from 'react-icons/si';
import mayaIco from "../../public/images/Icons/maya-logo.png";
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
      <Link href={pictures[0].href}>
      <div
      className='max-w-md aspect-square flex flex-row justify-center mx-2 py-5 md:py-10 cursor-pointer'
      onClick={pictures[0].href == null ? openModalHandler : null}
    >
      
      <div className='group relative aspect-video  overflow-hidden bg-cover bg-no-repeat'>
        <Image
          src={src}
          alt={alt}
          className='h-full w-full object-cover rounded-lg'
        />
        <div className='absolute bottom-0 left-0 right-0 top-0 justify-center overflow-hidden rounded-lg flex flex-col bg-gray-500 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-70'></div>
        <div className='absolute bottom-0 left-0 right-0 top-0 justify-center flex flex-col opacity-0 text-black group-hover:opacity-100'>
          <h1 className='flex self-center text-3xl'>{name}</h1>
          <p className='flex self-center italic'>{pictures[0].hoverdesc}</p>
          <p className='flex self-center py-2'>Tools Used:</p>
          <div className='flex self-center justify-evenly w-1/2'>
            {renderToolIcon(toolsused[0])}
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
        className='h-full w-full object-cover rounded-lg'
      />
      <div className='absolute bottom-0 left-0 right-0 top-0 justify-center overflow-hidden rounded-lg flex flex-col bg-gray-500 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-70'></div>
      <div className='absolute bottom-0 left-0 right-0 top-0 justify-center flex flex-col opacity-0 text-black group-hover:opacity-100'>
        <h1 className='flex self-center text-3xl'>{name}</h1>
        <p className='flex self-center italic'>{pictures[0].hoverdesc}</p>
        <p className='flex self-center py-2'>Tools Used:</p>
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