import { Router } from 'express';

const router = Router();

/**
 * GET home page
 */
router.get('/', (req, res) => {
  res.render('pages/login', { title: 'Express ES8 hbs' });
});

export default router;
