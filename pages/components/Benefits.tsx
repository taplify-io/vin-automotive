const benefits = [
    {
        title: 'Expansive Collection',
        description: 'Over 10,000 Plates Available',
        icon: '/assets/collection.png',
    },
    {
        title: 'Swift Delivery',
        description: 'Plates Ready in 48 Hours',
        icon: '/assets/fast-delivery.png',
    },
    {
        title: 'Top-notch Service',
        description: 'Exceptional Customer Experience',
        icon: '/assets/good-service.png',
    },
]

function Benefits() {
    return (
        <section className="max-w-7xl flex flex-col lg:flex-row mx-auto w-full px-4 mt-32 md:mt-64 sm:px-6 md:px-8 gap-12 lg:gap-16 xl:gap-[140px]">
            <div className="w-full lg:w-7/12">
                <h2 className="text-3xl lg:text-5xl font-bold">Why Choose Us?</h2>

                <p className="text-base lg:text-xl mt-8 lg:mt-16 text-gray-600">Searching for the perfect car plate number has never been easier! Our vast selection of exclusive car plate numbers will leave you spoilt for choice. We provide a seamless and enjoyable process to help you put the perfect finishing touch on your ride.</p>

                <div className="grid grid-cols-3 mt-10 lg:mt-20">
                    <div>
                        <p className="text-3xl font-bold">30+</p>
                        <p className="font-medium text-xs lg:text-base mt-2">Minutes Process</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">24/7</p>
                        <p className="font-medium text-xs lg:text-base mt-2">Customer Support</p>
                    </div>
                    <div>
                        <p className="text-3xl font-bold">100%</p>
                        <p className="font-medium text-xs lg:text-base mt-2">Satisfaction Guaranteed</p>
                    </div>
                </div>
            </div>

            <ul className="w-full lg:w-5/12 flex flex-col gap-3">
                {benefits.map(({ icon, title, description }) => (
                    <li className="flex items-center bg-[#F5F5F5] p-2 gap-8 rounded-lg">
                        <div className="bg-[#DBDBDB] p-5 w-fit rounded-md">
                            <img className="w-12 h-12 lg:w-16 lg:h-16 text-[#626262]" src={icon} alt="" />
                        </div>

                        <div>
                            <h3 className="text-base lg:text-xl font-semibold">{title}</h3>
                            <p className="text-xs lg:text-sm mt-3">{description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Benefits
