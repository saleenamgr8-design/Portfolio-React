import { useState } from "react";
import { Header } from "../components/Header";  
import { Footer } from "../components/Footer";
 
export const Blog = () => {
  const[posts, setPosts] = useState([]);
  
  return (
    <div>
        <Header />
        <h1>Blog</h1>
        <div>Blog Page</div>
    </div>
  );
}