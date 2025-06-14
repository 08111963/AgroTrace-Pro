const path = require('path');
const fs = require('fs');

module.exports = (req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // API routes
  if (req.url.startsWith('/api/')) {
    if (req.url === '/api/health') {
      return res.status(200).json({ 
        status: 'ok', 
        message: 'AgroTrace Pro API is running',
        timestamp: new Date().toISOString(),
        path: req.url
      });
    }
    
    // Other API endpoints would go here
    return res.status(404).json({ error: 'API endpoint not found' });
  }

  // Serve static HTML for all non-API routes
  const htmlContent = `
<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgroTrace Pro - Sistema di Tracciabilità Agroalimentare</title>
    <meta name="description" content="AgroTrace Pro: piattaforma completa per la gestione della tracciabilità agroalimentare. Ricette, lotti, inventario, QR code e valori nutrizionali automatici.">
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { 
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
        }
        .container { 
            text-align: center; 
            max-width: 600px; 
            padding: 40px 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255,255,255,0.2);
        }
        h1 { 
            font-size: 3rem; 
            margin-bottom: 20px; 
            font-weight: 700;
        }
        p { 
            font-size: 1.2rem; 
            margin-bottom: 30px; 
            opacity: 0.9;
            line-height: 1.6;
        }
        .status {
            background: rgba(34, 197, 94, 0.2);
            padding: 15px 25px;
            border-radius: 10px;
            border: 1px solid rgba(34, 197, 94, 0.3);
            margin: 20px 0;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 30px;
        }
        .feature {
            background: rgba(255,255,255,0.1);
            padding: 20px;
            border-radius: 10px;
            border: 1px solid rgba(255,255,255,0.2);
        }
        .feature h3 {
            margin-bottom: 10px;
            color: #86efac;
        }
        .info {
            margin-top: 40px;
            font-size: 0.9rem;
            opacity: 0.7;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🌱 AgroTrace Pro</h1>
        <p>Sistema Completo di Tracciabilità Agroalimentare</p>
        
        <div class="status">
            <strong>✅ Deploy Completato con Successo!</strong><br>
            L'applicazione è ora online e funzionante
        </div>

        <div class="features">
            <div class="feature">
                <h3>📋 Gestione Ricette</h3>
                <p>Crea e gestisci ricette con ingredienti, allergeni e valori nutrizionali automatici</p>
            </div>
            <div class="feature">
                <h3>📦 Tracciabilità Lotti</h3>
                <p>Traccia completamente ogni lotto di produzione con QR code automatici</p>
            </div>
            <div class="feature">
                <h3>📊 Inventario Smart</h3>
                <p>Gestione automatizzata delle scorte con allerte per scadenze e riordini</p>
            </div>
            <div class="feature">
                <h3>📱 QR Code</h3>
                <p>Generazione automatica di QR code per la tracciabilità completa</p>
            </div>
        </div>

        <div class="info">
            <p><strong>Nota:</strong> Questa è la pagina di benvenuto del deploy. L'app React completa verrà caricata non appena il build del frontend sarà completato.</p>
            <p>Per accedere all'applicazione completa, configura il database PostgreSQL nelle variabili d'ambiente.</p>
        </div>
    </div>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(htmlContent);
};
