
var telefonos = [{"telefono":"9993303185","tp":"no"},{"telefono":"6671320629","tp":"no"},{"telefono":"2281341037","tp":"no"}]

var n = 0;
let personaContactada = 0;
let personaNoContactada = 0;
let telefonoNoContactado = [];

var intervalo = setInterval(() => {
    if (telefonos[n]) {
        let currentTel = telefonos[n].telefono;
        if (!currentTel || currentTel.length !== 10) {
            n++;
            personaNoContactada++;
            telefonoNoContactado.push(currentTel);
            return;
        }
        openMEXChatWithText(currentTel, '');

        setTimeout(() => {
            if (document.querySelector("#app > div > span:nth-child(2) > div > span > div > div > div > div > div > div._2i3w0 > div > div > div > div")) {
                document.querySelector("#app > div > span:nth-child(2) > div > span > div > div > div > div > div > div._2i3w0 > div > div > div > div").click();

                openUSChatWithText(currentTel, '');

                setTimeout(() => {
                    if (document.querySelector("#app > div > span:nth-child(2) > div > span > div > div > div > div > div > div._2i3w0 > div > div > div > div")) {
                        document.querySelector("#app > div > span:nth-child(2) > div > span > div > div > div > div > div > div._2i3w0 > div > div > div > div").click();
                        n++;
                        personaNoContactada++;
                        telefonoNoContactado.push(currentTel);

                    } else {
                        if (telefonos[n].tp == 'si') {
                            openUSChatWithText(currentTel, 'Hi there! Thank you for applying in https://mycallcenter.com.mx');
                            clickButton();

                            setTimeout(() => {
                                openUSChatWithText(currentTel, 'The vacancy you applied was for Teleperformance, however since you already worked there we can offer you 2 alternate vacancies from different companies to work from home. The base salary starts at $12,000 pesos per month. You will need to have your own computer to start working and a great english level. Below the requirements needed:');
                                clickButton();
                            }, 2000);

                            setTimeout(() => {
                                openUSChatWithText(currentTel, `Vacancy 2
PC: Intel i5 or AMD equivalent and 8gb RAM
Internet speed: 15 MBPS download and 4 MBPS upload
USB noise cancelling headset.
Two Monitors
CV on English (Resume)
Availability: 40 hours Mon-Fri
Call center experience or Bachelor's degree
                                   
Vacancy 3
Fluent Conversational English
Processor: Intel Core i3 or above
RAM: 6GB or above
Internet Download 20Mbps or Higher Upload minimum 5.0
Availability: 40 hours Mon-Fri
                                   
Please let us know which vacancy do you fulfill so someone reach out to you.`);
                                clickButton();
                            }, 3000);
                            n++;
                            personaContactada++;

                        } else {
                            openUSChatWithText(currentTel, '¡Hola! ¿Cómo estás? Recibimos tu solicitud de trabajo en https://mycallcenter.com.mx');
                            clickButton();

                            setTimeout(() => {
                                openUSChatWithText(currentTel, 'Recuerda que la vacante a la que aplicaste es para ser un asesor telefónico bilingüe por lo que es necesario que tengas un nivel conversacional de ingles y español. No requiere de un nivel de ingles avanzado, sino de un nivel intermedio en adelante. Si te hiciera falta practicar un poco más tu inglés la empresa te dará un par de semanas para practicar y podrás volver a aplicar.');
                                clickButton();
                            }, 2000);

                            setTimeout(() => {
                                openUSChatWithText(currentTel, 'Un agente de Teleperformance se pondrá en contacto contigo en los siguientes 4 días hábiles (de lunes a viernes de 10am a 5pm), así que procura contestar la llamada telefónica, suelen utilizar las siguientes ladas: (55), (33), (662), (614) o (618). Si tienes bloqueador de número desconocidos te recomendamos desactivarlo. Se comunicaran contigo para evaluar tu nivel de inglés, corroborar tu interés, agendarte una entrevista y que cumplas con los requerimientos. ¡Al finalizar tu proceso y ser contratado podrás comenzar a trabajar a la vez que perfeccionas tu ingles!');
                                clickButton();
                            }, 3000);

                            setTimeout(() => {
                                openUSChatWithText(currentTel, 'Te recomendamos practicar tu pronunciación, fluidez y vocabulario en estos días. ¡Mucho éxito y estamos en contacto!')
                                clickButton();
                            }, 4000);
                            n++;
                            personaContactada++;

                        }
                    }
                }, 4000);
            } else {
                if (telefonos[n].tp == 'si') {
                    openMEXChatWithText(currentTel, 'Hi there! Thank you for applying in https://mycallcenter.com.mx');
                    clickButton();

                    setTimeout(() => {
                        openMEXChatWithText(currentTel, 'The vacancy you applied was for Teleperformance, however since you already worked there we can offer you 2 alternate vacancies from different companies to work from home. The base salary starts at $12,000 pesos per month. You will need to have your own computer to start working and a great english level. Below the requirements needed:');
                        clickButton();
                    }, 2000);

                    setTimeout(() => {
                        openMEXChatWithText(currentTel, `Vacancy 2
PC: Intel i5 or AMD equivalent and 8gb RAM
Internet speed: 15 MBPS download and 4 MBPS upload
USB noise cancelling headset.
Two Monitors
CV on English (Resume)
Availability: 40 hours Mon-Fri
Call center experience or Bachelor's degree
                                                           
Vacancy 3
Fluent Conversational English
Processor: Intel Core i3 or above
RAM: 6GB or above
Internet Download 20Mbps or Higher Upload minimum 5.0
Availability: 40 hours Mon-Fri
                                                           
Please let us know which vacancy do you fulfill so someone reach out to you.`);
                        clickButton();
                    }, 3000);
                    n++;
                    personaContactada++;

                } else {
                    openMEXChatWithText(currentTel, '¡Hola! ¿Cómo estás? Recibimos tu solicitud de trabajo en https://mycallcenter.com.mx');
                    clickButton();

                    setTimeout(() => {
                        openMEXChatWithText(currentTel, 'Recuerda que la vacante a la que aplicaste es para ser un asesor telefónico bilingüe por lo que es necesario que tengas un nivel conversacional de ingles y español. No requiere de un nivel de ingles avanzado, sino de un nivel intermedio en adelante. Si te hiciera falta practicar un poco más tu inglés la empresa te dará un par de semanas para practicar y podrás volver a aplicar.');
                        clickButton();
                    }, 2000);

                    setTimeout(() => {
                        openMEXChatWithText(currentTel, 'Un agente de Teleperformance se pondrá en contacto contigo en los siguientes 4 días hábiles (de lunes a viernes de 10am a 5pm), así que procura contestar la llamada telefónica, suelen utilizar las siguientes ladas: (55), (33), (662), (614) o (618). Si tienes bloqueador de número desconocidos te recomendamos desactivarlo. Se comunicaran contigo para evaluar tu nivel de inglés, corroborar tu interés, agendarte una entrevista y que cumplas con los requerimientos. ¡Al finalizar tu proceso y ser contratado podrás comenzar a trabajar a la vez que perfeccionas tu ingles!');
                        clickButton();
                    }, 3000);

                    setTimeout(() => {
                        openMEXChatWithText(currentTel, 'Te recomendamos practicar tu pronunciación, fluidez y vocabulario en estos días. ¡Mucho éxito y estamos en contacto!')
                        clickButton();
                    }, 4000);
                    n++;
                    personaContactada++;
                }
            }
        }, 4000);

    } else {
        clearInterval(intervalo);
        console.log('Terminado');
        console.log('Personas a las que se les intentó mandar un mensaje: ' + n);
        console.log('Personas a las que si se les envió el mensaje: ' + personaContactada);
        console.log('Personas a las que no se les pudo mandar el mensaje: ' + personaNoContactada);
        if (telefonoNoContactado.length > 0) console.log(`Telefonos no contactados: ${telefonoNoContactado}`);
    }
}, 15000)

const openUSChatWithText = (tel, text) => {
    var link = document.createElement("a");
    link.setAttribute("href", `whatsapp://send?phone=1${tel}&text=${encodeURIComponent(text)}`);
    document.body.append(link);
    link.click();
    document.body.removeChild(link);
}

const openMEXChatWithText = (tel, text) => {
    var link = document.createElement("a");
    link.setAttribute("href", `whatsapp://send?phone=52${tel}&text=${encodeURIComponent(text)}`);
    document.body.append(link);
    link.click();
    document.body.removeChild(link);
}

const clickButton = () => {
    let buttonInterval = setInterval(() => {
        if (document.querySelector('button>span[data-icon="send"]')) {
            var button = document.querySelector('button>span[data-icon="send"]').parentElement;
            button.click();
            clearInterval(buttonInterval);
        }
    }, 100);
}

