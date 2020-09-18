import React, { useState } from 'react';
import { Router, Link} from '@reach/router';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="container">
      <h1 className="text-center">Food Trucks</h1>
      <div className="row">
        {
          activeTab === "dashboard" ?
          <button className="btn btn-secondary col-sm-2">Dashboard</button>
          : <Link className="col-sm-2" onClick={ () => setActiveTab("dashboard") } to="/"><button className="btn btn-primary">Dashboard</button></Link>
        }

        {
          activeTab === "newtruck" ?
          <button className="btn btn-secondary col-sm-2">New Truck</button>
          : <Link className="col-sm-2" onClick={ () => setActiveTab("newtruck") } to="/truck/new"><button className="btn btn-primary">New Truck</button></Link>
        }

        <Router>
          
        </Router>
      </div>
    </div>
  );
}

export default App;
