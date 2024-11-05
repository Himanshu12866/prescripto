

---

# Doctor Appointment Booking Web App

A Full-Stack MERN application for seamless doctor appointment booking with user, admin, and doctor roles. Users can register, book appointments, make payments, and manage their profiles. Admins can manage doctors and appointments, and doctors can track appointments and manage their profiles.

## Features

### User Controller

- **Register & Login**: Users can register and login, with authentication via JWT tokens.
- **Appointment Booking**: Users can book appointments with their preferred doctors.
- **Online Payment**: Secure online payment option for doctor fees.
- **Profile Management**: Users can update their personal details in the profile section.
- **Appointment Cancellation**: Users can cancel their appointments.

### Admin Controller

- **Admin Login**: Admins can log in, authenticated via JWT tokens.
- **Manage Doctors**: Admins can add, edit, and remove doctor profiles and availability.
- **Appointment Management**: Admins can monitor and update appointment statuses and cancel appointments as needed.

### Doctor Controller

- **Doctor Login**: Doctors can log in and manage their profile details.
- **View Patient & Payment Details**: Doctors can access patient information and payment statuses for appointments.
- **Profile Management**: Doctors can edit personal details.

## Tech Stack

This project is built using the MERN (MongoDB, Express, React, Node.js) stack with additional libraries for enhanced functionality.

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Cloud Cluster)

## Additional Libraries & Tools

- **Mongoose**: For MongoDB object modeling.
- **Cloudinary**: For handling media uploads.
- **JWT Tokens**: For user authentication.
- **bcrypt**: For secure password hashing.
- **Multer**: For handling file uploads.
- **Material UI & Tailwind CSS**: For UI components and styling.

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/himanshu12866/drbookwebapp.git
   cd drbookwebapp
   ```

2. **Install Dependencies**:
   ```bash
   # Backend dependencies
   cd backend
   npm install

   # Frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Configure Environment Variables**:
   For Secret Keys and Sensitive credentials contact me

4. **Run the Application**:
   ```bash
   # Run backend
   cd backend
    node server.js

   # Run frontend
   cd ../frontend
   npm run dev
   # Run admin
   cd ../frontend
   npm run dev
   ```

## Usage

- **User Registration & Login**: Allows users to register and log in.
- **Appointment Management**: Users can book, pay, and manage appointments.
- **Admin Controls**: Admins can manage doctor profiles and appointment statuses.
- **Doctor Dashboard**: Doctors can view appointments, patient details, and payments.

---
