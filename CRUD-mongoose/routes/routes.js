let router = require('express').Router();
var controller = require('../controllers/controller');

//simple test endpoint
router.route('/')
    .get(controller.test);

//CRUD operations
//router.post('/users',controller.create );
router.route('/teamates')
    .post(controller.create)    
    .get(controller.read)

router.route('/teamates/:id')
    .get(controller.view)
    .put(controller.estimate)


module.exports = router;
