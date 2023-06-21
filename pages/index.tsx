import Benefits from './components/Benefits'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Listing from './components/Listing'

function Home() {
    return (
        <div className="min-h-screen flex flex-col items-center gap-10">
            <Header />

            <main className="flex-1 w-full flex flex-col">
                <Hero />

                <div className="flex flex-col mt-24 md:mt-16 md:-translate-y-[100px] lg:-translate-y-[160px] xl:-translate-y-[180px]">
                    <Listing />

                    <Benefits />
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default Home
