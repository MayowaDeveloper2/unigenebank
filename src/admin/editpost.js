import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNavbar from "./adminnavbar";
import Sidebar from "./sidebar";

const Editpost = () => {
  const [title, setTitle] = useState("");
  const [authors, setAuthors] = useState([]);
  const [journalTitle, setJournalTitle] = useState("");
  const [journalUrl, setJournalUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [posts, setPosts] = useState([]); // To store and display posts
  const [editingPostId, setEditingPostId] = useState(null); // To track which post is being edited

  // Fetch and display posts when the component mounts
  useEffect(() => {
    axios.get("http://localhost:8080/backend/api/getall.php").then((response) => {
      setPosts(response.data);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title,
      authors,
      journalTitle,
      journalUrl,
    };

    // If editingPostId is set, it means we're editing an existing post
    if (editingPostId) {
      formData.id = editingPostId;
      const response = await axios.post("http://localhost:8080/backend/api/editpost.php", formData);
      if (response.status === 200) {
        setEditingPostId(null); // Clear editing mode
        setSuccessMessage("Post updated successfully!");
      }
    } else {
      // Otherwise, we're creating a new post
      const response = await axios.post("http://localhost:8080/backend/api/createpost.php", formData);
      if (response.status === 200) {
        setTitle("");
        setAuthors([]);
        setJournalTitle("");
        setJournalUrl("");
        setSuccessMessage("Post published successfully!");
        // Fetch and display posts again to show the new post
        axios.get("http://localhost:8080/backend/api/getall.php").then((response) => {
          setPosts(response.data);
        });
      }
    }
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setAuthors(post.authors.split(","));
    setJournalTitle(post.journalTitle);
    setJournalUrl(post.journalUrl);
    setEditingPostId(post.id); // Set editing mode
  };

  const handleDelete = (postId) => {
    axios.post("http://localhost:8080/backend/api/editpost.php", { id: postId, action: "delete" }).then(() => {
      // Fetch and display posts again after deletion
      axios.get("http://localhost:8080/backend/api/getall.php").then((response) => {
        setPosts(response.data);
      });
    });
  };

  return (
    <>
      <AdminNavbar />
      <Sidebar />
      <div className="off-2 down-8">
        <div>Submit an Article</div>

        <form onSubmit={handleSubmit} className="form-data">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Authors (comma separated)"
          value={authors.join(",")}
          onChange={(e) => setAuthors(e.target.value.split(","))}
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

        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> by {post.authors}
              <button onClick={() => handleEdit(post)}>Edit</button>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Editpost;
