const express = require('express');
const cors = require('cors');
const data = require('./jobs.json');

const app = express();
app.use(cors());

const jobs = data.jobs;

app.get('/jobs', (req, res) => {
  res.json(jobs);
});

app.get('/jobs/:id', (req, res) => {
  const job = jobs.find((j) => String(j.id) === req.params.id);
  if (!job) {
    return res.status(404).json({ message: 'Job not found' });
  }
  res.json(job);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});