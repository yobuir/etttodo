import React, { FC, ChangeEvent } from 'react';

interface InputProps {
    placeholder: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({ placeholder, onChange }) => {
    return (
        <div className="flex-1">
            <input className="w-[100%] px-4 py-2 border border-gray-300 rounded-none shadow-sm focus:outline-none focus:border-[#4553B1]" type="text" placeholder={placeholder} onChange={onChange} />
        </div>
    );
};

export default Input;
