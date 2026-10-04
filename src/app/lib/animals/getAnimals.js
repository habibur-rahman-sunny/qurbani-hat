export const getAnimals = async () => {
    const res = await fetch("https://qurbani-hat-server-demo.onrender.com/api/animals");

    if (!res.ok) {
        throw new Error("Failed to fetch animals");
    }

    return res.json();
};

export const getAnimalsDetails = async (id) => {
    const res = await fetch(`https://qurbani-hat-server-demo.onrender.com/api/animals/${id}`);

    if (!res.ok) {
        throw new Error("Failed to fetch animals");
    }

    return res.json();
};





