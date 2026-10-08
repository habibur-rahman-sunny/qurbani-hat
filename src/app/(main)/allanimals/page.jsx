import SortPrice from "@/app/component/AllAnimalsPage/sortPrice";
import AnimalCard from "@/app/component/ui/Card/AnimalCard";
import { getAnimals } from "@/app/lib/animals/getAnimals";

export const metadata = {
  title: "All Animals | QurbaniHat",
  description:
    "Browse all available Qurbani animals with details about price, breed, weight, age, and location.",
};

const AllAnimalPage = async ({ searchParams }) => {
    const AnimalsArray = await getAnimals();

    const params = await searchParams;
    const sort = params?.sort;

    const animals = [...AnimalsArray.data];

    if (sort === "low-high") {
        animals.sort(
            (a, b) => Number(a.price) - Number(b.price)
        );
    }

    if (sort === "high-low") {
        animals.sort(
            (a, b) => Number(b.price) - Number(a.price)
        );
    }

    return (
        <div className="w-10/12 mx-auto m-10">

            {/* Sort */}
            <div className="mb-6 flex justify-end">
                <SortPrice />
            </div>

            {/* Animals */}
            <div className="grid grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {animals.map((animal, index) => (
                    <AnimalCard
                        key={index}
                        animal={animal}
                    />
                ))}
            </div>

        </div>
    );
};

export default AllAnimalPage;