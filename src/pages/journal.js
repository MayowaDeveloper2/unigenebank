import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Journal = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios
          .get("http://localhost:8080/backend/api/getall.php")
          .then((response) => {
            // Reverse the array to map from highest id to lowest id
            const reversedPosts = response.data.reverse();
            setPosts(reversedPosts);
          })
          .catch((error) => {
            console.error(error);
          });
    }, []);

    return (
        <>
            <Navbar />
            <div className="my-mother bg-blue">
                <div className="centered down-6 px20 bold text-white my-bottom-20">Our Publications</div>
            </div>
            <div className="my-col-6">
                <div className="down-2 off-1 px13">BME Unilorin researchers consistently produce high-impact publications and are committed to open access to their research and data. We have published dozens of articles in top-tier peer-reviewed journals.</div>
                <div className="down-2 off-1 px13 bold">Below are some of our publications:</div>
            </div>
            <div className="my-col-10 down-2 off-1">
                {posts.map((post) => (
                    <div key={post.id} className="post-container">
                        <div className="px15 bold blue">{post.title}</div>
                        <div className="px10">{post.authors}</div>
                        <div className="px10 bold">{post.journalTitle}</div>
                        <div className="px10">{post.journalUrl}</div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Journal;
