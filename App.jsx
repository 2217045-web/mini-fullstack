import { useState, useEffect } from "react";

function App() {
  const [message, setMessage] = useState("");

  // fetch backend message when page loads
  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error("Error fetching:", err));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Fullstack App 🚀</h1>
      <p>Message from Backend:</p>
      <h2 style={{ color: "green" }}>{message}</h2>
    </div>
  );
}

export default App;
