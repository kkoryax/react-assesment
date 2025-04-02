import { useEffect, useState } from "react";
import axios from "axios";

export function AxiosFetchData() {
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

    return (
        <div className="flex flex-col items-center min-h-screen w-full bg-[#393646] p-6">
            {loading && <p className="center">Loading . . .</p>}
            {error && <p className="center">{error}</p>}

            <table className="w-full">
                    <thead className="bg-[#F4EEE0]">
                        <tr>
                            <th className="border p-2">First Name</th>
                            <th className="border p-2">Last Name</th>
                            <th className="border p-2">Position</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {data.map((member) => (
                            <tr key={member.id}>
                                <td className="border p-2">{member.name}</td>
                                <td className="border p-2">{member.lastname}</td>
                                <td className="border p-2">{member.position}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
        </div>
    );
}