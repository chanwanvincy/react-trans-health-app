import { useState, useEffect } from "react";
import DoctorListView from "./DoctorListView";

function DoctorsList() {
    const [doctors, setDoctors] = useState([])

    function getDoctors() {
        fetch('api/doctors')
            .then(res => res.json())
            .then(doctors => setDoctors(doctors))

        console.log(doctors)
    }

    useEffect(getDoctors)

    return (
        <DoctorListView
            doctors={doctors}
        />
    )
}

export default DoctorsList