import React from "react";
import { Grid } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-material/dist/all.css";
import { getUsersData } from "../DummyData";

const usersData = getUsersData();

const Landing = () => {
  return (
    <>
      <Grid data={usersData}></Grid>
    </>
  );
};

export default Landing;
