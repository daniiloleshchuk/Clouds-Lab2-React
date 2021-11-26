import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";

function App() {
  const [territory, setTerritory] = useState([]);
  const [name, setName] = useState("");
  const API_URL = 'https://me820iaad6.execute-api.us-east-2.amazonaws.com';

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(API_URL + "/lab2Stage/territories")
      setTerritory(response.data);
      return response;
    }
    fetchData();
  }, [])

  return (
      <div className="container">
          <br/>
        <form id="submit_job" onSubmit={() => {
            axios.post(API_URL + "/lab2Stage/territories", {"name": name})
        }}>
          <label>
              Enter territory name
              <input type="text" name="terrytory_id" onChange={
                  (e) => setName(e.target.value)
              }/>
          </label>
        </form>
        <table className="table table-striped table-bordered">
          <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
          </thead>
          <tbody>
          {territory && territory.map(territory =>
              <tr key={territory.id}>
                <td>{territory.id}</td>
                <td>{territory.name}</td>
              </tr>
          )}
          </tbody>
        </table>
      </div>
  );
}

export default App;
