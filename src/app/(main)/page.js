import HeroSection from "../component/HomePage/HeroSection";
import AnimalCard from "../component/ui/Card/AnimalCard";
import { getAnimals } from "../lib/animals/getAnimals";

const HomePage = async () => {

  const AnimalsArray = await getAnimals()

  return (
    <div>
      <HeroSection></HeroSection>

      {/* Featured Animals */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Animals
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {
            AnimalsArray.data
              .slice(0, 4)
              .map((animal, index) => (
                <AnimalCard
                  key={index}
                  animal={animal}
                />
              ))
          }
        </div>
      </section>
    </div>
  );
};

export default HomePage;