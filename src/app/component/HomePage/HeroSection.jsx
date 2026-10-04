import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
    return (
        <section className="mx-auto w-11/12 max-w-7xl py-16">
            <div className="grid items-center gap-10 rounded-2xl px-8 py-12 md:grid-cols-2 md:px-12">

                {/* Left Content */}
                <div>
                    <h1 className="text-4xl font-bold leading-tight text-slate-800 md:text-5xl">
                        Find the Right Animal
                        <span className="block text-green-800">
                            for Your Qurbani
                        </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
                        Find healthy and suitable animals for your Qurbani
                        from trusted sellers. Browse our collection and
                        choose the right animal with confidence.
                    </p>

                    <Link href="/allanimals">
                    <button className="mt-7 rounded-lg bg-green-800 px-6 py-3 font-medium text-white transition hover:bg-green-900">
                        Browse Animals
                    </button>
                    </Link>
                </div>

                {/* Right Image */}
                <div className="flex justify-center">
                    <div className="flex h-72 w-full max-w-md items-center justify-center rounded-2xl bg-slate-200">
                        <Image
                            src="/assets/Brahman-cattle.jfif"
                            alt="/Brahman-cattle"
                            width={600}
                            height={400}
                            className="h-full w-full object-cover rounded-2xl"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default HeroSection;