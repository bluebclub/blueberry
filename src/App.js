import './App.css';
import Home from './pages/Home';
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import Scroll from './component/Smothscolling';

// const Loader = () => {
//   return <div className="loader">
//       <video loop autoPlay muted className='video w-full'>
//                 <source src='/assets/images/Comp2.mp4' type="video/mp4"></source>
//       </video>
//   </div>;
// };
function App() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2500);

  //   return () => clearTimeout(timer);

  // }, []);
  // Scroll()
  return (
    <div>
      {/* {loading ? (
        <Loader />
        ) : ( */}
        <>
          <Scroll />
            <Routes>
              <Route exact path="/" element={<Home />} />
              {/* <Route path="/contact" element={<Contact />} />
              <Route path='start' element={<Startintake />} />
              <Route path='expertises' element={<ExpertisePage />} />
              <Route path='/portfolios' element={<Portfolios />} /> */}
            </Routes>
        </>
      {/* )} */}
    </div>
  );
}

export default App;
