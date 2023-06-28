import Button from '@mui/material/Button';

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

    // console.log('filter controls')
    // console.log(doctors)

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
        <div className='filterControl'>
            {/* <input type="checkbox" name="alliedHealth" id=""
                onChange={handleAlliedHealthCheckboxChange}
                checked={alliedHealth}
            /><label htmlFor="">Allied Health</label> */}
            <Button variant="outlined" size="small" disableElevation onClick={handleAll}>All</Button>
            <Button variant="outlined" size="small" disableElevation onClick={handleAlliedHealthFilter}>Allied Health</Button>
            <Button variant="outlined" size="small" onClick={handleClinicalPsychologistFilter}>Clinical Psychologist</Button >
            <Button variant="outlined" size="small" onClick={handlecounsellingPsychologistFilter}>Counselling Psychologist</Button>
            <Button variant="outlined" size="small" onClick={handleGeneralPractitionerFilter}>General Practitioner</Button>
            <Button variant="outlined" size="small" onClick={handleGynaecologyAndUrologyFilter}>Gynaecology And Urology</Button>
            <Button variant="outlined" size="small" onClick={handleNursePractitionerFilter}>Nurse Practitioner</Button>
            <Button variant="outlined" size="small" onClick={handleOtherSpecialistsFilter}>Other Specialists</Button>
            <Button variant="outlined" size="small" onClick={handlePaediatricsFilter}>Paediatrics</Button>
            <Button variant="outlined" size="small" onClick={handlePsychiatristFilter}>Psychiatrist</Button>
            <Button variant="outlined" size="small" onClick={handleSurgicalTransmasculineFilter}>Surgical (Transmasculine)</Button>

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


        </div>

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