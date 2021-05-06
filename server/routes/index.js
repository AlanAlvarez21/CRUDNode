import { Router } from 'express';

import { catalogs, user } from '../controllers';

const router = Router();

/** Example route */
router.get('/', (req, res) => res.send('Hello World!'));

/** Catalogs */
router.get('/status', catalogs.listStatusTypes);
router.get('/request', catalogs.listRequestTypes);

/** Catalogs */
router.post('/users', user.add);
router.get('/users', user.list);
router.get('/users/:userId', user.byId);

export default router;
