'use strict';

var mongoose        = require('mongoose'),
    Schema          = mongoose.Schema,
    ObjectId        = Schema.Types.ObjectId;
    
var itemAvailabilityByLocationSchema = Schema({
    location     : { type: String, required: true },
    availableCount : { type: String, required: true },
});

var inventoryItemSchema = Schema({
    itemSKU                 : { type: String, required: true },
    description             : { type: String, required: true },
    inventoryByLocation                : [itemAvailabilityByLocationSchema]
});

var ItemInventoryModel = mongoose.model('itemInventory', inventoryItemSchema);

module.exports = ItemInventoryModel;
