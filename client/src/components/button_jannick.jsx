import React from 'react';
import { Link } from 'react-router-dom';

const Button_jannick = () => {
    return (
        <div className='grid grid-cols-4 mt-10 max-w-[1200px] m-auto'>
            <div className='bg-[darkviolet] text-white text-3xl uppercase font-bold p-6 w-[100%] text-center rounded-3xl'>
                <Link to="/student">Jannick</Link>
            </div>
        </div>
    );
};

export default Button_jannick;
