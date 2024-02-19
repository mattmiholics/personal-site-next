import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Modal = ({isOpen, title, onDismiss,children, images}) => {
    if (!isOpen){
        return null;
    }
    return (
      <>
        <div 
            className='fixed w-screen  bg-black bg-opacity-60 top-20 bottom-0 left-0 right-0 z-40 flex justify-center'
            onClick={onDismiss}
        >
            <div
            className="min-w-[400px] max-w-full overflow-x-hidden  min-h-[200px] bg-white rounded-xl flex flex-col"
            onClick={(event) => event.stopPropagation()}>
                <div className="w-full my-5 flex flex-row items-center self-center justify-between mb-1 border border-b-gray-300">
                    <h1 className="text-black ml-10 text-center text-m md:text-3xl">{images[0].name}</h1>
                    <AiOutlineClose
                    className=" text-4xl mr-10 text-red-600 cursor-pointer"
                    onClick={onDismiss}
                />
                </div>
                
                
                <div className="px-10 aspect-video w-sm h-auto object-contain">
                { images.map ((img) =>(
                        <div key={img.id}>
                            <Image 
                            src = {img.src}
                            alt = {img.alt}
                            className='md:max-w-2xl'
                            />
                            <p 
                            className='text-black text-center mb-5 text-2xl'
                            >
                                {img.desc}
                            </p>
                        </div>
                    )
                )}   
                </div>
            </div>
        </div> 
      </>
    )
  }
  export default Modal;