import React, { useState } from "react";
import { blogPosts as initialBlogPosts } from "./data/blogData";
import AddNewBlog from "./components/BlogList/AddNewBlog";
import BlogList from "./components/BlogList/BlogList";

const App = () => {
  const [posts, setPosts] = useState(initialBlogPosts);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("date"); 

  const addNewPost = (newPost) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  };

  const updatePost = (updatedPost) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
    );
  };

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };
  const sortedPosts = filteredPosts.sort((a, b) => {
    if (sortOption === "date") {
      return new Date(b.date) - new Date(a.date);
    } else if (sortOption === "author") {
      return a.author.localeCompare(b.author);
    }
    return 0;
  });
  return (
    <div className="App">
      <AddNewBlog addNewPost={addNewPost} />
      <div className="max-w-3xl mx-auto p-4">
        <h2>Arama ve filtreleme</h2>
        <input
          type="text"
          placeholder="Arama yapın (başlık veya yazar)"
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <div className="flex justify-between items-center mt-4">
          <label htmlFor="sort" className="font-medium text-gray-700">
            Sırala:
          </label>
          <select
            id="sort"
            value={sortOption}
            onChange={handleSortChange}
            className="p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="date">Tarihe Göre (Yeniden Eskiye)</option>
            <option value="author">Yazara Göre (A-Z)</option>
          </select>
        </div>
      </div>
      <BlogList
        posts={sortedPosts}
        deletePost={deletePost}
        updatePost={updatePost}
      />
    </div>
  );
};

export default App;
