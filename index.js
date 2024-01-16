const express = require('express');
const app = express();

app.get('*', (req, res) => {
  res.redirect('http://52.73.157.11'); // Replace with your ECS service URL
});

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

