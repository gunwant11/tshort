import React from "react";


export interface ModalProps {
    shortened: string;
    isOpen: boolean;
    onClose: () => void;
    
}

export const Modal = ({ shortened, isOpen, onClose }: ModalProps) => {
    return (
        <div
            className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex items-center justify-center ${
                isOpen ? "block" : "hidden"
            }`}
        >
            <div
                className="bg-white rounded-lg p-4 w-4/12 text-black"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div className="flex justify-end">
                    <button

                        onClick={onClose}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <div className=" px-2 pb-1 " >
                    Your new url is  <br/>
                    <a href={shortened.includes("http")? shortened : `https://${shortened}`} target="_blank" className="text-blue-500" >{" "}{shortened}</a> 
                </div>
            
            </div>
        </div>
    );
};
