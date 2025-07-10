let saldo = 1000;

function cajero() {
  let opcion;
  do {
    opcion = prompt(
      "Cajero automático\n1) Depósito\n2) Retiro\n3) Consultar saldo\n4) Salir"
    );

    switch (opcion) {
      case "1":
        let deposito = parseFloat(prompt("Ingrese monto a depositar:"));
        if (!isNaN(deposito) && deposito > 0) {
          saldo += deposito;
          alert("Depósito realizado. Saldo actual: $" + saldo.toFixed(2));
        } else {
          alert("Monto inválido");
        }
        break;
      case "2":
        let retiro = parseFloat(prompt("Ingrese monto a retirar:"));
        if (!isNaN(retiro) && retiro > 0) {
          if (retiro <= saldo) {
            saldo -= retiro;
            alert("Retiro realizado. Saldo actual: $" + saldo.toFixed(2));
          } else {
            alert("Saldo insuficiente");
          }
        } else {
          alert("Monto inválido");
        }
        break;
      case "3":
        alert("Su saldo es: $" + saldo.toFixed(2));
        break;
      case "4":
        alert("Gracias por usar el cajero");
        break;
      default:
        alert("Opción no válida");
    }
  } while (opcion !== "4");
}

cajero();
