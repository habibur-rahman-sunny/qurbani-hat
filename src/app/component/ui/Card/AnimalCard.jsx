import Image from "next/image";
import Link from "next/link";

const AnimalCard = ({ animal }) => {

    return (
        <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition duration-300">

            {/* Animal Image */}
            <div className="relative h-60 overflow-hidden">
                <Image
                    src={animal.image}
                    alt={animal.name}
                    fill
                    className="object-cover hover:scale-105 transition duration-300"
                />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 flex items-center gap-2 bg-slate-300 text-slate-700 text-sm font-semibold px-4 py-2 rounded-xl shadow-md border border-slate-100">
                    <span className="w-2.5 h-2.5 rounded-full bg-orange-400"></span>
                    {animal.category}
                </span>
            </div>

            {/* Card Content */}
            <div className="p-5">

                {/* Name + Type */}
                <div className="flex justify-between items-start gap-3">
                    <div>
                        <h3 className="text-xl font-bold text-gray-800">
                            {animal.name}
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            {animal.breed}
                        </p>
                    </div>

                    <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">
                        {animal.type}
                    </span>
                </div>

                {/* Info */}
                <div className="grid grid-cols-2 gap-3 mt-5 text-sm">

                    <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-gray-400">Weight</p>
                        <p className="font-semibold text-gray-700">
                            {animal.weight} KG
                        </p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-3">
                        <p className="text-gray-400">Age</p>
                        <p className="font-semibold text-gray-700">
                            {animal.age} Years
                        </p>
                    </div>

                </div>

                {/* Location */}
                <p className="text-sm text-gray-500 mt-4">
                    {animal.location}
                </p>

                {/* Price + Button */}
                <div className="flex items-center justify-between mt-5">
                    <div>
                        <p className="text-xs text-gray-400">
                            Price
                        </p>

                        <p className="text-xl font-bold text-green-600">
                            {animal.price.toLocaleString()}
                        </p>
                    </div>

                    <Link href={`/details/${animal.id}`}>
                        <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition">
                            View Details
                        </button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default AnimalCard;