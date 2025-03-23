const ItemInventoryCommand = require('../models/itemInventory');

var dataInitializer = function () {

    const initializeData = async (callback) => {

        const cisco5000Item = new ItemInventoryCommand({
            itemSKU: 'Cisco 5000 Router',
            description: 'Cisco 5000 Series Enterprise Network Compute System',
            inventoryByLocation: [
                {
                    location: 'Boston MA',
                    availableCount: '89'
                },
                {
                    location: 'Shanghai CN',
                    availableCount: '5'
                }
            ]
        });

        const merakiItem = new ItemInventoryCommand({
            itemSKU: 'Meraki MR 28 Access Point',
            description: 'Meraki MR 28 Access Point',
            inventoryByLocation: [
                {
                    location: 'New York',
                    availableCount: '15'
                },
                {
                    location: 'Dublin IE',
                    availableCount: '75'
                }
            ]
        });


        try {
            await cisco5000Item.save();
            await merakiItem.save();
            callback();
        } catch (err) {
            callback(err);
        }

    };


    return {
        initializeData: initializeData
    };

}();

module.exports = dataInitializer;
