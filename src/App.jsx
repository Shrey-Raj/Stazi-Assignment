import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Container, Grid, TextField, Button } from '@mui/material';
import RenderCards from './Components/RenderCards';
import HomePage from './Components/HomePage';
import cardata from './assets/CarsData.json';
import './App.css';

function App() {
  const [carData, setCarData] = useState([]);
  const [originalCarData, setOriginalCarData] = useState([]);
  const [filteredData, setFilteredData] = useState(null); 
  const [searchText, setSearchText] = useState('');
  const carsPerPage = 6;

  useEffect(() => {
    const initialData = cardata.cars;
    setCarData(initialData);
    setOriginalCarData(initialData);
  }, []);

  const navigate = useNavigate();
  
  // Reset filteredData to null when the route changes
  useEffect(() => {
    setFilteredData(null);
    console.log("filtered data set to : " , filteredData ) ;
  }, [navigate]); 

  const handleSearch = () => {
    if (searchText.trim() === '') {
      alert('Please enter a search term.');  
      return;  
    }
  
    const filteredData = originalCarData.filter((car) =>
      car.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filteredData);
  };
  

  const resetSearch = () => {
    setSearchText('');
    setFilteredData(null);
  };

  return (
    <>
      <div className="search-bar">
        <TextField
          className="search-input"
          label="Search Cars"
          variant="outlined"
          fullWidth
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleSearch}>
          Search
        </Button>
        <Button variant="contained" color="warning" onClick={resetSearch}>
          Reset
        </Button>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/page/:id"
          element={<RenderCards carData={carData} carsPerPage={carsPerPage} filteredData={filteredData} />}
        />
      </Routes>
    </>
  );
}

export default App;
