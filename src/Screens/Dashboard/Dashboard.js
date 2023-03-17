import './dashboard.css';
import Sidebar from '../../Components/Sidebar/sidebar';
import Navbar from '../../Components/Navbar/Navbar';


export default function Dashboard() {
    return (
        <div className="dashboard">
            <Navbar />
            <Sidebar />
        </div>

    );
}