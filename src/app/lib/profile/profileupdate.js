import { toast } from "react-toastify";
import { authClient } from "../auth-client";

// For selecting an image and create preview url
export const handleImageChange = async ({ e, setFile, setPreview, router }) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) {
        return;
    }
    setFile(selectedFile)
    setPreview(URL.createObjectURL(selectedFile));
}

// Generate a URL with Cloudinary and set it as the image property
export const uploadImage = async ({ file, setUploading, router }) => {
    setUploading(true)
    // store the image in a container for to pass it to cloudinary
    try {
        const formData = new FormData()
        formData.append("file", file);
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);

        // upload in cloudinary and get response
        const response = await fetch(`https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
            {
                method: "POST",
                body: formData
            }
        )
        if (!response.ok) {
            throw new Error("Upload failed");
        }
        // get data and change image property of user
        const data = await response.json()
        const imageUrl = data.secure_url

        // update image url in session
        const { error } = await authClient.updateUser({
            image: imageUrl
        })
        toast.success("Image uploaded successfully!");
        router.refresh()
    }
    catch (error) {
        console.error("Upload error:", error);
        toast.error("Failed to upload image.");
    }
    finally {
        setUploading(false)
    }
};


// Update the name property of the user
export const handleNameChange = async ({ name, setName, userData }) => {

    if (!name) {
        return false;
    }
    if (userData?.name === name) {
        toast.info("No changes made");
        return false;
    }

    const { data, error } = await authClient.updateUser({
        name: name
    })
    toast.success("Successfully updated")
    if (error) {
        toast.error(error.message)
    }
    setName(data?.user?.name)
}

// Update img url to set a new image in profile
export const handleImageUrlChange = async ({ imageUrl, setImageUrl, router }) => {
    if (!imageUrl.trim()) {
        toast.error("Please enter an image URL");
        return;
    }
    try {
        const { error } = await authClient.updateUser({
            image: imageUrl.trim(),
        })
        if (error) {
            toast.error("Failed to update image");
            return;
        }

        setImageUrl(imageUrl.trim());
        toast.success("Profile image updated successfully");
        router.refresh()
    }
    catch (error) {
        toast.error("Something went wrong");
    }
}