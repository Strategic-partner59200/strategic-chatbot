const { Router } = require('express');
const AppController = require('../controller/AppContorller');
const BotController = require('../controller/BotController');
const PubController = require('../controller/PubControllers');


const router = Router();

router.get("/", AppController.test);
router.post('/bot', BotController.Botgenai);

router.post('/pub', PubController.createPub);
router.get('/pub', PubController.getPub);
router.delete('/pub/:id', PubController.deletePub);



module.exports = router