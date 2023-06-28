// import DefaultLayout from "../Layout/DefaultLayout";
import Button from "@mui/material/Button";

const LandingPage = () => {
    return (
        // <DefaultLayout>
        <>
            <h1>Landing Page</h1>
            <p>The data set on this website is provided by <a href="https://www.transhealthsa.com/">TransHealth SA</a>. For the complete and updated list of trans-friendly medical practitioners please navigate to <a href="https://www.transhealthsa.com/">TransHealth SA</a>.</p>
            <Button variant="contained" color="secondary" disableElevation href="/List">List</Button>
        </>
        // </DefaultLayout>
    );
};

export default LandingPage;