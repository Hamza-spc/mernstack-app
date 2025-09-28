import { useState, useEffect } from "react";

export default function SkillList() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/skills"); // public GET
        const data = await res.json();
        setSkills(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchSkills();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4">Football Skills</h2>
      {skills.length === 0 ? (
        <p>No skills available.</p>
      ) : (
        <ul>
          {skills.map((skill) => (
            <li key={skill._id} className="border p-3 mb-2 rounded shadow">
              <h3 className="font-semibold">{skill.title} ({skill.category})</h3>
              <p>Level: {skill.level}</p>
              {skill.videoUrl && (
                <iframe
                  className="w-full h-48 mt-2"
                  src={skill.videoUrl}
                  title={skill.title}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
