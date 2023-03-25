import './App.css';
import { Routes, Route } from "react-router";

//pages
import Home from './pages/Home';
import AdoptionList from './pages/AdoptionList';
import AdoptionDetails from './pages/AdoptionDetails';
import AdoptionEdit from './pages/AdoptionEdit';
import Error from './pages/Error';
import NotFound from './pages/NotFound';

//components
import Navbar from './components/Navbar';
import Signup from "./pages/auth/Signup";
import Admin from './pages/auth/Admin';

//auth
import IsPrivate from './components/isPrivate';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adoptions" element={<AdoptionList />} />
        <Route path="/adoptions/:id/details" element={<AdoptionDetails />} />
        <Route path="/adoptions/:id/edit" element={<IsPrivate><AdoptionEdit /></IsPrivate>} />

        <Route path="/signup" element={ <Signup /> } />
        <Route path="/admin" element={ <Admin /> } />

        {/*error FE Routes */}
        <Route path="/error" element={<Error />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
