"use client";

import { useState } from "react";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";
import LogoutBtn from "./LogoutBtn";
import { usePathname } from "next/navigation";

const MobileMenu = ({ user }) => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    const isEditPage = pathname === "/profile/edit";


    return (
        <div className="md:hidden">
            {/* Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl"
            >
                {isOpen ? <MdClose /> : <MdMenu />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="absolute left-0 top-16 w-full border-b bg-white p-4">
                    <ul className="flex flex-col gap-3">
                        <li>
                            <Link
                                href="/"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                        </li>

                        <li>
                            <Link
                                href="/allanimals"
                                onClick={() => setIsOpen(false)}
                            >
                                All Animals
                            </Link>
                        </li>

                        {user ? (
                            <>
                                <li>
                                    <Link
                                        href="/profile"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Profile
                                    </Link>
                                </li>

                                {!isEditPage && (
                                    <li>
                                        <LogoutBtn />
                                    </li>
                                )}
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link
                                        href="/signin"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Login
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/signup"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Register
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default MobileMenu;