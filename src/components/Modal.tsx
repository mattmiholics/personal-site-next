import { AiOutlineClose } from "react-icons/ai";
import Image from "next/image";

const Modal = ({isOpen, title, onDismiss,children, images}) => {
    if (!isOpen){
        return null;
    }
    return (
      <>
        <div 
            className='fixed w-screen h-screen bg-black bg-opacity-60 top-20 bottom-0 left-0 right-0 z-40 flex justify-center'
            onClick={onDismiss}
        >
            <div
            className="min-w-[400px] max-w-full overflow-x-hidden min-h-[200px] bg-white rounded-xl flex flex-col"
            onClick={(event) => event.stopPropagation()}>
                <AiOutlineClose
                    className="absolute right-4 top-3 text-2xl text-red-600 cursor-pointer"
                />
                <div className="w-full h-10 flex items-center mb-1 border border-b-gray-300">
                    <h1 className="text-xl font-bold">{images.name}</h1>
                </div>
                <div>
                { images.map ((img) =>(
                        <div key={img.id}>
                            <Image 
                            src = {img.src}
                            alt = {img.alt}
                            />
                            <p>{img.desc}</p>
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