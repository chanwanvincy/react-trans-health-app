import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const DoctorPage = ({ doctors }) => {
    console.log('individual page level')
    console.log(doctors)
    const { id } = useParams()
    const doctor = doctors.filter(doctor => doctor.id === Number(id))
    const currentDoctor = doctor[0]
    // const currentDoctor = doctor[0]
    console.log(currentDoctor)


    return (
        currentDoctor && (
            <>
                <h1>{currentDoctor['doc_name']}</h1>
                <p>{currentDoctor['category']}</p>
                <p>{currentDoctor['suburb']}</p>
                <p>{currentDoctor['address']}</p>

                {/* <p><a href="/edit/:id">hello</a></p> */}
            </>
        )
    );
};

export default DoctorPage