import Image from 'next/image';
import Link from 'next/link';


export default function Hero() {
return (
    <section className="flex flex-col md:flex-row items-center justify-center text-center md:text-left">
    <div className="max-w-5xl mx-auto px-6 pl-25 py-10 md:py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
            <h1 className=" text-[#fff] text-4xl font-bold mb-4">Jonas</h1>
            <p className="text-gray-400 mb-6">
            Hej, jeg hedder Jonas og er studerende på Center for Medie og Kommunikation (CMK) på Roskilde Tekniske Skole. Jeg brænder for webudvikling og digitalt design, og jeg udforsker hele tiden nye værktøjer og teknologier for at udvikle mine færdigheder.
            </p>
            <Link className="bg-[#62BA1B] hover:bg-[#3F8E00] font-bold px-6 py-3 rounded shadow-lg shadow-lime-500/20 transition-all duration-300 cursor-pointer" href="/contact" style={{ width: '259.89px', display: 'inline-block', textAlign: 'center' }}>
            Get in touch
            </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="rounded-full overflow-hidden w-60 h-60">
                <Image
                    src="/jonas.png"
                    alt="Profile Picture"
                    width={240}
                    height={240}
                    className="object-cover w-full h-full"
                />
            </div>
        </div>
    </div>
    </section>
);
}
