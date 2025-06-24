import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Contact() {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />
            <section className="flex flex-col items-center">
                <h2 className="text-heading text-center m-8 text-4xl font-bold  ">Get In Touch</h2>
                <p className="text-text text-center max-w-2xl mx-auto">
                    Tak fordi du kiggede forbi!
                    Hvis du leder efter en motiveret og detaljeorienteret webudvikler med interesse for front-end og responsivt design, så vil jeg meget gerne høre fra dig.
                    Uanset om det handler om et projekt, en praktikplads eller en uformel snak, er du velkommen til at kontakte mig. Jeg er altid åben for nye muligheder og udvikling.
                </p>
                <form className=" p-8 rounded-lg shadow-lg max-w-md w-full mb-10">
                    <div>
                        <label className="block text-sm font-bold mb-2 text-white" htmlFor="email">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Please enter your email"
                            className="w-full p-3 rounded bg-white text-black focus:outline-none mb-6"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-2 text-white" htmlFor="mobile">
                            Mobile
                        </label>
                        <input
                            id="mobile"
                            type="tel"
                            placeholder="Enter mobile"
                            className="w-full p-3 rounded bg-white text-black focus:outline-none mb-6"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold mb-1 text-white" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            placeholder="Enter your message"
                            className="w-full p-3 rounded bg-white text-black h-32 resize-none focus:outline-none"
                            required
                        />
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full bg-[#62BA1B] hover:bg-[#3F8E00] text-heading font-bold py-3 rounded shadow-lg shadow-lime-500/20 transition-all duration-300 cursor-pointer"
                        >
                            Submit &gt;
                        </button>
                    </div>
                </form>
            </section>
            <Footer />
        </main>
    )
}