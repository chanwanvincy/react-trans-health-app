import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Button from "@mui/material/Button";

const AddPage = ({ setDoctors }) => {
    const [formData, setFormData] = useState({
        doc_name: '',
        category: '',
        address: '',
        suburb: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData({ ...formData, [name]: value })


    }

    function onSubmitHandler(event) {
        event.preventDefault()
        console.log(formData)

        fetch('/api/doctors', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(doctors => {
                setDoctors(doctors)
            })
    }

    return (
        // <DefaultLayout>
        <>
            <h1>Add Medical Practitioner</h1>
            <form action="" id="new-doctor-form" onSubmit={onSubmitHandler}>
                <label htmlFor="doc_name">Practitioner's Name </label>
                <input type="text" name="doc_name" onChange={handleInputChange} /><br />

                <label htmlFor="category">Select Category </label>
                <select name="category" id="" onChange={handleInputChange}>
                    <option value=""> </option>
                    <option value="Allied Health">Allied Health</option>
                    <option value="Clinical Psychologist">Clinical Psychologist</option>
                    <option value="Counselling Psychologist">Counselling Psychologist</option>
                    <option value="General Practitioner">General Practitioner</option>
                    <option value="Gynaecology and Urology">Gynaecology and Urology</option>
                    <option value="Nurse Practitioner">Nurse Practitioner</option>
                    <option value="Other Specialists">Other Specialists</option>
                    <option value="Paediatrics">Paediatrics</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    <option value="Surgical - Transmasculine">Surgical (Transmasculine)</option>
                </select><br />

                <label htmlFor="address" name="address">Address </label>
                <input type="text" name="address" onChange={handleInputChange} /><br />

                <label htmlFor="suburb">Suburb </label>
                <input type="text" name="suburb" onChange={handleInputChange} /><br />

                <label htmlFor="phone">Phone </label>
                <input type="text" name="phone" /><br />
                {/* 
                <input type="checkbox" /><label htmlFor="u18">Accepts Patients Under 18</label><br />
                <input type="checkbox" /><label htmlFor="o18">Accepts Patients Over 18</label><br />
                <input type="checkbox" /><label htmlFor="u25">Accepts Patients Under 18</label><br />
                <input type="checkbox" /><label htmlFor="gp_ref_required">GP referral may be required</label><br />
                <input type="checkbox" /><label htmlFor="low_cost_ndis_option">Low Cost/ NDIS option available</label><br /> */}
                <Button variant="contained" color="secondary" disableElevation href="/List">Submit</Button>
            </form>
        </>

        // </DefaultLayout>
    );
};

export default AddPage;