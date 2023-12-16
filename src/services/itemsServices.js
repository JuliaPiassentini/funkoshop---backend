const { getAll,getOne } = require('../models/items');

const getAllItems = async (params) =>{
    const result = await getAll();
    return result;
};
const getOneItem = async (id) =>{
    const result = await getOne({product_id : id});
    return result;
};
/*const getAllItemsRel= async (id) =>{
    const result = await getAll({licence_id : id});
    return result;
};*/



module.exports = {
    getAllItems,
    getOneItem,
    
    
}