import React from 'react';
import Jannick from '../images/Jannick.jpg';

const Header_main = () => {
    return (
        <div>
            <h1 className='bg-[darkblue] text-white text-5xl text-center p-10 font-bold uppercase '>Jannick</h1>
            <div className='max-w-[1200px] m-auto'>
                <img className='w-[25%] m-auto mt-10 rounded-full' src={Jannick} alt="billede af Jannick" />
                <p className='mt-10'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora, eligendi quas quos dolorum exercitationem dolores quia commodi hic doloribus placeat iste? Aliquid magni totam impedit quis delectus qui rem repellendus.
                    Atque quod illum quidem ipsam tempora, omnis quae culpa esse repellendus facere nisi, consequatur beatae obcaecati maxime dolorem nemo dolorum minus dolor. Quos sed tenetur ratione quam reiciendis autem accusantium.
                    Quasi, esse. Sunt, esse eveniet! Magnam eligendi eos reiciendis iure incidunt odit veniam asperiores, accusamus suscipit dolores laborum expedita fuga corrupti corporis nulla dolore provident temporibus, sequi ipsum adipisci voluptas!
                    Dignissimos quas facere obcaecati ex minima aperiam quo hic aspernatur labore alias laboriosam deserunt, aliquam amet quibusdam eaque temporibus? Vero, optio. Rerum tempora, dolorum temporibus magni ducimus sapiente enim dolores.
                    Inventore officiis error harum. Reiciendis impedit nam mollitia. Illo quibusdam eius perferendis libero eos asperiores esse reprehenderit animi ratione vel, veritatis sequi corporis deleniti magnam, vitae accusantium deserunt! Labore, perferendis.
                </p>
            </div>
        </div>
    );
}

export default Header_main;
