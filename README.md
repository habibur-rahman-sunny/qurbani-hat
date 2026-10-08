# 🐄 QurbaniHat

QurbaniHat is a modern web application for browsing and exploring animals suitable for Qurbani. Users can view available animals, check their details, and book an animal through a simple and user-friendly interface.

## 🌐 Live URL

https://qurbani-hat.vercel.app/

## 🎯 Purpose

The main purpose of QurbaniHat is to provide an easy and convenient platform where users can:

- Browse available Qurbani animals
- View animal information and details
- Check animal price, age, weight, breed, and location
- Manage user profile information
- Update user profile name and image


## ✨ Key Features

- 🏠 **Home Page**
  - Hero section with Qurbani-related information
  - Browse Animals button
  - Featured Animals section
  - Qurbani Tips
  - Top Breeds

- 🐄 **All Animals**
  - Displays all available animals
  - Animal cards with important information
  - Sort animals by price
  - View detailed information

- 🔎 **Animal Details**
  - Detailed animal information
  - Price, breed, weight, age, location, and description
  - Booking form for logged-in users

- 📋 **Animal Booking**
  - User name
  - Email
  - Phone number
  - Address
  - Successful booking notification

- 🔐 **Authentication**
  - User registration
  - User login
  - Protected pages/features
  - Session-based authentication using Better Auth

- 👤 **Profile Management**
  - View logged-in user's profile
  - Update profile name
  - Update profile image
  - Update profile image using an image URL

- 📱 **Responsive Design**
  - Mobile-friendly
  - Tablet-friendly
  - Desktop-friendly

- 🔔 **Toast Notifications**
  - Success and error messages for important actions

## 🛠️ Technologies Used

- Next.js
- React
- JavaScript
- Tailwind CSS
- DaisyUI
- Better Auth
- MongoDB
- JSON Server
- Cloudinary
- React Icons
- React Toastify

## 📦 NPM Packages Used

Some of the main packages used in this project are:

- `next`
- `react`
- `react-dom`
- `better-auth`
- `mongodb`
- `tailwindcss`
- `daisyui`
- `react-icons`
- `react-toastify`
- `react-use-gesture`
- `react-use-measure`
- `Animate.css`

## 🗂️ Animal Data

Each animal contains information such as:

- ID
- Name
- Type
- Breed
- Price
- Weight
- Age
- Location
- Description
- Image
- Category

## 🔗 Backend / API

Animal data is served using JSON Server.

API Server:

https://qurbani-hat-server-demo.onrender.com

The application fetches animal data from the deployed API and displays it dynamically on the website.

## 🔐 Authentication & Database

QurbaniHat uses **Better Auth** for authentication and **MongoDB** for storing user authentication information.

Users can create an account, log in, access protected features, and update their profile information.

## ☁️ Image Upload

Cloudinary is used for uploading and storing profile images.

Users can either:

1. Upload a new image from their device
2. Update their profile image using an image URL

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
