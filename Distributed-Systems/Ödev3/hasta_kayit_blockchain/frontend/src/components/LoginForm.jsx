import { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

export default function LoginForm({ onLogin, setUser }) {
  const [form, setForm] = useState({ username: "", password: "" });

  const submit = async e => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/login", form);
    if (res.data.success) {
      setUser(form.username);
      onLogin(true);
    } else {
      alert("Giriş başarısız");
    }
  };

  return (
    <Paper sx={{ maxWidth: 400, mx: "auto", mt: 5, p: 3 }}>
      <Typography variant="h5" gutterBottom>Giriş Yap</Typography>
      <Box component="form" onSubmit={submit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Kullanıcı Adı"
          variant="outlined"
          value={form.username}
          onChange={e => setForm({ ...form, username: e.target.value })}
        />
        <TextField
          label="Şifre"
          type="password"
          variant="outlined"
          value={form.password}
          onChange={e => setForm({ ...form, password: e.target.value })}
        />
        <Button type="submit" variant="contained" color="primary">Giriş Yap</Button>
      </Box>
    </Paper>
  );
}
