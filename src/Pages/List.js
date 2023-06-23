// import DefaultLayout from "../Layout/DefaultLayout";
import DocList from "../components/DoctorsList";
import FilterControls from "../components/FilterControls";

const ListPage = () => {
    return (
        <>
            <h1>List</h1>
            <FilterControls />
            <DocList />
        </>
        // <DefaultLayout>

        // </DefaultLayout>
    );
};

export default ListPage;