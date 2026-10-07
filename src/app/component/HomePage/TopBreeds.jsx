import Image from "next/image";
import Link from "next/link";

const TopBreeds = ({ animals }) => {

    const topBreeds = [2, 4, 6, 10].map(
        (index) => animals[index]
    );

    return (
        <section className="w-10/12 mx-auto py-8">

            {/* Section Header */}
            <div className="text-center mb-10">
                <p className="text-green-600 font-semibold">
                    Popular Choices
                </p>

                <h2 className="text-3xl md:text-4xl font-bold mt-2">
                    Top Breeds
                </h2>

                <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                    Explore some of the popular cattle breeds
                    available for Qurbani.
                </p>
            </div>

            {/* Breed Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {topBreeds.map((animal) => (
                    <div
                        key={animal.id}
                        className="group overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition"
                    >
                        {/* Image */}
                        <div className="overflow-hidden">
                            <Image
                                width={100}
                                height={100}
                                src={animal.image}
                                alt={animal.breed}
                                className="w-full h-56 object-cover group-hover:scale-105 transition duration-300"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <span className="text-sm text-green-600 font-medium">
                                {animal.type}
                            </span>

                            <h3 className="text-xl font-bold mt-1">
                                {animal.breed}
                            </h3>

                            <p className="text-gray-500 text-sm mt-2">
                                Popular {animal.type.toLowerCase()} breed for
                                Qurbani.
                            </p>

                            <Link
                                href={`/allanimals?breed=${encodeURIComponent(
                                    animal.breed
                                )}`}
                                className="inline-block mt-4 text-green-600 font-semibold hover:underline"
                            >
                                View Animals →
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TopBreeds;