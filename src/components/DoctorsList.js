import { useState, useEffect } from "react";
import DoctorListView from "./DoctorListView";
function DoctorsList({ doctors, setDoctors, filteredDoctors }) {


    // if (filteredDoctorsList !== doctors) {
    //     return (
    //         <DoctorListView
    //             doctors={filteredDoctorsList}
    //         />
    //     )
    // } else {
    return (
        <DoctorListView
            doctors={doctors}
            filteredDoctors={filteredDoctors}
        />
    )
    // }

}

export default DoctorsList