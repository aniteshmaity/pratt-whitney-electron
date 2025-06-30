import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TimelineAnimation from './pages/Start';
import Curosel from './pages/Curosel';
import Home100Years from './pages/A100years/Home';
import Inside_100_years from './pages/A100years/Inside';
import YearEngineDetails from './pages/A100years/YearEngineDetails';
import YearCurosel from './pages/A100years/YearCurosel';
import Products from './pages/Product/Products'
import ProductDetails from './pages/Product/ProductDetails'
import StartFlash from './pages/StartFlash';
import NotFound from './pages/NotFound';
import MapScreen from './pages/MapScreen';
import GTF3d from './pages/experience3d/GTF3d';




const App = () => {
  return (
    <Routes>
      <Route path="/" element={<TimelineAnimation />} />
      <Route path="/startflash" element={<StartFlash />} />
      <Route path="/home" element={<Curosel />} />
      <Route path="/home/:id" element={<Curosel />} />
      <Route path="/map" element={<MapScreen />} />
 
      <Route path="/A100years" element={<Home100Years />}/>
        <Route path="inside" element={<Inside_100_years />} />
        <Route path="/A100years/yearCourasal" element={<YearCurosel />} />
        <Route path="/A100years/yearCourasal/:yearParam" element={<YearCurosel />} />
        <Route path="/A100years/yearEngineDetails/:yearParam" element={<YearEngineDetails />} />
        <Route path="/products" element={<Products/>} />
        <Route path="/products/productdetails" element={<ProductDetails/>} />
        <Route path="/experience3d/GTF3d" element={<GTF3d />} />
        <Route path="/experience3d/GTF3d/:Isgtf" element={<GTF3d />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
