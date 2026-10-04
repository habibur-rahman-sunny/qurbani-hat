import { getAnimalsDetails } from '@/app/lib/animals/getAnimals';
import Image from 'next/image';
import React from 'react';

const DetailsPage = async ({ params }) => {

    const { id } = await params;

    const AnimalDetails = await getAnimalsDetails(id);

    const animal = AnimalDetails.data;

    return (
        <div className="max-w-4xl mx-auto px-4 py-10">

            <div className="flex flex-col gap-8">

                {/* Image */}
                <div className="relative h-100 w-full rounded-2xl overflow-hidden">
                    <Image
                        src="/assets/Brahman-cattle.jfif"
                        alt={animal.name}
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Details */}
                <div className="bg-white rounded-2xl shadow-md p-6">

                    <h1 className="text-3xl font-bold mb-6">
                        {animal.name}
                    </h1>

                    <div className="space-y-4">

                        <p>
                            <span className="font-semibold">Type:</span>{' '}
                            {animal.type}
                        </p>

                        <p>
                            <span className="font-semibold">Breed:</span>{' '}
                            {animal.breed}
                        </p>

                        <p>
                            <span className="font-semibold">Price:</span>{' '}
                            ৳{animal.price}
                        </p>

                        <p>
                            <span className="font-semibold">Weight:</span>{' '}
                            {animal.weight} kg
                        </p>

                        <p>
                            <span className="font-semibold">Age:</span>{' '}
                            {animal.age} years
                        </p>

                        <p>
                            <span className="font-semibold">Location:</span>{' '}
                            {animal.location}
                        </p>

                        <p>
                            <span className="font-semibold">Category:</span>{' '}
                            {animal.category}
                        </p>

                        <div>
                            <p className="font-semibold mb-1">
                                Description:
                            </p>

                            <p className="text-gray-600">
                                {animal.description}
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default DetailsPage;