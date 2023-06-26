import { useState, useEffect } from "react";
import DoctorsList from "./DoctorsList";
import DoctorListView from "./DoctorListView";

function FilterControls({
    doctors, setDoctors,
    alliedHealth, setAlliedHealth,
    clinicalPsychologist, setClinicalPsychologist,
    counsellingPsychologist, setCounsellingPsychologist,
    generalPractitioner, setGeneralPractitioner,
    gynaecologyAndUrology, setGynaecologyAndUrology,
    nursePractitioner, setNursePractitioner,
    otherSpecialists, setOtherSpecialists,
    paediatrics, setPaediatrics,
    psychiatrist, setPsychiatrist,
    surgicalTransmasculine, setSurgicalTransmasculine,
    filteredDoctors, setFilteredDoctors,
    filterList, setFilterList }) {


    // const filterDoctorsByCategory = (category) => {
    //     let filteredDoctorsList = doctors.filter((category) => doctor['category'] === category
    //     )
    //     setFilteredDoctorsList(filteredDoctorsList)
    // }

    // const checkAlliedHealthFilter = () => {
    //     if (alliedHealthFilter === false) {
    //         setAlliedHealthFilter(true)
    //     } else {
    //         setAlliedHealthFilter(false)
    //     }
    // }

    // const handleCheckboxChange = (event) => {
    //     const name = event.target.name

    //     function execute(name) {
    //         const command = (name) => {
    //             return `set${name[0].toUpperCase()}${name.slice(1)}(!${name})`
    //         }
    //         command(name)
    //     }

    //     execute(name)
    //     console.log(name)

    //     // setFilteredDoctors(doctors.filter(doctor => doctor.category === 'Allied Health'))
    // }

    // const handleAlliedHealthFilter = () => {
    //     // const command = alliedHealth === true ? false : true
    //     setAlliedHealth(!alliedHealth)
    //     if (alliedHealth === false) {
    //         // setFilteredDoctors(doctors.filter(doctor => doctor.category === "Allied Health"))
    //         setFilterList([...filterList, 'Allied Health'])

    //     } else {
    //         setFilterList(filterList.filter(category => category != 'Allied Health'))
    //     }
    // }

    const handleAll = () => {
        setFilteredDoctors(doctors)
    }

    const handleAlliedHealthFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "Allied Health"))

    }

    const handleClinicalPsychologistFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "Clinical Psychologist"))

    }

    const handlecounsellingPsychologistFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "Counselling Psychologist"))

    }

    const handleGeneralPractitionerFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "General Practitioner"))

    }

    const handleGynaecologyAndUrologyFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "Gynaecology and Urology"))

    }

    const handleNursePractitionerFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "Nurse Practitioner"))

    }

    const handleOtherSpecialistsFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "Other Specialists"))

    }

    const handlePaediatricsFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "Paediatrics"))

    }

    const handlePsychiatristFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "Psychiatrist"))

    }

    const handleSurgicalTransmasculineFilter = () => {
        setFilteredDoctors(doctors.filter(doctor => doctor.category === "Surgical - Transmasculine"))

    }

    return (
        <>
            {/* <input type="checkbox" name="alliedHealth" id=""
                onChange={handleAlliedHealthCheckboxChange}
                checked={alliedHealth}
            /><label htmlFor="">Allied Health</label> */}
            <button onClick={handleAll}>All</button>
            <button onClick={handleAlliedHealthFilter}>Allied Health</button>
            <button onClick={handleClinicalPsychologistFilter}>Clinical Psychologist</button >
            <button onClick={handlecounsellingPsychologistFilter}>Counselling Psychologist</button>
            <button onClick={handleGeneralPractitionerFilter}>General Practitioner</button>
            <button onClick={handleGynaecologyAndUrologyFilter}>Gynaecology And Urology</button>
            <button onClick={handleNursePractitionerFilter}>Nurse Practitioner</button>
            <button onClick={handleOtherSpecialistsFilter}>Other Specialists</button>
            <button onClick={handlePaediatricsFilter}>Paediatrics</button>
            <button onClick={handlePsychiatristFilter}>Psychiatrist</button>
            <button onClick={handleSurgicalTransmasculineFilter}>Surgical (Transmasculine)</button>

            {/* <input type="checkbox" name="clinicalPsychologist" id=""
                onChange={handleClinicalPsychologistCheckboxChange}
                checked={clinicalPsychologist}
            /><label htmlFor="">Clinical Psychologist</label> */}

            {/* <input type="checkbox" name="counsellingPsychologist" id=""
                onChange={handleCounsellingPsychologistCheckBoxChange}
                checked={counsellingPsychologist}
            /><label htmlFor="">Counselling Psychologist</label>

            <input type="checkbox" name="generalPractitioner" id=""
                onChange={handleGeneralPractitionerCheckBoxChange}
                checked={generalPractitioner}
            /><label htmlFor="">General Practitioner</label>

            <input type="checkbox" name="gynaecologyAndUrology" id=""
                onChange={handleGynaecologyAndUrologyCheckBoxChange}
                checked={gynaecologyAndUrology}
            /><label htmlFor="">Gynaecology and Urology</label>

            <input type="checkbox" name="nursePractitioner" id=""
                onChange={handleNursePractitionerCheckBoxChange}
                checked={nursePractitioner}
            /><label htmlFor="">Nurse Practitioner</label>

            <input type="checkbox" name="otherSpecialists" id=""
                onChange={handleOtherSpecialistsCheckBoxChange}
                checked={otherSpecialists}
            /><label htmlFor="">Other Specialists</label>

            <input type="checkbox" name="paediatrics" id=""
                onChange={handlePaediatricsCheckBoxChange}
                checked={paediatrics}
            /><label htmlFor="">Paediatrics</label>

            <input type="checkbox" name="psychiatrist" id=""
                onChange={handlePsychiatristCheckBoxChange}
                checked={psychiatrist}
            /><label htmlFor="">Psychiatrist</label>

            <input type="checkbox" name="surgicalTransmasculine" id=""
                onChange={handleSurgicalTransmasculineCheckBoxChange}
                checked={surgicalTransmasculine}
            /><label htmlFor="">Surgical(Transmasculine)</label> */}


        </>

        // doctors.map((doctor, index) =>
        //     < div className="doctor" key={index} >
        //         <input type="checkbox" name="" id="" />
        //         <label htmlFor="">
        //             {doctor['category']}
        //         </label>
        //     </div>
        // )

    );
}

export default FilterControls