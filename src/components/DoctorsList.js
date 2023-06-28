import { useState, useEffect } from "react";
import DoctorListView from "./DoctorListView";
function DoctorsList({ doctors, setDoctors, filteredDoctors }) {
    return (
        <DoctorListView
            doctors={doctors}
            filteredDoctors={filteredDoctors}
        />
    )

}

export default DoctorsList