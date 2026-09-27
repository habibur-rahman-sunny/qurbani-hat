import { session } from "@/app/lib/session";
import Image from "next/image";

const ProfilePage = async () => {
    const userSession = await session()
    const user = userSession.user
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="w-80 rounded-xl border p-6 text-center shadow-md">
                <Image
                    src={user?.image || "/assets/user.png"}
                    alt="Profile"
                    width={100}
                    height={100}
                    className="mx-auto"
                />
                <h1 className="mt-4 text-xl font-bold">
                    {user?.name}
                </h1>

                <p className="mt-2 text-gray-600">
                    {user?.email}
                </p>
            </div>
        </div>
    );
};

export default ProfilePage;