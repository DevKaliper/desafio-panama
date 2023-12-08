


// Ejercicio 1: Retornar el array de autos
function mostrarInformacionAutos(autos) {
  return autos;
}

// Ejercicio 2: Filtrar autos por marca
function filtrarPorMarca(autos, marca) {
  return autos.filter((auto) => auto.marca === marca);
}

// Ejercicio 3: Calcular el precio promedio de todos los autos
function calcularPrecioPromedio(autos) {
  if (autos.length === 0) return 0;
  return autos.reduce((acc, auto) => acc + auto.precio, 0) / autos.length;
}

// Ejercicio 4: Encontrar el auto más caro
function encontrarAutoMasCaro(autos) {
  if (autos.length === 0) {
    return null; // Retorna null si el array está vacío
  }

  return autos.reduce((maxAuto, autoActual) => {
    return autoActual.precio > maxAuto.precio ? autoActual : maxAuto;
  });
}

// Ejercicio 5: Incrementar el precio de todos los autos en un 10%
function incrementarPrecio(autos) {
  return autos.map(auto => ( auto.precio * 1.1 ));
}

// Ejercicio 6: Encontrar el auto con el menor kilometraje
function encontrarAutoMenorKilometraje(autos) {
  return autos.reduce((minAuto, autoActual) => autoActual.kilometraje < minAuto.kilometraje ? autoActual : minAuto, autos[0]);
}

// Ejercicio 7: Ordenar autos por precio de menor a mayor y devolver un array con los precios
function ordenarPorPrecio(autos) {
  return autos.sort((a, b) => a.precio - b.precio).map((auto) => auto.precio);
}

// Ejercicio 8: Obtener un array con las marcas únicas de los autos
function obtenerMarcasUnicas(autos) {
  return [...new Set(autos.map(auto => auto.marca))];
}


// Ejercicio 9: Filtrar autos por rango de precios
function filtrarPorRangoDePrecio(autos, min, max) {
  return autos.filter((auto) => auto.precio >= min && auto.precio <= max);
}

// Ejercicio 10: Calcular el total de kilometraje de todos los autos
function calcularTotalKilometraje(autos) {
  return autos
    .map((auto) => auto.kilometraje)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

}

// No tocar este exports. Es para el test
module.exports = {
  mostrarInformacionAutos,
  filtrarPorMarca,
  calcularPrecioPromedio,
  encontrarAutoMasCaro,
  incrementarPrecio,
  encontrarAutoMenorKilometraje,
  ordenarPorPrecio,
  obtenerMarcasUnicas,
  filtrarPorRangoDePrecio,
  calcularTotalKilometraje,
};
