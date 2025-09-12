import HomeProjectCard from "@/app/components/HomeProjectCard";
import placeholderImg from '@/public/placeholder-600x300.jpg'
import euroinvestImg from '@/public/euroinvest.png'
import bajramiImg from '@/public/bajrami.png'

export default function HomeSection3() {
    return (
        <section className={'min-h-screen w-page-width mx-auto relative z-10  mt-24'} id={'projects'}>
            <div >
                <h2 className={'text-5xl md:text-6xl text-white text-center'}><span className={'glowing-text font-medium'}>NEON&apos;s</span> projects</h2>
                <p className={'text-lg md:text-xl text-neutral-400 text-center max-w-[600px] font-medium mx-auto mt-4'}>
                    Discover some of our top projects
                </p>
            </div>
            <div className={'mt-12 flex flex-col gap-12'}>
                        <HomeProjectCard
                            title={'Euro Invest'}
                            desc={'Euroinvest is a leader in the asphalt and transportation industry with many years of experience. We provide guaranteed quality and services that build the future of infrastructure.'}
                            fromDate={'Jun 2025'}
                            toDate={'Jul 2025'}
                            link={'https://euroinvest.space/'}
                            img={euroinvestImg}
                        />
                        <HomeProjectCard
                            title={'Bajram Rexhepi'}
                            desc={'The official page of Bajram Rexhepi, candidate for Mayor of the Municipality of Tetovo. Discover his commitment to serving the citizens and his vision for the development of Tetovo.'}
                            fromDate={'Jul 2025'}
                            toDate={'Sep 2025'}
                            link={'https://bajramrexhepi.com/sq'}
                            img={bajramiImg}
                        />
            </div>
        </section>
    )
}