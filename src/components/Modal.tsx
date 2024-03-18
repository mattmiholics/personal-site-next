import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react"; // Import useState and useEffect hooks
import Image from "next/image";

const Modal = ({ isOpen, title, onDismiss, images }) => {
    const [expandedImage, setExpandedImage] = useState(null); // State to track expanded image

    const handleImageClick = (imgId) => {
        setExpandedImage(imgId); // Set the clicked image as expanded
    };

    const handleExpandedImageClose = () => {
        setExpandedImage(null); // Close expanded image
    };

    useEffect(() => {
        if (!isOpen) {
            // Reset expanded image state when modal is closed
            setExpandedImage(null);
        }
    }, [isOpen]); // Run this effect when the isOpen prop changes

    return (
        <>
            {isOpen && (
                <div
                    className='fixed w-screen bg-black bg-opacity-60 top-20 bottom-0 left-0 right-0 z-40 flex justify-center'
                    onClick={onDismiss}
                >
                    <div
                        className="min-w-[400px] max-w-full overflow-x-hidden min-h-[200px] bg-gray-300 md:rounded-xl flex flex-col"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="w-full flex flex-row items-center self-center justify-between mb-1 border-b-gray-300 border-t-0 sticky top-0 bg-gray-300">
                            <h1 className="text-black my-5 ml-10 text-center text-xl md:text-3xl">{images[0].name}</h1>
                            <AiOutlineClose
                                className="text-4xl mr-10 text-black hover:text-red-600 cursor-pointer"
                                onClick={onDismiss}
                            />
                        </div>
                        {expandedImage !== null && (
                            <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center z-50 bg-black bg-opacity-80" onClick={handleExpandedImageClose}>
                                <div className="max-h-screen max-w-screen overflow-hidden">
                                    <Image
                                        src={images.find(img => img.id === expandedImage).src}
                                        alt={images.find(img => img.id === expandedImage).alt}
                                        layout="fill"
                                        objectFit="contain"
                                        className="object-none"
                                    />
                                </div>
                            </div>
                        )}

                        <div className="px-10 aspect-video w-sm h-auto object-contain">
                            {images.map((img) => (
                                <div key={img.id} onClick={() => handleImageClick(img.id)} className="cursor-pointer">
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        className='w-full h-auto md:max-w-2xl'
                                    />
                                    <p
                                        className='text-black text-center mb-5 text-2xl'
                                    >
                                        {img.desc}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Modal;