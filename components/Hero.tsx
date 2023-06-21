function Hero() {
    return (
        <section className="relative">
            <div className="max-w-7xl relative z-10 mx-auto flex items-center px-4 sm:px-6 md:px-8 gap-[50px]">
                <div className="md:max-w-[500px]">
                    <div className="md:hidden max-w-[450px] mx-auto">
                        <img className="w-full object-cover" src="/assets/car.png" alt="" />
                    </div>

                    <h1 className="mt-6 md:mt-0 text-[64px] md:text-8xl lg:text-[128px] leading-none uppercase font-semibold text-transparent bg-gradient-to-r bg-clip-text to-[#FFD700] via-[#FFC200] from-[#FFA500]">Plate.</h1>

                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-medium mt-6">Search for your favourite plate number</h2>

                    <p className="text-black/60 mt-6 ">This is just some text, some dummy text for this hero section, Im not sure what to put in this section.</p>
                </div>

                <div className="hidden md:block">
                    <img className="w-full object-cover" src="/assets/car.png" alt="" />
                </div>
            </div>

            <div className="hidden md:block md:-translate-y-[100px] lg:-translate-y-[160px] xl:-translate-y-[180px]">
                <img src="/assets/background.png" alt="" />
            </div>
        </section>
    )
}

export default Hero
