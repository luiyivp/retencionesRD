function retenciones(sueldo) {
  var ars, afp

  ars = sueldo * 0.0287
  afp = sueldo * 0.0304
  isr = ISR(sueldo)
  totalDesc = ars + afp + isr

  console.log('sueldoBruto: ', sueldo)
  console.log('ARS: ', ars)
  console.log('AFP: ', afp)
  console.log('ISR: ', isr)
  console.log('totalDesc: ', totalDesc)
  console.log('sueldoNeto: ', sueldo - totalDesc)
}

function ISR(sueldo) {
  var sueldoAnual = sueldo * 12

  if (sueldoAnual > 867123) {
    return (((sueldoAnual - 867123.01) * 0.25) + 79776) / 12
  } else if (sueldoAnual > 624329) {
    return (((sueldoAnual - 624329.01) * 0.20) + 31216) / 12
  } else if (sueldoAnual > 416220) {
    return ((sueldoAnual - 416220.01) * 0.15) / 12
  } else {
    return 0
  }
}
