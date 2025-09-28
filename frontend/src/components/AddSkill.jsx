import { useState } from "react";

export default function AddSkill({ onAdd }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Shooting");
  const [videoUrl, setVideoUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
      const res = await fetch("http://localhost:3001/api/skills", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
        body: JSON.stringify({ title, category, videoUrl }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Skill added!");
        onAdd(data);
        setTitle("");
        setVideoUrl("");
      } else {
        alert(data.error || "Failed to add skill");
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-6 p-4 border rounded shadow">
      <h2 className="font-bold mb-2">Add New Skill (Admin Only)</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full border p-2 mb-2 rounded">
        <option>Shooting</option>
        <option>Freestyle</option>
        <option>Defending</option>
      </select>
      <input
        type="text"
        placeholder="YouTube embed URL"
        value={videoUrl}
        onChange={(e) => setVideoUrl(e.target.value)}
        className="w-full border p-2 mb-2 rounded"
        required
      />
      <button type="submit" className="w-full bg-green-500 text-white p-2 rounded">
        Add Skill
      </button>
    </form>
  );
}
