import React from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { CiHeart, CiSearch,CiShoppingCart,CiUser  } from "react-icons/ci";

export default function Header() {
    return (
        <Box className="flex items-center justify-around w-full py-5 bg-white">
            <ul className='flex items-center justify-center gap-5'>
                <li>
                    <Link className='text-gray-900 uppercase Merriweather lg:text-md md:text-md sm:text-md'>Home</Link>
                </li>
                <li>
                    <Link className='text-gray-900 uppercase Merriweather lg:text-md md:text-md sm:text-md'>Blog</Link>
                </li>
                <li>
                    <Link className='text-gray-900 uppercase Merriweather lg:text-md md:text-md sm:text-md'>Pages</Link>
                </li>
                <li>
                    <Link className='text-gray-900 uppercase Merriweather lg:text-md md:text-md sm:text-md'>About</Link>
                </li>
                <li>
                    <Link className='text-gray-900 uppercase Merriweather lg:text-md md:text-md sm:text-md'>Contact</Link>
                </li>
            </ul>
            <div className='flex items-center gap-3 justify-normal'>
                <IconButton>
                    <CiSearch />
                </IconButton>
                <IconButton>
                    <CiUser  />
                </IconButton>
                <IconButton>
                    <CiHeart  />
                </IconButton>
                <IconButton>
                    <CiShoppingCart   />
                </IconButton>
            </div>
        </Box>
    )
}
