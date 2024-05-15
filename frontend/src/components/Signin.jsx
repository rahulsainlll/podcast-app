import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signin = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/api/v1/user/signin", formData);
            console.log(response.data);
        } catch (error) {
            console.error("Signin error: ", error);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 py-12 px-4 sm:px-6 lg:px-8 shadow-sm">
            <div className="max-w-md w-3/5 space-y-8 bg-white p-10 rounded-lg ">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in</h2>
                </div>
                <form className="mt-8 space-y-6 flex flex-col justify-center items-center" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm mt-4"
                    />
                    <button type="submit" className="w-3/5 flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 mt-4">
                        Sign in
                    </button>

                    <div className="flex justify-center items-center">
                        <p className="text-lg">New User? <Link to='/signup' className="font-bold underline">Signup</Link></p>
                    </div>
                </form>
            </div>
            <div >
                <img src="/mic.jpg" className="w-70 h-96 rounded-lg" />
            </div>
        </div>
    );
};

export default Signin;