import DoctorPage from "../pages/DoctorPage"

function DoctorListView({ doctors, filteredDoctors }) {

    // const handleCurrentDoctorChange = (id) => {
    //     console.log(id)
    //     setCurrentDoctor(doctors.filter(doctor => doctor['id'] === id))
    // }

    if (filteredDoctors.length === doctors.length) {
        console.log('list view')
        console.log(doctors)
        return (
            <div className="doctors">
                {doctors?.map((doctor, index) =>
                    < div className="doctor" key={index} >
                        <h2>
                            <a href={`/info/${doctor['id']}`} >
                                {doctor['doc_name']}
                            </a></h2>
                        <h3>{doctor['category']} {doctor['sub_category']}</h3>
                    </div>
                )
                }
            </div >
        )
    } else {
        console.log('list view else')
        console.log(doctors)
        return (
            <div className="doctors">
                {filteredDoctors?.map((doctor, index) =>
                    < div className="doctor" key={index} >
                        <a href={`/info/${doctor['id']}`}><h2>
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