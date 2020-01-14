const { PuppetController, MongoController } = require('../controllers')
module.exports = function router(app) {
  app.route('/heartbeat')
    .get(function heartbeat(req, res) {
      return res.send('thump thump')
    })

  app.route('/start')
    .get(PuppetController.start)

  app.route('/stop')
    .get(PuppetController.stop)

  app.route('/db')
    .get(MongoController.get)
    .post(MongoController.write)

  app.route('*')
    .get(function badRoute(req, res) {
      return res.send('bad route')
    })
}
