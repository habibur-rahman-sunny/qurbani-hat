
import { session } from "@/app/lib/session";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const ProfilePage = async () => {
    const userSession = await session()
    const userData = userSession?.user

    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-80 rounded-xl border p-6 text-center shadow-md space-y-2">
                <Image
                    src={userData?.image || "/assets/user.png"}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="mx-auto rounded-full"
                />
                <h1 className="mt-4 text-xl font-bold">
                    {userData?.name}
                </h1>

                <p className="mt-2 text-gray-600">
                    {userData?.email}
                </p>
               <Link href="/profile/profileedit"><Button>Update Info</Button></Link>
            </div>
        </div>
    );
};

export default ProfilePage;