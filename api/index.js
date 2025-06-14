export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.url === '/api/health') {
    res.status(200).json({ 
      status: 'ok', 
      message: 'AgroTrace Pro API is running',
      timestamp: new Date().toISOString()
    });
    return;
  }

  res.status(404).json({ error: 'API endpoint not found' });
}
