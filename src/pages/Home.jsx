import { Link } from "react-router-dom";

export function Home() {
    return (
        <div className="flex flex-col w-full h-full pt-16 items-center gap-16 bg-[#393646]">
            <section className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-white font-bold">Generation Thailand</h1>
                <h2 className="text-3xl text-white font-bold">React - Assessment</h2>
            </section>
            <section className="flex flex-row justify-center items-center gap-12">
                <Link to="/user"
                className="font-semibold text-lg px-4 py-2 rounded-2xl bg-[#F4EEE0] hover:cursor-pointer"
                >
                    User Home Sector
                </Link>
                <Link to="/admin"
                className="font-semibold text-lg px-4 py-2 rounded-2xl bg-[#F4EEE0] hover:cursor-pointer"
                >
                    Admin Home Sector
                </Link>
            </section>
        </div>
    );
}