/* Declaro los arreglos */
let camila: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let franco: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let sofia: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let matias: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let agustina: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
/* Obtener venta máxima */
function ventaMaxima(arrayVenta: number[]) {
  let newArray: number = [];
  const longitud: number = 4;
  /* Divido el array en meses */
  for (let i = 0; i < arrayVenta.length; i += longitud) {
    newArray.push(arrayVenta.slice(i, i + longitud));
  }
  let ventaMax = 0;
  let mes = 0;
  let semana = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (ventaMax < Math.max(...newArray[i])) {
      ventaMax = Math.max(...newArray[i]);
      mes = i + 1;
      semana = newArray[i].indexOf(ventaMax) + 1;
    }
  }
  console.log(
    `La venta máxima fue $${ventaMax} en la semana ${semana} del mes ${mes}`
  );
}
/* Obtener venta mínima */
function ventaMinima(arrayVenta: number[]) {
  let newArray: number = [];
  const longitud: number = 4;
  /* Divido el array en meses */
  for (let i = 0; i < arrayVenta.length; i += longitud) {
    newArray.push(arrayVenta.slice(i, i + longitud));
  }
  let ventaMin = Math.min(...newArray[0]);
  let mes = 0;
  let semana = 0;
  for (let i = 0; i < newArray.length; i++) {
    if (ventaMin > Math.min(...newArray[i])) {
      ventaMin = Math.min(...newArray[i]);
      mes = i + 1;
      semana = newArray[i].indexOf(ventaMin) + 1;
    }
  }
  console.log(
    `La venta máxima fue $${ventaMin} en la semana ${semana} del mes ${mes}`
  );
}

/* Obtener promedio de ventas Semanales */
function promedioVentaSemana(ventasArray: number[]) {
  let suma: number = 0;
  for (let i = 0; i < ventasArray.length; i++) {
    suma += ventasArray[i];
  }
  let promedio = suma / ventasArray.length;
  console.log(`El promedio de venta por semana es ${promedio.toFixed(2)}`);
}

function promedioVentaMes(arrayVenta: number[]) {
  let newArray: number = [];
  let promedioMes: number = 0;
  let longitud = 4;
  for (let i = 0; i < arrayVenta.length; i += longitud) {
    newArray.push(arrayVenta.slice(i, i + longitud));
  }
  let sumaMes: number = 0;
  for (let x = 0; x < newArray.length; x++) {
    let suma: number = 0;
    for (let y = 0; y < newArray[x].length; y++) {
      suma += newArray[x][y];
    }
    sumaMes += suma / newArray[x].length;
  }
  promedioMes = sumaMes / newArray.length;
  console.log(`El promedio de ventas por mes es ${promedioMes.toFixed(2)}`);
}

function reporteVendedor(nombre: string, arrayVendedor: number[]) {
  console.log(`########## Reporte del vendedor/a ${nombre} ##########`);
  ventaMaxima(arrayVendedor);
  ventaMinima(arrayVendedor);
  promedioVentaSemana(arrayVendedor);
  promedioVentaMes(arrayVendedor);
}

reporteVendedor("Camila", camila);
