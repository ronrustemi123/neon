import HomeProjectCard from "@/app/components/HomeProjectCard";
import placeholderImg from "@/public/placeholder-600x300.jpg";

export default function HomeSection3() {
    return (
        <section className={'min-h-screen w-page-width mx-auto relative z-10  mt-24'} id={'project-section'}>
            <div >
                <h2 className={'text-5xl md:text-6xl text-white text-center'}><span className={'glowing-text font-medium'}>NEON's</span> projects</h2>
                <p className={'text-lg md:text-xl text-neutral-400 text-center max-w-[600px] font-medium mx-auto mt-4'}>
                    Discover some of our top projects
                </p>
            </div>
            <div className={' mt-12 flex flex-col gap-12'}>
                <HomeProjectCard
                    title={'Euro Invest'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at bibendum est. Fusce vel scelerisque.'}
                    fromDate={'May 2025'}
                    toDate={'Jun 2025'}
                    link={'https://tokentrace.pages.dev/'}
                    img={placeholderImg}
                />
                <HomeProjectCard
                    title={'Euro Invest'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at bibendum est. Fusce vel scelerisque.'}
                    fromDate={'May 2025'}
                    toDate={'Jun 2025'}
                    link={'https://tokentrace.pages.dev/'}
                    img={placeholderImg}
                />
                <HomeProjectCard
                    title={'Euro Invest'}
                    desc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse at bibendum est. Fusce vel scelerisque.'}
                    fromDate={'May 2025'}
                    toDate={'Jun 2025'}
                    link={'https://tokentrace.pages.dev/'}
                    img={placeholderImg}
                />
            </div>
        </section>
    )
}