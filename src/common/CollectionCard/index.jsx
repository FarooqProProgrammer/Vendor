import React from 'react'

export default function CollectionCard({ customCss, backImg,subtitle,title }) {
    return (
        <div className={`w-full px-4 gap-2 flex flex-col justify-end items-start  bg-white ${customCss}`} style={{ backgroundImage: `url(${backImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <h5 className='text-xl font-thin text-black Merriweather'>
                {subtitle}
            </h5>
            <h4 className='text-3xl text-black Merriweather'>
                <span className='font-black'>{title}</span>
            </h4>
            <h4 className='relative hover:text-gray-500 transition-all duration-500 text-lg text-black cursor-pointer after:content-[""] after:absolute after:bottom-0 after:w-[100px] after:h-[2px] after:left-0 after:bg-black  Merriweather'>
                Shop Now
            </h4>
        </div>
    )
}
