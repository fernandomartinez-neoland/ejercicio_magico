import { userModel, skuModel } from "../model/dashboard.model.js"
export function verifyService(idUsuario, skuProducto){
const datosUsuario=userModel(idUsuario)
const datosProducto=skuModel(skuProducto)

    
    return  { cliente: datosUsuario, productoDeseado: datosProducto }
}