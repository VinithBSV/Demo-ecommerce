import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

function Navbar() {
  return (
    <header
      style={{
        padding: "1rem 1.5rem",
        marginBottom: "1rem",
        borderBottom: "1px solid #e5e7eb",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </nav>

      <div>
        <Link to="/login">Login</Link>
      </div>
    </header>
  );
}

function HomePage({ user }) {
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Home</h1>
      <p>
        {user.isAuth
          ? `Welcome, ${user.name}!`
          : "You are not logged in. Go to login page to login."}
      </p>
    </div>
  );
}

function ProfilePage({ user }) {
  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Profile</h1>
      <p>Name: {user.isAuth ? user.name : "Not logged in"}</p>
      <p>Here you can show more user information.</p>
    </div>
  );
}

function LoginPage({ user, setUser }) {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) return;

    setUser({
      name: name,
      isAuth: true,
    });
  }

  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Login</h1>

      <form onSubmit={handleSubmit} style={{ marginTop: "1rem" }}>
        <label>
          Name
          <input
            type="text"
            placeholder="Type any name..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: "0.5rem" }}
          />
        </label>

        <button type="submit" style={{ marginLeft: "0.5rem" }}>
          Log in
        </button>
      </form>

      {user.isAuth && <p>User Logged In: {user.name}</p>}
    </div>
  );
}

export default function App() {
  const [user, setUser] = useState({
    name: "",
    isAuth: false,
  });

  return (
    <div>
      <Navbar />
      <AuthContext.Provider>
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />

          <Route path="/profile" element={<ProfilePage user={user} />} />

          <Route
            path="/login"
            element={<LoginPage user={user} setUser={setUser} />}
          />

          <Route
            path="*"
            element={<h1 style={{ padding: "0 1.5rem" }}>Not Found</h1>}
          />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}
