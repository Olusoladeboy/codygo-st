import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiMessage, setApiMessage] = useState("");
  const apiUrl = "https://localhost:3000";

  useEffect(() => {
    // Fetch the API data from the deployed API Gateway
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setApiMessage(data.message))
      .catch((error) => console.error("Error fetching API:", error));
  }, []);

  return (
    <>
      <div className="App">
        <h1>Super Simple React App</h1>
        <p>API Response: {apiMessage}</p>
      </div>
    </>
  );
}

export default App;
