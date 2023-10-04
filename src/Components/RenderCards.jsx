import React from "react";
import { useParams } from "react-router-dom";
import { Container, Grid, Typography } from "@mui/material";
import CarCard from "./CarCard";
import Pagination from "./Pagination";

function RenderCards({ carData, carsPerPage, filteredData }) {
  const { id } = useParams();
  const currentPage = parseInt(id) || 1;

  const startIndex = (currentPage - 1) * carsPerPage;
  const endIndex = startIndex + carsPerPage;
  const totalPages = Math.ceil(carData.length / carsPerPage);
  var visibleCars = carData.slice(startIndex, endIndex);

  // console.log("id from render cards = " , id) ;
  // console.log("current Page = " ,currentPage) ;
  // console.log("startIndex = " , startIndex) ;
  // console.log("endIndex = " , endIndex) ;

  if (filteredData) {
    visibleCars = filteredData;
  }
  return (
    <Container maxWidth="lg">
      <Typography variant="h5" gutterBottom>
        <div className="at_page_number">
          You are at page number: {currentPage}
        </div>
      </Typography>
      <Grid container spacing={2}>
        {visibleCars.map((car, index) => (
          <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
            <CarCard car={car} />
          </Grid>
        ))}
      </Grid>

      <Pagination totalPages={totalPages} currentPage={currentPage} />
    </Container>
  );
}

export default RenderCards;
