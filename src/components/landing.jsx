import React from "react";
import { Grid, GridColumn as Column } from "@progress/kendo-react-grid";
import '@progress/kendo-theme-material/dist/all.css';
import { getUsersData} from "../DummyData";

const usersData = getUsersData(100);

const Landing = () => {
    return (
        <>
        <Grid
        data={usersData}></Grid>
        </>
    )
}

export default Landing;