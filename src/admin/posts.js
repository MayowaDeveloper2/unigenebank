import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from "./adminnavbar";
import Sidebar from "./sidebar";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/backend/api/getall.php")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleDelete = (id) => {
    // Send an HTTP DELETE request to your backend API to delete the post
    axios
      .delete(`http://localhost:8080/backend/api/deletepost.php?id=${id}`)
      .then((response) => {
        // Handle success
        console.log('Deleted successfully:', response.data);
  
        // Fetch and display posts again after deletion
        axios
          .get("http://localhost:8080/backend/api/getall.php")
          .then((response) => {
            setPosts(response.data);
          });
      })
      .catch((error) => {
        // Handle network errors
        console.error('Axios network error:', error);
      });
  };

  return (
    <>
      <AdminNavbar />
      <Sidebar />
      <div className="off-4 down-4 my-col-6">
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Authors</th>
              <th>Journal Title</th>
              <th>Journal Url</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
              {posts.map((post) => (
                <tr key={post.id}>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.authors}</td>
                  <td>{post.journalTitle}</td>
                  <td>{post.journalUrl}</td>
                  <td>
                    <button
                      onClick={() => navigate(`/wp-admin/post/${post._id}`)}
                      className="btn btn-primary"
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(post.id)} // Pass the post ID
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Posts;