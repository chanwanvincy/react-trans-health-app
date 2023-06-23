function DoctorListView({ doctors }) {
    return (
        <div className="doctors">
            {doctors?.map((doctor, index) =>
                < div className="doctor" key={index} >
                    <a href=""><h2>
                        {doctor['doc_name']}
                    </h2></a>
                    <h3>{doctor['category']} {doctor['sub_category']}</h3>
                </div>
            )
            }
        </div >
    )


}


export default DoctorListView