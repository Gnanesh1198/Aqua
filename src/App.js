import { Routes, Route } from "react-router-dom"
import Login from './Screens/Login/Login';
import Dashboard from './Screens/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
