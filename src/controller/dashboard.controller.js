import { verifyService } from "../services/dashboard.service.js";

export function verifyController(request, response) {
  console.log(request.body);
  const { idUsuario, skuProducto } = request.body;

  response.status(200).send(verifyService(idUsuario, skuProducto));
}
