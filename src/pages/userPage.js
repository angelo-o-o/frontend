import { Paper, Box, Grid } from "@mui/material";
import { Link } from "react-router-dom";

import UserForm from "../components/userForm";
import UserTable from "../components/userTable";
import Navbar from "../components/navbar";

function UsersPage({
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
}) {
  return (
    <>
      <Navbar />
      <Box display="flex" justifyContent="center" minHeight="100vh" p={2}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={10} lg={8}>
            <Paper sx={{ p: 4 }}>
              <h2>User Management</h2>

              <UserForm
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
                handleSubmit={handleSubmit}
                isEditing={isEditing}
              />

              <UserTable
                users={users}
                loading={loading}
                deleteUser={deleteUser}
                startEdit={startEdit}
              />
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default UsersPage;
