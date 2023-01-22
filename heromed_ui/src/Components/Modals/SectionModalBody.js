const SectionBody = ()  => {  return (
        <div className="flex items-center bg-teal-lighter">
            <div className="w-full bg-white rounded shadow-lg p-8 m-4 md:max-w-sm md:mx-auto">
                <form className="mb-4 md:flex md:flex-wrap md:justify-between" action="/" method="get">
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase tracking-wide font-bold text-lg text-grey-darkest" htmlFor="section_title">Title</label>
                        <input className="border py-2 px-3 text-grey-darkest" type="text" name="section_title" id="section_title"/>
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest " htmlFor="section_description">Description</label>
                        <input className="border py-2 px-3 text-grey-darkest" type="text" name="section_description" id="section_description"/>
                    </div>
                    <div className="flex flex-col mb-4 md:w-full">
                        <label className="mb-2 uppercase font-bold text-lg text-grey-darkest" htmlFor="employees_number">Maximum Employees Number</label>
                        <input className="border py-2 px-3 text-grey-darkest" type="number" name="employees_number" id="employees_number"/>
                    </div>
                    <button className="contained" color="success" type="submit">Add Section</button>
                    <button className="outlined" color="error" type="close"> Close </button>
                </form>
            </div>
        </div>
);
}

export default SectionBody