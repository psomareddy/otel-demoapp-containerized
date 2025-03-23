const ItemInventory = require('../models/itemInventory');

const getInventoryItems = async () => {
        try {
            const items = await ItemInventory.find();
            return items;
        }
        catch (err)
        {
            return [];
        }
};

module.exports = getInventoryItems;
