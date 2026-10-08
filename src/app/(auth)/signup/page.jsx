"use client";

import Link from "next/link";
import { Check } from "@gravity-ui/icons";

import {Button, Description, FieldError, Form, Input, Label, TextField} from "@heroui/react";
import { authClient } from "@/app/lib/auth-client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";

const SignInPage = () => {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();
        const form = e.currentTarget
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries())

        // sign up a new user using better auth
        const { data, error } = await authClient.signUp.email({
            name: userData.name, // required, The name of the user.
            email: userData.email, // required, The email address of the user.
            password: userData.password, // required, The password of the user. It should be at least 8 characters long and max 128 by default.
            image: userData.image
        });
        // Registration
        if (data) {
            toast.success("Registration successful!");
            form.reset()
            router.push("/")
        } else {
            toast.error("Registration failed!");
        }
    }

    //For social login
    const signInWithGoogle = async () => {
        const dataForSocialLogin = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
            <div className="w-96 rounded-xl border-2 bg-white p-6 shadow-md">

                <h1 className="mb-6 text-center text-2xl font-bold">
                    Register
                </h1>

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>

                    <TextField name="name">
                        <Label>Name</Label>
                        <Input placeholder="Enter your name" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="Enter your email" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description>
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <TextField name="image">
                        <Label>Photo URL</Label>
                        <Input placeholder="Enter your photo URL" />
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2 justify-center">
                        <Button type="reset" variant="secondary">Reset</Button>
                        <Button className="bg-green-800" type="submit"><Check />Submit</Button>
                    </div>

                    <div className="flex gap-2">
                        {/* Google Login */}
                        <Button
                            type="button"
                            variant="secondary"
                            onClick={signInWithGoogle}
                            className="w-1/2"
                        >
                            <FaGoogle />
                            Google
                        </Button>

                        {/* GitHub Login */}
                        <Button
                            type="button"
                            variant="secondary"
                            // onPress={signInWithGithub}
                            className="w-1/2"
                        >
                            <FaGithub />
                            GitHub
                        </Button>
                    </div>

                    <div className="text-center text-sm">
                        Do you have an account?{" "}
                        <Link
                            href="/signin"
                            className="font-medium text-green-800 hover:underline"
                        >
                            Login
                        </Link>
                    </div>

                </Form>
            </div>
        </div>
    );
};

export default SignInPage;