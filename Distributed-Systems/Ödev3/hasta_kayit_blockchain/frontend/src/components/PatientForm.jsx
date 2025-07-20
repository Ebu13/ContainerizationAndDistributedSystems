import { useState } from "react";
import axios from "axios";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

export default function PatientForm({ user }) {
  const [form, setForm] = useState({ patient_name: "", diagnosis: "", treatment: "" });

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/add_patient", { ...form, user_id: user });
    alert("Kayıt eklendi.");
  };

  return (
    <Paper sx={{ maxWidth: 500, mx: "auto", mt: 4, p: 3 }}>
      <Typography variant="h5" gutterBottom>Hasta Bilgisi Ekle</Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Hasta Adı"
          variant="outlined"
          value={form.patient_name}
          onChange={e => setForm({ ...form, patient_name: e.target.value })}
        />
        <TextField
          label="Teşhis"
          variant="outlined"
          value={form.diagnosis}
          onChange={e => setForm({ ...form, diagnosis: e.target.value })}
        />
        <TextField
          label="Tedavi"
          variant="outlined"
          value={form.treatment}
          onChange={e => setForm({ ...form, treatment: e.target.value })}
        />
        <Button type="submit" variant="contained" color="primary">Kayıt Ekle</Button>
      </Box>
    </Paper>
  );
}
