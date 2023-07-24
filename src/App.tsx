import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiMessage, setApiMessage] = useState("");
  const apiUrl = "https://4ckxi4q4y8.execute-api.us-west-2.amazonaws.com/prod/";

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
        <h1>Simple React App</h1>
        <p>API Response: {apiMessage}</p>
      </div>
    </>
  );
}

export default App;
