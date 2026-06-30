const express = require('express');
constapp = express();
const PORT = process.env.PORT || 3000;
function calcul(a, b) {
  return a + b;
}

app.get('/', (req, res) => {
  res.send('Hello DevOps -webapp sur Kubernetes ! 2 + 3 = ' + calcul(2, 3));
});

// Sonde utilisee par Kubernetes (readiness / liveness)
app.get('/health', (req, res) => res.status(200).send('OK'));

// On ne demarre le serveur que si le fichier est lance directement
// (evite de bloquer les tests Jest qui importent le module).
if (require.main === module) {
  app.listen(PORT, () => console.log('Serveur demarre sur le port ' + PORT));
}

module.exports = { calcul, app };
