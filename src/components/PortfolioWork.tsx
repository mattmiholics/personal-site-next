"use client";
import Image from 'next/image';
import Modal from './Modal';
import { useState } from 'react';

export default function PortfolioWork({ pictures }) {  // Destructure pictures from props

  const [showModal, setShowModal] = useState(false);

  const openModalHandler = () => {
    setShowModal(true);
  }

  const closeModalHandler = () => {
    setShowModal(false);
  }

  return (
    <>
      <div 
        className='flex flex-row justify-center py-10'
        onClick={openModalHandler}
      >
        <div 
          className='group relative max-w-md h-auto overflow-hidden bg-cover bg-no-repeat'
        >
          <Image
            src={pictures[0].src}  // Access src directly without curly braces
            alt={pictures[0].alt}
            className='rounded-lg'
          />
          <div className='cursor-pointer absolute bottom-0 left-0 right-0 top-0 justify-center overflow-hidden rounded-lg flex flex-col bg-gray-200 bg-fixed opacity-0 transition duration-300 ease-in-out group-hover:opacity-50'>
          </div>
          <div className='absolute bottom-0 left-0 right-0 top-0 justify-center flex flex-col opacity-0 text-black group-hover:opacity-100'>
            <h1 className='flex self-center'>{pictures[0].name}</h1>
            <p className='flex self-center'>{pictures[0].desc}</p>
          </div>
        </div>
      </div> 
      <Modal 
        isOpen={showModal}
        onDismiss={closeModalHandler}
        title={pictures[0].name}
        images={pictures}
      >
      </Modal>
    </>
  )
}