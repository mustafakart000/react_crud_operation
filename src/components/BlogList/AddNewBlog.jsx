import React, { useState } from "react";
import "./AddNewBlog.css";
import Button from "../UI/Button";

const AddNewBlog = ({ addNewPost }) => {
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    author: "",
    date: "",
    content: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { ...formData, id: Date.now() };
    addNewPost(newPost); 
    setFormData({
      id: "",
      title: "",
      author: "",
      date: "",
      content: "",
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Yeni Blog Yazısı Ekle
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Başlık"
          required
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <input
          type="text"
          name="author"
          value={formData.author}
          onChange={handleChange}
          placeholder="Yazar"
          required
          className="w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-y-transparent"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />

        <textarea
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="İçerik"
          required
          className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-32 resize-none"
        ></textarea>

        <Button />
      </form>
    </div>
  );
};

export default AddNewBlog;
