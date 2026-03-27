import { useState, useEffect } from "react";
import axios from "axios";

const useUserManagement = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);

  // Base URL
  const api = axios.create({
    baseURL: "http://localhost:5001",
  });

  // Fetch users
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const res = await api.get("/tblusers");
      setUsers(res.data);
    } catch (err) {
      console.error("Fetch users failed:", err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Add or Update user
  const handleSubmit = async () => {
    if (!name || !email) return alert("Enter name and email");

    try {
      if (editingUserId) {
        // UPDATE user
        await api.put(`/tblusers/${editingUserId}`, { name, email });
        setEditingUserId(null);
      } else {
        // ADD user
        await api.post("/tblusers", { name, email });
      }

      setName("");
      setEmail("");
      fetchUsers();
    } catch (err) {
      console.error("Save user failed:", err.message);
    }
  };

  // Delete user
  const deleteUser = async (id) => {
    try {
      await api.delete(`/tblusers/${id}`);
      fetchUsers();
    } catch (err) {
      console.error("Delete user failed:", err.message);
    }
  };

  // Start editing a user
  const startEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditingUserId(user.id);
  };

  return {
    name,
    email,
    setName,
    setEmail,
    users,
    loading,
    deleteUser,
    startEdit,
    handleSubmit,
    isEditing: !!editingUserId,
  };
};

export default useUserManagement;
