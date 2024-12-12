import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";

const Modal = ({ isOpen, title, onDismiss, images }) => {
    const [expandedImage, setExpandedImage] = useState(null);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden"; // Disable background scroll
        } else {
            document.body.style.overflow = ""; // Enable background scroll
        }

        return () => {
            document.body.style.overflow = ""; // Cleanup when modal is unmounted
        };
    }, [isOpen]);

    const handleImageClick = (imgId) => {
        setExpandedImage(imgId);
    };

    const handleExpandedImageClose = () => {
        setExpandedImage(null);
    };

    return (
        <>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-60 z-40 flex justify-center items-center"
                    onClick={onDismiss}
                >
                    <div
                        className="w-full max-w-lg md:max-w-3xl h-[90vh] bg-gray-300 rounded-xl flex flex-col overflow-hidden"
                        onClick={(event) => event.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="w-full flex items-center justify-between p-4 bg-gray-300 border-b">
                            <h1 className="text-black text-lg md:text-4xl font-semibold">{title}</h1>
                            <AiOutlineClose
                                className="text-2xl md:text-4xl text-black hover:text-red-600 cursor-pointer"
                                onClick={onDismiss}
                            />
                        </div>

                        {/* Expanded Image View */}
                        {expandedImage !== null && (
                            <div
                                className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-80"
                                onClick={handleExpandedImageClose}
                            >
                                <div className="relative w-[90%] h-[90%]">
                                    <Image
                                        src={images.find((img) => img.id === expandedImage).src}
                                        alt={images.find((img) => img.id === expandedImage).alt}
                                        layout="fill"
                                        objectFit="contain"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Images Column */}
                        <div className="flex-1 overflow-y-auto px-4">
                            {images.map((img) => (
                                <div
                                    key={img.id}
                                    className="mb-4 cursor-pointer"
                                    onClick={() => handleImageClick(img.id)}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        layout="responsive"
                                        width={500}
                                        height={300}
                                        className="rounded-md"
                                    />
                                    <p className="text-black text-center mt-2 text-sm lg:text-2xl">{img.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;