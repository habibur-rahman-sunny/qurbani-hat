import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import ReusableNav from "./ReusableNav";
import LogoutBtn from "./LogoutBtn";
import { session } from "@/app/lib/session";
const Navbar = async () => {
    // get session
    const userSession = await session()
    const user = userSession?.user

    return (
        <div>
            <nav className="sticky top-0 z-40 w-10/12 mx-auto border-b border-separator">
                <header className="relative flex h-16 items-center justify-between py-6">
                    {/* Left */}
                    <div><Image width={200} height={100} alt="nav-logo" src="/assets/nav-logo (2).png"></Image></div>
                    {/* Center */}
                    <ul className="absolute left-1/2 flex -translate-x-1/2 items-center gap-4">
                        <li><ReusableNav href="/">Home</ReusableNav></li>
                        <li><ReusableNav href="/allanimals">All Animals</ReusableNav></li>
                    </ul>
                    {/* Right */}
                    <div>
                        {userSession ?
                            <div className="flex gap-3">
                                <Link href="/profile">
                                        <Image
                                            src={user?.image || "/assets/user.png"}
                                            alt="Profile"
                                            width={40}
                                            height={40}
                                            className="mx-auto rounded-full"
                                        />
                                    </Link>
                                <LogoutBtn></LogoutBtn>
                            </div>
                            : <div className='flex gap-2 my-1'>
                                <Link href="/signin" className="rounded-full bg-green-900 text-white py-2 px-4">Login</Link>
                                <Link href="/signup" className="rounded-full bg-green-900 text-white py-2 px-4">Register</Link>
                            </div>
                        }
                    </div>

                </header>
            </nav>
        </div >
    );
};

export default Navbar;