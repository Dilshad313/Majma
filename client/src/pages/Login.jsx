import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formType, setFormType] = useState(null); // 'user' or 'admin'
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request
      const res = await api.post(`/auth/${formType}/login`, { email, password });

      if (res.data?.token) {
        localStorage.setItem("token", res.data.token);
        toast.success("Login successful!");
        navigate("/dashboard");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      toast.error("Login failed. Please check your details.");
    }
  };

  if (!formType) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
          <h1 className="text-3xl font-bold mb-6">Login As</h1>
          <div className="space-y-4">
            <button
              onClick={() => setFormType("user")}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              User
            </button>
            <button
              onClick={() => setFormType("admin")}
              className="w-full bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition duration-300"
            >
              Admin
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login as {formType === "admin" ? "Admin" : "User"}
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <Link to="/signup" className="text-blue-500 hover:underline">
            Don&apos;t have an account? Sign up
          </Link>
        </div>
        <div className="mt-2 text-center">
          <button
            onClick={() => setFormType(null)}
            className="text-gray-500 hover:underline"
          >
            Back to role selection
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
