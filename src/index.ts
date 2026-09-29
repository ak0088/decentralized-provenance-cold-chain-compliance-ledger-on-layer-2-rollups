import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'healthy',
    project: 'Decentralized Provenance &amp; Cold-Chain Compliance Ledger on Layer-2 Rollups',
    domain: 'Blockchain &amp; Decentralized Tech',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`[Decentralized Provenance &amp; Cold-Chain Compliance Ledger on Layer-2 Rollups] Server operational on port ${PORT}`);
});
