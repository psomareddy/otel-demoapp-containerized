const express = require('express'),
  router = express.Router(),
  getInventoryItems = require('../lib/inventoryRepository'),
  ItemInventoryModel = require('../models/itemInventory');

/* GET home page. */
router.get('/', async (req, res, next) => {
  const items = await getInventoryItems();
  res.render('index', { inventoryItems: items });
});

/* GET new command page */
router.get('/newitem', (req, res, next) => {
  res.render('newitem');
});

router.post('/newitem', async (req, res, next) => {
  // Extremely simple implementation to get a command in the database
  const newItemData = {
    itemSKU: req.body.command,
    description: req.body.description,
    inventoryByLocation: [{
      location: req.body.example,
      availableCount: req.body.ex_description
    }]
  }
  const command = new ItemInventoryModel(newItemData);
  try {
    const cmd = await command.save();
    console.log(cmd.command + " saved to items collection.");
  }
  catch (err) {
    console.log(err);
  }
  res.redirect('/');
});

module.exports = router;
