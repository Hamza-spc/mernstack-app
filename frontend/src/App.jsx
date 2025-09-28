import { useState } from "react";
import Login from "./components/Login.jsx";
import SkillList from "./components/SkillList.jsx";
import AddSkill from "./components/AddSkill.jsx";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">LearnBall</h1>
        {user ? (
          <div>
            <span className="mr-4">Hi, {user.name}</span>
            <button onClick={handleLogout} className="bg-red-500 text-white p-1 rounded">
              Logout
            </button>
          </div>
        ) : null}
      </header>

      {!user && <Login onLogin={setUser} />}
      <SkillList />
      {user && user.role === "admin" && <AddSkill onAdd={() => {}} />}
    </div>
  );
}

export default App;
