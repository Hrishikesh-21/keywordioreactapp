



import DataTable from './DataTable';
import ButtonAppBar from './Dashboard';
import { Grid, Switch } from '@mui/material';
import { useState } from 'react';
import { DataTablepie, PieActiveArc } from './Piechart';
import CreateAds from './CreateAds';
import Navbar from './Navbar';
import { Route,Routes } from 'react-router-dom';

function App() {
return(


<Navbar/>

//   <Router>
//   <Header />
//   <Routes>
//     <Route path="/" element={<Home />} />
//     <Route path="/about" element={<About />} />
//     <Route path="/blog" element={<Blog />} />
//   </Routes>
//   <Footer />
// </Router>









  // <ButtonAppBar></ButtonAppBar>
  // <>
  // <Navbar/>
  //   <div>
  // <Routes>        
  //   <Route path="/Dashboard"  element={<DataTable/>} />
  //   <Route path="/CreateAds"  element={<CreateAds/>} />

  // </Routes>
  // </div>
  // </>
)


}

export default App;



//   const [buttonvalue, setbuttonvalue] = useState(false)








//   const [buttonvalue, setbuttonvalue] = useState(false)

//   const switchcomponent = (e) => {
//     debugger
//     console.log(e, "switch")
//     if (e.target.checked === true) {
//       setbuttonvalue(true)
//     }
//     else{
//       setbuttonvalue(false)
//     }


//   }



// return (
//   <div className="App">
//     <ButtonAppBar></ButtonAppBar>
//     <Grid container xs={12}>
//       <Grid item xs={6}>
//         <DataTable></DataTable>
//       </Grid>
//       <Grid item xs={6} justifyContent={'center'}>
//         <Switch
//           value={buttonvalue}
//           onChange={(e) => {
//             switchcomponent(e)
//           }}>
//         </Switch>
//         {

//           buttonvalue == true ? <PieActiveArc></PieActiveArc> : <DataTablepie></DataTablepie>


//         }

// <CreateAds></CreateAds>



//       </Grid>
//     </Grid>

//   </div>
// );