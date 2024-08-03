import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ActivityChart from "./components/ActivityChart/ActivityChart";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <Navbar />
      {/* <ActivityChart /> */}
      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />
        <Dashboard />
      </div>
    </>
  );
}

export default App;
