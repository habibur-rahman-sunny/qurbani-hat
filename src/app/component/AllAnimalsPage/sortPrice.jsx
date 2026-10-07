"use client";

import { useRouter, useSearchParams } from "next/navigation";

const SortPrice = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const handleSort = (e) => {
        const value = e.target.value;

        const params = new URLSearchParams(searchParams);

        if (value) {
            params.set("sort", value);
        } else {
            params.delete("sort");
        }

        router.push(`/allanimals?${params.toString()}`);
    };

    return (
        <select
            onChange={handleSort}
            defaultValue={searchParams.get("sort") || ""}
            className="rounded-lg border px-4 py-2"
        >
            <option value="">Sort by Price</option>

            <option value="low-high">
                Price: Low to High
            </option>

            <option value="high-low">
                Price: High to Low
            </option>
        </select>
    );
};

export default SortPrice;