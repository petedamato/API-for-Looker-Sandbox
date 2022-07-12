const dataRoutes = (app, fs) => {
  // variables
  const dataPathOne = './data/dataOnePivot.json';
  const dataPathTwoPiv = './data/dataTwoPivots.json';
  const dataPathTwo = './data/dataTwoDimensions.json';
  const dataFever = './data/dataFever.json';
  const dataCheryl = './data/dataCheryl.json';
  const dataSparkline = './data/dataSparkline.json';
  const dataBullet = './data/dataBullet.json';

  // READ
  app.get('/dataOnePivot', (req, res) => {
    fs.readFile(dataPathOne, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

    app.get('/dataTwoDimensions', (req, res) => {
    fs.readFile(dataPathTwo, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
  app.get('/dataSparkline', (req, res) => {
    fs.readFile(dataSparkline, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataTwoPivots', (req, res) => {
    fs.readFile(dataPathTwoPiv, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.get('/dataFever', (req, res) => {
    fs.readFile(dataFever, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
    app.get('/dataCheryl', (req, res) => {
    fs.readFile(dataCheryl, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });
        app.get('/dataBullet', (req, res) => {
    fs.readFile(dataBullet, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

};

module.exports = dataRoutes;
