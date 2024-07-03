// pages/api/client-data.js
export default function handler(req, res) {
    res.status(200).json({ clientData: 'This data was fetched client-side' });
  }
  