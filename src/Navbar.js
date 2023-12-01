import React from 'react';
// import {Link} from 'react-router-dom';
import DataTable from './DataTable';
import { PieActiveArc } from './Piechart';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ButtonAppBar from './Dashboard';
import Dashboard from './Dashboard';
import CreateAds from './CreateAds';
import { Form1, Form2 } from './Form';



const Navbar=()=>{
    // const navigate=useNavigate
    return (    
        <div>
      
            <Dashboard/>
        <Routes>
            <Route exact path='/' element={<DataTable/>}/>
            <Route  path='/CreateAds'  element={<CreateAds/>}/> 
            <Route  path='/Form1'  element={<Form1/>}/> 
            <Route  path='/Form2'  element={<Form2/>}/> 


        </Routes>
        {/* </BrowserRouter> */}
    </div>

    )

}

export default Navbar;