//Not define tu boleano de manera contraria a la opcion escogida. ejm si se seleccion true, sera false.
let a = confirm("Define tu variable:\n\t\tSi quieres que tu boleano sea Verdadero(True) pulsa Cancelar\n\t\tDe lo contrario pulsa Aceptar");

let cuerpo = document.querySelector("#myAND");
cuerpo.insertAdjacentHTML("beforeend", ` <tr>
                                            
                                            <td>${a}</td>
                                            <td>${!a}</td>
                                        </tr>`);