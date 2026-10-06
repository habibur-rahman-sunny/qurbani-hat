"use client";
import React from "react";
import {Button, FieldError, Form, Input, Label, TextField,} from "@heroui/react";
import { Check } from "@gravity-ui/icons";
import { toast } from "react-toastify";

const BookingForm = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Booking successful!");
    e.currentTarget.reset();
};

    return (
        <div className="bg-white rounded-2xl shadow-md p-6">
            <h2 className="text-2xl font-bold mb-6">
                Book This Animal
            </h2>
            <Form className="flex flex-col gap-4" onSubmit={handleSubmit}>

                {/* Name */}
                <TextField isRequired name="name">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name"/>
                    <FieldError />
                </TextField>

                {/* Email */}
                <TextField
                    isRequired
                    name="email"
                    type="email"
                >
                    <Label>Email</Label>
                    <Input placeholder="Enter your email"/>
                    <FieldError />
                </TextField>


                {/* Phone */}
                <TextField
                    isRequired
                    name="phone"
                    type="tel"
                >
                    <Label>Phone</Label>
                    <Input placeholder="Enter your phone number"/>
                    <FieldError />
                </TextField>

                {/* Address */}
                <TextField isRequired name="address">
                    <Label>Address</Label>
                    <Input placeholder="Enter your address"/>
                    <FieldError />
                </TextField>

                {/* Buttons */}
                <div className="flex gap-2 justify-center mt-2">
                    <Button type="reset" variant="secondary">Reset</Button>
                    <Button
                        className="bg-green-800"
                        type="submit"
                    >
                        <Check />
                        Confirm Booking
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default BookingForm;