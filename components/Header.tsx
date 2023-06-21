import { generateWhatsAppLink } from '../lib/whatsapp'

function Header() {
    return (
        <header className="bg-white py-6 flex justify-between items-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
            <div className="w-8 h-6 mr-6">
                <img className="w-full h-full" src="/logo.svg" alt="" />
            </div>

            <div className="ml-7 flex items-center gap-2">
                <a href={generateWhatsAppLink('60194513111', "I'm interested to know the available car plates.")} target="_blank" className="flex items-center gap-3 bg-gradient-to-r to-[#FFD700] via-[#FFC200] from-[#FFA500] rounded-lg py-2.5 px-4">
                    <img className="h-4 w-4" src="/assets/black-whatsapp.png" alt="" />
                    <span className="text-sm font-medium">Contact Alan</span>
                </a>

                <a href={generateWhatsAppLink('60122697878', "I'm interested to know the available car plates.")} target="_blank" className="flex items-center gap-3 bg-gradient-to-r to-[#FFD700] via-[#FFC200] from-[#FFA500] rounded-lg py-2.5 px-4">
                    <img className="h-4 w-4" src="/assets/black-whatsapp.png" alt="" />
                    <span className="text-sm font-medium">Contact Alvin</span>
                </a>
            </div>
        </header>
    )
}

export default Header
