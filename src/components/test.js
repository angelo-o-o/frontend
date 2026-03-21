import { Grid, TextField, Button } from "@mui/material";

function test(name, email, setName, setEmail, handleSubmit) {
  return (
    <Grid container spacing={2} alignItems="cennter">
      <Grid items xs={12} md={5}>
        <TextField
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Grid>
      <Grid items xs={12} md={5}>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></TextField>
      </Grid>
      <Grid items xs={12} md={2}>
        <Button fullWidth variant="contained" onClick={handleSubmit}>
          {isEditing ? "Upate" : "Add User"}
        </Button>
      </Grid>
    </Grid>
  );
}

export default test;
