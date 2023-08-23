import React from 'react';
import { Link } from 'react-router-dom';

const Back_button = () => {
    return (
        <div className='fixed bottom-0 left-0 right-0'>
            <div className='bg-[darkblue] text-white text-4xl uppercase font-bold p-8 w-[100%] text-center'>
                <div className='w-[100%]'>
                    <Link to="/">Tilbage</Link>
                </div>
            </div>
        </div>
    );
};

export default Back_button;
