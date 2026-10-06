"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const ReusableNav = ({ children, href }) => {
    const pathname = usePathname()
    return (
        <Link className={`p-1 px-2 rounded-sm ${pathname == href? "bg-green-700 text-white": "bg-white text-black"}`} href={href}>{children}</Link>
    );
};

export default ReusableNav;