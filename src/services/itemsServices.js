const { getAll,getOne,getItemsSameLicence } = require('../models/itemsModel');

const getAllItems = async (params) =>{
    const result = await getAll();
    return result;
};
const getOneItem = async (id) =>{
    const result = await getOne({product_id : id});
    return result;
};
const getAllItemsRel= async (idLicence) =>{
    const result = await getItemsSameLicence({licence_id : idLicence});/*Ojeto clave valor que sera reemplazado por params para ser utilizado con el where en la consulta ,así la query a base de datos no queda atada a un solo filtro */
    return result;
};



module.exports = {
    getAllItems,
    getOneItem,
    getAllItemsRel,
    
}