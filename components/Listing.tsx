import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { ChangeEventHandler, useState } from 'react'
import { generateWhatsAppLink } from '../lib/whatsapp'

function Listing() {
    const [plates, setPlates] = useState([
        {
            no: 'ABC 123',
            state: 'Selangor',
            price: 3000,
            isAvailable: true,
        },
        {
            no: 'XYZ 789',
            state: 'Kedah',
            price: 500,
            isAvailable: false,
        },
        {
            no: 'WXY 6688',
            state: 'Kuala Lumpur',
            price: 16888,
            isAvailable: true,
        },
    ])
    const [searchText, setSearchText] = useState('')

    const handleSearchChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        setSearchText(e.target.value)
    }

    const filteredPlates = !searchText ? plates : plates.filter((plate) => plate.no.includes(searchText.toUpperCase()))

    return (
        <section className="max-w-7xl mx-auto w-full px-4 sm:px-6 md:px-8">
            <h2 className="text-3xl font-semibold">Search our database</h2>

            <div className="flex items-center mt-6 bg-[#F2F2F2] gap-2.5 p-2.5 rounded-lg w-full md:w-[400px]">
                <MagnifyingGlassIcon className="w-4 h-4" />
                <input value={searchText} onChange={handleSearchChange} className="bg-transparent outline-none w-full text-sm placeholder:font-light" type="text" placeholder="Search for your car plate" />
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredPlates.map(({ no, state, price, isAvailable }) => (
                    <div key={no} className="border border-[#D6D6D6] rounded-3xl p-6 flex justify-between gap-4">
                        <div className="flex flex-col justify-between gap-8">
                            <p className="text-lg md:text-xl lg:text-2xl font-medium">{no}</p>

                            <div>
                                <p className="text-black/[.64] text-sm lg:text-base font-light">{state}</p>
                                <p className="text-black/[.64] text-sm lg:text-base font-light">RM {price}</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-end justify-between">
                            <a href={generateWhatsAppLink('60198248014', `Hello, I would like to inquire on the car plate *${no}*`)} target="_blank" className={clsx(isAvailable ? 'cursor-pointer' : 'cursor-not-allowed')}>
                                <img className="w-6 h-6 object-cover" src={isAvailable ? '/assets/active-whatsapp.png' : '/assets/inactive-whatsapp.png'} alt="" />
                            </a>

                            <span className={clsx(isAvailable ? 'text-[#269C6B]' : 'text-[#DA0707]', 'font-medium text-sm lg:text-base')}>{isAvailable ? 'Available' : 'Sold'}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Listing
