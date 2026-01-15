// import express from 'express';
// import { getAllOptions, getOptionsByCategory, insertManyOptions } from '../controllers/floorMasterController.js';

// const router = express.Router();

// router.get('/', getAllOptions);
// router.get('/:category', getOptionsByCategory);
// router.post('/insert-many', insertManyOptions);

// export default router;



import express from 'express';
import { getGroupedOptions } from '../controllers/floorMasterController.js';

const router = express.Router();

// Fetch all options grouped by category
router.get('/grouped', getGroupedOptions);

export default router;
