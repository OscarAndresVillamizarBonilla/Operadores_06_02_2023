let a = confirm("Esta es la variable A\n\t\tPulsa Aceptar si quieres que sea un Boleano Verdadero(True)\n\t\tPulsa Cancelar si quieres que sea un boleano Falso(False)")
let b = confirm("Esta es la variable B\n\t\tPulsa Aceptar si quieres que sea un Boleano Verdadero(True)\n\t\tPulsa Cancelar si quieres que sea un boleano Falso(False)")

let cuerpo = document.querySelector("#myAND");
cuerpo.insertAdjacentHTML("beforeend", ` <tr>
                                            <td>${a}</td>
                                            <td>${b}</td>
                                            <td>${a || b}</td>
                                        </tr>`);