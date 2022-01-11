import { Router } from 'express';

const router = new Router();

router.get('/', HomeController.index);

module.exports = router;