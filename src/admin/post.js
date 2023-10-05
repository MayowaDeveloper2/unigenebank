import React, { useState } from "react";
import axios from "axios";
import AdminNavbar from "./adminnavbar";
import Sidebar from "./sidebar";

const App = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState("");
  const [journalTitle, setJournalTitle] = useState("");
  const [journalUrl, setJournalUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const formData = {
      title,
      authors,
      journalTitle,
      journalUrl,
    };

    // Make an POST request to the PHP server to save the data to the database
    const response = await axios.post("http://localhost:8080/backend/api/createpost.php", formData);

    // If the request is successful, clear the form data and display a success message
    if (response.status === 200) {
      setTitle("");
      setAuthors("");
      setJournalTitle("");
      setJournalUrl("");
      setSuccessMessage("Post published successfully!");
    }
  };

  return ( <>
    <AdminNavbar/>
    <Sidebar/>
    <div className="off-2 down-8">
      <div className="bold">Submit a publication</div>

      <form onSubmit={handleSubmit} className="form-data">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Authors"
          value={authors}
          onChange={(e) => setAuthors(e.target.value)}
        />

        <input
          type="text"
          placeholder="Title of Journal"
          value={journalTitle}
          onChange={(e) => setJournalTitle(e.target.value)}
        />

        <input
          type="url"
          placeholder="Journal URL"
          value={journalUrl}
          onChange={(e) => setJournalUrl(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      {successMessage && <p>{successMessage}</p>}
    </div>
  </>  
  );
};

export default App;