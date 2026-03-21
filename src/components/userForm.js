import { TextField, Button, Grid } from "@mui/material";

function UserForm({ name, email, setName, setEmail, handleSubmit, isEditing }) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={12} md={5}>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} md={5}>
        <TextField
          label="Email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </Grid>

      <Grid item xs={12} md={2}>
        <Button fullWidth variant="contained" onClick={handleSubmit}>
          {isEditing ? "Update" : "Add User"}
        </Button>
      </Grid>
    </Grid>
  );
}

export default UserForm;
