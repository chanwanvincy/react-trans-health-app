import DoctorPage from "../pages/Doctor"

function DoctorListView({ doctors, filteredDoctors, currentDoctor, setCurrentDoctor }) {

    const handleCurrentDoctorChange = (event) => {
        const id = event.target.id
        setCurrentDoctor(doctors.filter(doctor => doctor['id'] === id))
        console.log(currentDoctor)
    }

    if (filteredDoctors.length === doctors.length) {
        return (
            <div className="doctors">
                {doctors?.map((doctor, index) =>
                    < div className="doctor" key={index} >
                        <h2 onClick={handleCurrentDoctorChange} id={doctor['id']}>
                            <a href={`/${doctor['id']}/info`}>
                                {doctor['doc_name']}
                            </a></h2>
                        <h3>{doctor['category']} {doctor['sub_category']}</h3>
                    </div>
                )
                }
            </div >
        )
    } else {
        return (
            <div className="doctors">

                {filteredDoctors?.map((doctor, index) =>
                    < div className="doctor" key={index} >
                        <a href={`/${doctor['id']}/info`}><h2>
                            {doctor['doc_name']}
                        </h2></a>
                        <h3>{doctor['category']} {doctor['sub_category']}</h3>
                    </div>
                )
                }
            </div >

        )
    }
}


export default DoctorListView