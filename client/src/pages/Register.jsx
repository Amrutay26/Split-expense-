import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authservice";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register({ name, email, password });
      alert("Registration successful");
      navigate("/login");
    } catch (err) {
      console.log(err.response?.data);
      alert("Registration failed");
    }
  };

  return (
    <form
      onSubmit={handleRegister}
      style={{
        padding: "40px",
        maxWidth: "350px",
        margin: "0 auto",
      }}
    >
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
      />

      <button type="submit" style={{ width: "100%", padding: "8px" }}>
        Register
      </button>
<p>Already a user? <a href="/login">Login</a></p>
    </form>
  );
};

export default Register;