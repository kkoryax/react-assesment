import { useState} from "react";
import axios from "axios";

export function AxiosPostData() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [name, setName] = useState('');
    const [lastname, setLastName] = useState('')
    const [position, setPosition] = useState('')

    const PostData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post(
                "https://jsd5-mock-backend.onrender.com/members",
                {
                    name: name,
                    lastname: lastname,
                    position: position
                }
            );
            setData([...data, response.data])
            setName("");
            setLastName("");
            setPosition("");
        } catch (err) {
            setError("Failed to add user");
            console.error(err)
        } finally {
            setLoading(false);
        }
    };

    return(
        <div className="flex flex-col items-center h-fit w-full bg-[#393646] p-6">

            {loading && <p className="center">Loading . . .</p>}
            {error && <p className="center">{error}</p>}

            <section className="flex flex-col justify-center items-start gap-4">
                    <h2 className="text-2xl text-white font-bold">Create User Here</h2>
                    <div className="flex flex-row gap-8">
                        <input type="text" placeholder="First Name"
                        value={name} onChange={(e) => setName(e.target.value)}
                        className="bg-white px-4 py-2"
                        />
                        <input type="text" placeholder="Last Name"
                        value={lastname} onChange={(e) => setLastName(e.target.value)}
                        className="bg-white px-4 py-2"
                        />
                        <input type="text" placeholder="Position"value={position} onChange={(e) => setPosition(e.target.value)}
                        className="bg-white px-4 py-2"
                        />
                        <button
                        className="p-4 rounded-xl bg-blue-400 hover:cursor-pointer"
                        onClick={PostData}
                        >
                            Save
                        </button>
                    </div>
                </section>
        </div>
    );
}