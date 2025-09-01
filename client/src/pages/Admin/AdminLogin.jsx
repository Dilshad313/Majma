import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/users/login', { email, password });

      if (res.data?.token) {
        // Decode the token to get user role
        const user = JSON.parse(atob(res.data.token.split('.')[1]));

        if (user.role === 'admin') {
          localStorage.setItem("token", res.data.token);
          toast.success("Admin login successful!");
          navigate("/admin/dashboard");
        } else {
          toast.error("You are not authorized as an admin.");
        }
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      toast.error("Login failed. Please check your details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
          Admin Login
        </h1>
        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-700 dark:text-gray-200">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300"
          >
            Admin Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
