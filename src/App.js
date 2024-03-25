

import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Catagories  from './Components1/catagories';
import Navbar from './Components1/navbar';
import Videos from './Components1/videos';
import AddVideos from './Components1/AddVideos';
function App() {

  return (
    <div>
        <BrowserRouter>
        <Navbar />
          <Catagories />
          <Routes>
              <Route path="/" element={<Videos />} />
              <Route path="add" element={<AddVideos />} />

          </Routes>
        </BrowserRouter>


    </div>
  );
}

export default App;
