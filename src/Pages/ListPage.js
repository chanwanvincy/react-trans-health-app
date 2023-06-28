// import DefaultLayout from "../Layout/DefaultLayout";
import DoctorsList from "../components/DoctorsList";
import FilterControls from "../components/FilterControls";
import { useState, useEffect } from "react";

const ListPage = ({ doctors, setDoctors }) => {
    // console.log('list page component')
    // console.log(doctors)
    const [filteredDoctors, setFilteredDoctors] = useState(doctors)
    // const [filterList, setFilterList] = useState([])
    // const [alliedHealth, setAlliedHealth] = useState(true)
    // const [clinicalPsychologist, setClinicalPsychologist] = useState(true)
    // const [counsellingPsychologist, setCounsellingPsychologist] = useState(true)
    // const [generalPractitioner, setGeneralPractitioner] = useState(true)
    // const [gynaecologyAndUrology, setGynaecologyAndUrology] = useState(true)
    // const [nursePractitioner, setNursePractitioner] = useState(true)
    // const [otherSpecialists, setOtherSpecialists] = useState(true)
    // const [paediatrics, setPaediatrics] = useState(true)
    // const [psychiatrist, setPsychiatrist] = useState(true)
    // const [surgicalTransmasculine, setSurgicalTransmasculine] = useState(true)

    // function getDoctors() {
    //     fetch('api/doctors')
    //         .then(res => res.json())
    //         .then(doctors => setDoctors(doctors))
    // }
    // useEffect(getDoctors, [])

    return (
        <>
            <h1>List</h1>
            <FilterControls
                doctors={doctors}
                setDoctors={setDoctors}
                filteredDoctors={filteredDoctors}
                setFilteredDoctors={setFilteredDoctors}
            // filterList={filterList}
            // setFilterList={setFilterList}
            // alliedHealth={alliedHealth}
            // setAlliedHealth={setAlliedHealth}
            // clinicalPsychologist={clinicalPsychologist}
            // setClinicalPsychologist={setClinicalPsychologist}
            // counsellingPsychologist={counsellingPsychologist}
            // setCounsellingPsychologist={setCounsellingPsychologist}
            // generalPractitioner={generalPractitioner}
            // setGeneralPractitioner={setGeneralPractitioner}
            // gynaecologyAndUrology={gynaecologyAndUrology}
            // setGynaecologyAndUrology={setGynaecologyAndUrology}
            // nursePractitioner={nursePractitioner}
            // setNursePractitioner={setNursePractitioner}
            // otherSpecialists={otherSpecialists}
            // setOtherSpecialists={setOtherSpecialists}
            // paediatrics={paediatrics}
            // setPaediatrics={setPaediatrics}
            // psychiatrist={psychiatrist}
            // setPsychiatrist={setPsychiatrist}
            // surgicalTransmasculine={surgicalTransmasculine}
            // setSurgicalTransmasculine={setSurgicalTransmasculine}

            />
            <DoctorsList
                doctors={doctors}
                setDoctors={setDoctors}
                filteredDoctors={filteredDoctors}
                setFilteredDoctors={setFilteredDoctors}
            />
        </>
        // <DefaultLayout>

        // </DefaultLayout>
    );
};

export default ListPage;