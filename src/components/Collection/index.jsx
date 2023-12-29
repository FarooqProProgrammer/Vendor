import React from 'react'
import CollectionCard from '../../common/CollectionCard'
import { CollectionOne, CollectionThree, CollectionTwo } from '../../assets'


export default function Collection() {
    return (
        <div className='w-full h-full py-2 border border-white'>
            <div className="container mx-auto">
                <div className="grid gap-2 px-2 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1 place-items-start">
                    <CollectionCard subtitle={'Hot List'} title={'Women Collection'} backImg={CollectionOne} customCss={'row-span-2 cursor-pointer col-span-2 h-full py-2'} />
                    <CollectionCard subtitle={'Hot List'} title={'Mens Collection'} backImg={CollectionTwo} customCss={'col-span-2 cursor-pointer h-[300px] py-2'} />
                    <CollectionCard subtitle={'Hot List'} title={'Kids Collection'} backImg={CollectionThree} customCss={' h-[300px] cursor-pointer py-2'} />
                    <CollectionCard subtitle={'Hot List'} title={'E-Gift Card'} backImg={CollectionOne} customCss={' h-[300px] cursor-pointer py-2'} />
                </div>
            </div>
        </div>
    )
}
