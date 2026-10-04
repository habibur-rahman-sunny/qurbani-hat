import AnimalCard from "@/app/component/ui/Card/AnimalCard";
import { getAnimals } from "@/app/lib/animals/getAnimals";

const AllAnimalPage = async() => {
      const AnimalsArray = await getAnimals()
    return (
        <div className="w-10/12 mx-auto justify-center m-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
           {
            AnimalsArray.data
              .map((animal, index) => (
                <AnimalCard
                  key={index}
                  animal={animal}
                />
              ))
          }
        </div>
    );
};

export default AllAnimalPage;