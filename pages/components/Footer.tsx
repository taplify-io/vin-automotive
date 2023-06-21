import Link from 'next/link'

function Footer() {
    return (
        <footer className="mt-8 max-w-7xl mx-auto flex flex-col items-center w-full px-4 sm:px-6 md:px-8 pb-8">
            <h1 className="uppercase text-3xl md:text-4xl font-semibold text-transparent bg-gradient-to-r bg-clip-text to-[#505050] from-black">Plate.</h1>

            <ul className="flex items-center gap-8 mt-3">
                <li>
                    <Link href="#">
                        <span className="text-base md:text-xl">FAQ</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <span className="text-base md:text-xl">About</span>
                    </Link>
                </li>
                <li>
                    <Link href="#">
                        <span className="text-base md:text-xl">Careers</span>
                    </Link>
                </li>
            </ul>

            <small className="mt-10 md:mt-20">© 2023 Plate Sdn Bhd. All rights reserved.</small>
        </footer>
    )
}

export default Footer
