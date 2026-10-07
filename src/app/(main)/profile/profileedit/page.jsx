"use client"
import Image from 'next/image';
import React from 'react';
import { MdEdit } from 'react-icons/md';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { authClient } from '@/app/lib/auth-client';
import { Button } from '@heroui/react';
import { handleImageChange, handleImageUrlChange, handleNameChange, uploadImage } from '@/app/lib/profile/profileupdate';

const ProfileEditPage = () => {
    const { data: userSession } = authClient.useSession();
    const userData = userSession?.user;

    //For image
    const router = useRouter()
    const [file, setFile] = useState(null)
    const [preview, setPreview] = useState(null);
    const [uploading, setUploading] = useState(false)

    // For name
    //For name
    const [name, setName] = useState(userData?.name || "")
    const [imageUrl, setImageUrl] = useState(userData?.image || "")

    // Handle profile page
    const handleSubmit = async () => {
        if (file) {
            await uploadImage({ file, setUploading, router })
        }
        if (name) {
            await handleNameChange({ name, setName, userData })
        }
        if (imageUrl && imageUrl !== userData.image) {
            await handleImageUrlChange({ imageUrl, setImageUrl, router })
        }
        router.refresh()
    }


    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-4 bg-gray-50">
            <p className='font-bold text-2xl my-5 text-slate-600'>Update functionality has been implemented.</p>
            <div className="w-full max-w-md border border-slate-500 rounded-xl p-6 shadow-2xl">
                {/* Profile Image */}
                {
                    !userData ?
                        <div className='flex flex-col mb-8 justify-center text-center w-32 mx-auto'>
                            <div className='flex flex-col border-2 border-slate-400 rounded-full p-4 w-16 mx-auto'>
                                <span className="loading loading-spinner loading-lg"></span>
                            </div>
                            <p className='font-bold text-sm text-slate-600'>Image Loading</p>
                        </div>
                        : <div className="flex justify-center mb-8">
                            <div className="relative">
                                <Image
                                    src={preview || userData?.image || "/assets/user.png"}
                                    alt="Profile"
                                    width={100}
                                    height={100}
                                    className="mx-auto rounded-full"
                                />
                                {/* Image Edit Button */}
                                <label className="absolute bottom-1 right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-slate-300 hover:bg-slate-400 transition-colors">
                                    <MdEdit />
                                    <input
                                        type="file"
                                        accept="image/*"
                                        className="hidden"
                                        onChange={(e) => handleImageChange({ e, setFile, setPreview, router })}
                                    />
                                </label>
                            </div>
                        </div>
                }

                {/* Name */}
                <div className="rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between gap-6">

                        <div className="flex-1">
                            <p className="text-sm text-gray-500 mb-1">
                                user
                            </p>

                            <input
                                type="text"
                                value={name || ""}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full rounded-md px-3 py-2 bg-slate-50 border border-slate-500"
                                placeholder="Enter your name"
                            />
                        </div>
                    </div>
                    <div className="flex-1">
                        <p className="text-sm text-gray-500 mb-1">
                            image url
                        </p>

                        <input
                            type="url"
                            value={imageUrl || ""}
                            onChange={(e) => setImageUrl(e.target.value)}
                            className="w-full rounded-md px-3 py-2 bg-slate-50 border border-slate-500"
                            placeholder="Enter your imgUrl"
                        />
                    </div>
                </div>

                <Button
                    onClick={handleSubmit}
                    isDisabled={uploading || !file && !name}
                >
                    {uploading ? "Uploading..." : "Submit"}
                </Button>
            </div>
        </div>
    );
};

export default ProfileEditPage;