import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Pages/NavBar';
import { Home } from './Pages/Home'
import { Login } from './Pages/Login'
import { JobPage } from './Pages/JobPage';
import { Admin } from './Pages/Admin';

function App() {
    return (
        <div className="App">
            <h1>Home Page</h1>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/Jobpage" element={<JobPage />}></Route>
                <Route path="/admin" element={<Admin />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>




        </div>
    );
}

export default App;
