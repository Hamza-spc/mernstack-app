const API_URL = "http://localhost:3001";

export const loginUser = async (email, password) => {
  const res = await fetch(`${API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return await res.json();
};

export const getSkills = async () => {
  const res = await fetch(`${API_URL}/api/skills`);
  return await res.json(); // public route
};

export const addSkill = async (skillData) => {
  const token = localStorage.getItem("token");
  const res = await fetch(`${API_URL}/api/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(skillData),
  });
  return await res.json();
};
