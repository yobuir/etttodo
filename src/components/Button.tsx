import React, { FC, MouseEvent } from 'react';

interface ButtonProps {
    text: string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}


const Button: FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <div className="">
            <button className="px-4 py-2 bg-[#4553B1] text-white rounded-none hover:bg-blue-700 focus:outline-none focus:ring focus:ring-[#4553B1]" onClick={onClick}>{text}</button>
        </div>
        );
}

export default Button;
