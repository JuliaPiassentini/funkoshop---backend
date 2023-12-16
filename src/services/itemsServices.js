const { getAll,getOne,getItemsSameLicence } = require('../models/items');

const getAllItems = async (params) =>{
    const result = await getAll();
    return result;
};
const getOneItem = async (id) =>{
    const result = await getOne({product_id : id});
    return result;
};
const getAllItemsRel= async (idLicence) =>{
    const result = await getItemsSameLicence({licence_id : idLicence});
    return result;
};



module.exports = {
    getAllItems,
    getOneItem,
    getAllItemsRel,
    
}