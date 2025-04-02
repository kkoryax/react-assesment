import React from "react";
import { Outlet, Link } from "react-router-dom";

export function Navigation() {
    return (
        <div className="flex flex-col bg-[#393646] w-full min-h-screen items-center">
            <div className="flex bg-[#6D5D6E] w-full h-16 justify-end items-center px-16">
                <ul className="flex flex-row gap-4">
                    <li>
                        <Link to="/" className="w-fit font-semibold text-lg px-4 py-2 rounded-2xl bg-[#F4EEE0]  hover:cursor-pointer">
                        Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/owner" className="w-fit font-semibold text-lg px-4 py-2 rounded-2xl bg-[#F4EEE0]  hover:cursor-pointer">
                        Owner
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="flex w-full h-full">
                <Outlet />
            </div>
        </div>
    );
}