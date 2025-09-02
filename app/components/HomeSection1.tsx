import CountUpCustom from "@/app/components/CountUpCustom";

export default function HomeSection1() {
    return (
        <section className={'min-h-[70vh] relative z-10 w-page-width mx-auto'}>
            <h2 className={'text-5xl md:text-6xl text-white text-center'}>About <span className={'glowing-text font-medium'}>NEON</span></h2>
            <p className={'text-lg md:text-xl text-neutral-400 text-center max-w-[600px] font-medium mx-auto mt-4'}>We're a team of passionate developers and designers who believe in the power of great digital experiences.
                Our mission is to help businesses illuminate their potential through innovative technology.
            </p>
            <div className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 w-full mt-16 md:mt-32'}>
                <CountUpCustom from={0} to={20} text={'Projects Completed'} />
                <CountUpCustom from={0} to={10} text={'Happy Clients'} />
                <CountUpCustom from={0} to={3} text={'Years Experience'} />
                <CountUpCustom icon={false} from={0} to={24} text={'Support'} />
            </div>
        </section>
    )
}