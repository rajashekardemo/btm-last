// import { Router, Route, Routes } from "react-router-dom";
// import Customers from "../../Pages/Customers";
// // import Dashboard from '../../Pages/Dashboard'; // Corrected the import
// import Inventory from "../../Pages/Inventory";
// import Orders from "../../Pages/Orders";
// // import MusicForm from "../Components/MusicForm/MusicForm";
// import Articals from "../Articals/Articals";

// function AppRoutes() {
//   return (
//     <Router>
//       <Routes>
//         {/* <Route path="/Media" element={<MusicForm/>} /> */}
//         {/* <Route path="/Media" element={<MusicForm />}></Route> */}
//         <Route path="/Media" element={<Articals />}></Route>
//         {/* <Route path="/Media" element={<MusicForm />}></Route> */}
//         {/* <Route path="/inventory" element={<Inventory />} />
//         <Route path="/orders" element={<Orders />} /> */}
//         {/* <Route path="/customers" element={<Customers />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default AppRoutes;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Customers from '../../Pages/Customers';
// import Inventory from '../../Pages/Inventory';
// import Orders from '../../Pages/Orders';
// import MusicForm from '../Components/MusicForm/MusicForm';
import Articals from '../Articals/Articals';
import AudioMessage from '../AudioMessage/AudioMessage';
import AudioSongs from '../AudioSongs/AudioSongs';
import VideoMessage from '../VideoMessage/VideoMessage';
import VideoSongs from '../VideoSongs/VideoSongs';
import Magzine from '../Magzine/Magzine';
import UpdateAudioMessage from '../UpdateAudioMessage/UpdateAudioMessage';

function AppRoutes() {
  return (
    // <Router>
      <Routes>
         <Route path="/Media/AudioMessage" element={<AudioMessage />} />
         <Route path="/Media/AudioSongs" element={<AudioSongs />} />
        <Route path="/Media/VideoMessage" element={<VideoMessage />} />
        <Route path="/Media/VideoSongs" element={<VideoSongs />} />
        <Route path="/library/Articals" element={<Articals />} />
        <Route path="/library/Magzine" element={<Magzine />} />
        <Route path="/library/UpdateAudioMessage" element={<UpdateAudioMessage />} />
       {/* <Route path="/inventory" element={<Inventory />} /> */}
        {/* <Route path="/orders" element={<Orders />} /> */}
        {/* <Route path="/customers" element={<Customers />} /> */}
      </Routes>
    // </Router>
  );
}

export default AppRoutes;

