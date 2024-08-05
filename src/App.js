// import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ActivityChart from "./components/ActivityChart/ActivityChart";
import Sidebar from "./components/SideBar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <>
      <div
        style={{
          width: "100%",
        }}
      >
        <Navbar />
        <div
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          <Sidebar />
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
