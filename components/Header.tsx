import { generateWhatsAppLink } from '../lib/whatsapp'

function Header() {
    const link = generateWhatsAppLink('60122697878', "I'm interested to know the available car plates.")

    return (
        <header className="bg-white py-6 flex justify-between items-center px-4 sm:px-6 md:px-8 max-w-7xl mx-auto w-full">
            <div className="w-8 h-6 mr-6">
                <img className="w-full h-full" src="/logo.svg" alt="" />
            </div>

            <div className="ml-7">
                <a href={link} target="_blank" className="bg-gradient-to-r to-[#FFD700] via-[#FFC200] from-[#FFA500] rounded-lg py-2.5 px-4">
                    <span className="text-sm font-medium">Contact our Agent</span>
                </a>
            </div>
        </header>
    )
}

export default Header
