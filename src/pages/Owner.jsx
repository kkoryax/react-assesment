export function Owner() {
    return (
        <div className="flex flex-col w-full h-full pt-16 items-center gap-16 bg-[#393646]">
            <section className="flex flex-col justify-center items-center">
                <h1 className="text-5xl text-white font-bold">Sheik - Group G - 16</h1>
                <h2 className="text-3xl text-white font-bold">Orachun Wongsasawat</h2>
            </section>
            <section className="flex flex-col justify-center items-center gap-12">
                <img
                src="/src/assets/image-placeholder.jpg" alt=""
                className="h-96"
                />
                <div className="flex flex-col justify-center items-center gap-4">
                    <p className="text-2xl text-white">Short Biography :</p>
                    <p className=" text-white w-[96ch]">Hi, My name is Sheik. I'm junior Software Developer with a background in animation design
                        and a graduate of the Generation Bootcamp. Former Customer Service Agent (Ground Attendant)
                        with strong problem-solving, teamwork, and communication skills. Passionate about software development
                        and eager to contribute to a collaborative, goal-driven environment. Seeking a role in a company
                        that values fairness, teamwork, and a strong organizational culture.
                    </p>
                </div>
            </section>
        </div>
    );
}