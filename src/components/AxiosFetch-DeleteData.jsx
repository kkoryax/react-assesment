import { useEffect, useState } from "react";
import axios from "axios";

export function AxiosFetchDeleteData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://jsd5-mock-backend.onrender.com/members"
                );
                setData(response.data)
            } catch (err) {
                setError("Failed to fetch users");
                console.error(err)
            } finally {
                setLoading(false);
            }
        }

        fetchData()
    },[]);

    const DeleteData = async (memberId) => {
        setLoading(true);
        setError(null);
        setData(null);

        try {
            const res = await axios.delete(
                `https://jsd5-mock-backend.onrender.com/members/${memberId}`
            );
            setData(res.data);
        } catch (err) {
            setError("Failed to delete users");
            console.error(err)
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex flex-col items-center min-h-screen w-full bg-[#393646] p-6">

            {loading && <p className="center text-5xl text-white font-bold">Loading . . .</p>}
            {error && <p className="center text-5xl text-white font-bold">{error}</p>}

            {!loading && !error &&
                <table className="w-full">
                    <thead className="bg-[#F4EEE0]">
                        <tr>
                            <th className="border p-2">First Name</th>
                            <th className="border p-2">Last Name</th>
                            <th className="border p-2">Position</th>
                            <th className="border p-2">Action</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((member) => (
                            <tr key={member.id}>
                                <td className="border p-2">{member.name}</td>
                                <td className="border p-2">{member.lastname}</td>
                                <td className="border p-2">{member.position}</td>
                                <td
                                className="flex justify-center border p-2 bg-red-400 hover:cursor-pointer"
                                onClick={() => DeleteData(member.id)}
                                >
                                    Delete
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    );
}