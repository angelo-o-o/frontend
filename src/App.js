import useUserManagement from "./hooks/useUserManagement";
import AppRoutes from "./routes/AppRoutes";

function App() {
  const {
    name,
    email,
    setName,
    setEmail,
    handleSubmit,
    users,
    loading,
    deleteUser,
    startEdit,
    isEditing,
  } = useUserManagement();

  return (
    <AppRoutes
      usersPageProps={{
        name,
        email,
        setName,
        setEmail,
        handleSubmit,
        users,
        loading,
        deleteUser,
        startEdit,
        isEditing,
      }}
    />
  );
}

export default App;
