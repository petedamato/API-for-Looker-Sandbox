const feRoutes = (app, fs) => {
  // variables
  const fePath = './views/index.html';
  const fePathJS = './views/template.js';

  // READ
  app.get('/', (req, res) => {
    fs.readFile(fePath, 'utf8', (err, resur) => {
      if (err) {
        throw err;
      }

      res.send(resur);
    });
  });
  app.get('/template.js', (req, res) => {
    fs.readFile(fePathJS, 'utf8', (err, resur) => {
      if (err) {
        throw err;
      }

      res.send(resur);
    });
  });

};

module.exports = feRoutes;
