import { useState } from "react";
import "./BlogItem.css";
const BlogItem = ({ item, deletePost, updatePost }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedContent, setUpdatedContent] = useState(item.content);

  const handleDelete = () => {
    deletePost(item.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updatePost({ ...item, content: updatedContent });
    setIsEditing(false);
  };
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-6 max-w-2xl mx-auto px-4">
      <div className="flex gap-5 items-center border-b pb-3 mb-3">
        <p className="text-gray-500 font-semibold">{item.id}</p>
        <p className="text-xl font-bold text-blue-700">{item.title}</p>
      </div>

      <div className="flex gap-5 items-center text-gray-700 mb-3">
        <p className="font-medium">{item.author}</p>
        <p className="text-sm text-gray-500">{item.date}</p>
      </div>

      <div className="text-gray-600 leading-relaxed text-center">
        <p>{item.content}</p>
      </div>
      <div className="text-gray-600 leading-relaxed text-center">
        {isEditing ? (
          <textarea
            className="w-full p-2 border rounded"
            value={updatedContent}
            onChange={(e) => setUpdatedContent(e.target.value)}
          />
        ) : (
          <p>{item.content}</p>
        )}
      </div>
      <div className="flex gap-4 mt-4">
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sil
        </button>

        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            Güncelle
          </button>
        ) : (
          <button
            onClick={handleEdit}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Düzenle
          </button>
        )}
      </div>
    </div>
  );
};

export default BlogItem;
