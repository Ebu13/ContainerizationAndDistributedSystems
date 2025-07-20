import { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, Paper } from "@mui/material";

export default function BlockchainView() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/chain").then(res => setBlocks(res.data));
  }, []);

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" gutterBottom>Blockchain Zinciri</Typography>
      {blocks.map(block => (
        <Paper key={block.index} elevation={3} sx={{ mb: 2, p: 2 }}>
          <Typography variant="h6">Blok #{block.index}</Typography>
          <Typography variant="body2" color="text.secondary">
            Zaman: {new Date(block.timestamp * 1000).toLocaleString()}
          </Typography>
          <pre style={{ backgroundColor: "#f4f4f4", padding: "0.5rem" }}>
            {JSON.stringify(block.transactions, null, 2)}
          </pre>
        </Paper>
      ))}
    </Box>
  );
}
