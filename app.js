const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

function calcul(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.send('Hello DevOps -webapp sur Kubernetes ! 2 + 3 = ' + calcul(2, 3));
});

// Sonde volontairement cassee pour le TP
app.get('/health', (req, res) => {
  res.status(500).send('ERROR'); // Renvoie une erreur 500 au lieu de 200 OK
});

// Demarrage force du serveur pour Kubernetes
app.listen(PORT, () => console.log('Serveur demarre sur le port ' + PORT));

module.exports = { calcul, app };
