// [REF_01]

const PALABRAS_COMUNES = new Set([
    // [REF_22]
    "A", "AL", "ALGO", "ALGUN", "ALGUNA", "ALGUNAS", "ALGUNOS",
    "ANTE", "AQUI", "AUN", "AUNQUE", "BAJO", "BIEN", "CADA",
    "CASI", "COMO", "CON", "CONTRA", "CUAL", "CUANDO", "CUANTO",
    "DE", "DEL", "DESDE", "DONDE", "EL", "ELLA", "ELLAS", "ELLOS",
    "EN", "ENTRE", "ERA", "ERAN", "ERES", "ES", "ESA", "ESAS",
    "ESE", "ESO", "ESOS", "ESTA", "ESTAS", "ESTE", "ESTO", "ESTOS",
    "FUE", "FUERON", "HA", "HABIA", "HAY", "HASTA", "LA", "LAS",
    "LE", "LES", "LO", "LOS", "MAS", "ME", "MI", "MIA", "MIAS",
    "MIO", "MIOS", "MIS", "MUY", "NADA", "NI", "NOS", "NOSOTROS",
    "NUESTRA", "NUESTRAS", "NUESTRO", "NUESTROS", "O", "OS", "OTRA",
    "OTRAS", "OTRO", "OTROS", "PARA", "PERO", "POCO", "POR",
    "PORQUE", "QUE", "QUIEN", "QUIENES", "SE", "SEA", "SEAN",
    "SIN", "SOBRE", "SON", "SU", "SUS", "SUYA", "SUYAS", "SUYO",
    "SUYOS", "TAMBIEN", "TAN", "TANTO", "TE", "TI", "TIEMPO",
    "TODO", "TODOS", "TRAS", "TU", "TUS", "TUYA", "TUYAS", "TUYO",
    "TUYOS", "UN", "UNA", "UNAS", "UNO", "UNOS", "USTED", "USTEDES",
    "Y", "YA", "YO",

    // [REF_23]
    "ESTAR", "SER", "HABER", "TENER", "HACER", "PODER", "DECIR",
    "SABER", "VER", "DAR", "QUERER", "LLEGAR", "PASAR", "DEBER",
    "PONER", "PARECER", "QUEDAR", "CREER", "HABLAR", "LLEVAR",
    "DEJAR", "SEGUIR", "ENCONTRAR", "LLAMAR", "VENIR", "PENSAR",
    "SALIR", "VOLVER", "TOMAR", "CONOCER", "VIVIR", "SENTIR",
    "TRATAR", "MIRAR", "CONTAR", "EMPEZAR", "ESPERAR", "BUSCAR",
    "ENTRAR", "TRABAJAR", "ESCRIBIR", "PERDER", "CAMBIAR", "PEDIR",
    "RECIBIR", "RECORDAR", "TERMINAR", "DECIDIR", "APARECER",
    "SERVIR", "SACAR", "NECESITAR", "MANTENER", "LEER", "CAER",

    // [REF_24]
    "DIA", "ANO", "VIDA", "MUNDO", "HOMBRE", "MUJER", "LUGAR",
    "COSA", "PARTE", "CASO", "PAIS", "HIJO", "GOBIERNO", "MANO",
    "OJOS", "MADRE", "PADRE", "PROBLEMA", "PUNTO", "TRABAJO",
    "VERDAD", "HORA", "AMIGO", "FAMILIA", "VOZ", "GRUPO", "CAMPO",
    "CIUDAD", "FUERZA", "NUMERO", "LADO", "SISTEMA", "TIERRA",
    "AGUA", "LUZ", "NOCHE", "MES", "FORMA", "HECHO", "MOMENTO",
    "MANERA", "BUENO", "MALO", "NUEVO", "VIEJO", "GRANDE", "PEQUEÑO",
    "ALTO", "BAJO", "LARGO", "CORTO", "RAPIDO", "LENTO", "FACIL",
    "DIFICIL", "SIEMPRE", "NUNCA", "AHORA", "DESPUES", "ANTES",
    "LUEGO", "HOY", "AYER", "MANANA", "AQUI", "AHI", "ALLI", "CERCA",
    "LEJOS", "CASA", "LIBRO", "PUERTA", "MESA", "CALLE"
]);

// [REF_02]

const PATRONES_ESPANOL = [
    // [REF_25]
    "QUE", "QUI", "EST", "ENT", "PAR", "CON", "LAS", "LOS",
    "DEL", "POR", "UNA", "ADO", "ADA", "CIO", "CION", "IEN",
    "ION", "MEN", "TER", "TRA", "PRO", "COM", "PER", "TIE",
    "NTE", "ESTA", "ESTE", "DES", "BAS", "BIA", "MOS", "SAN",
    "RON", "ARA", "ERA", "IRO", "ANT", "INT", "ORT", "STR",

    // [REF_26]
    "ANDO", "ENDO", "ARAN", "ERAN", "IRAN", "ABLE", "IBLE",
    "ISTA", "ENCIA", "ANCIA", "IDAD", "TURA", "MENTE", "ECER",
    "UCIR", "AJE", "OSIS", "TICO", "TICA", "IVO", "IVA",

    // [REF_27]
    "ES", "DE", "LA", "EL", "EN", "UN", "SU", "NO", "SE"
];

// [REF_03]

const FRECUENCIA_ESPANOL = {
    "E": 13.7, "A": 12.5, "O": 8.7, "L": 8.0, "S": 7.0,
    "N": 6.7, "I": 6.2, "R": 6.0, "D": 5.9, "T": 4.6,
    "U": 4.0, "C": 4.0, "M": 2.5, "P": 2.5, "B": 1.4,
    "G": 1.0, "V": 0.9, "Q": 0.9, "H": 0.7, "F": 0.7,
    "Z": 0.5, "J": 0.4, "Ñ": 0.3, "X": 0.2, "K": 0.1,
    "W": 0.1, "Y": 0.9
};

// [REF_04]

function validarAlfabeto(alfabeto) {
    if (alfabeto.length === 0) {
        return false;
    }

    const caracteres = Array.from(alfabeto);

    return new Set(caracteres).size === caracteres.length;
}

// [REF_05]

function cifrarCesar(texto, desplazamiento, alfabeto) {
    const caracteresAlfabeto = Array.from(alfabeto);
    let resultado = "";

    for (const caracter of texto) {
        let posicion = caracteresAlfabeto.indexOf(caracter);

        // Si no se encuentra, intentamos tratarlo como
        // la versión minúscula de una letra del alfabeto.
        let esMinuscula = false;

        if (posicion === -1) {
            const caracterMayuscula = caracter.toUpperCase();
            posicion = caracteresAlfabeto.indexOf(caracterMayuscula);

            if (posicion !== -1) {
                esMinuscula = true;
            }
        }

        if (posicion !== -1) {
            const nuevaPosicion =
                (posicion + desplazamiento) %
                caracteresAlfabeto.length;

            let nuevoCaracter =
                caracteresAlfabeto[nuevaPosicion];

            // Conservamos la minúscula
            if (esMinuscula) {
                nuevoCaracter = nuevoCaracter.toLowerCase();
            }

            resultado += nuevoCaracter;
        } else {
            // Espacios, números, signos, emojis, etc.
            // permanecen intactos.
            resultado += caracter;
        }
    }

    return resultado;
}

// [REF_06]

function descifrarCesar(texto, desplazamiento, alfabeto) {
    const caracteresAlfabeto = Array.from(alfabeto);
    let resultado = "";

    for (const caracter of texto) {
        let posicion = caracteresAlfabeto.indexOf(caracter);

        let esMinuscula = false;

        if (posicion === -1) {
            const caracterMayuscula = caracter.toUpperCase();
            posicion = caracteresAlfabeto.indexOf(caracterMayuscula);

            if (posicion !== -1) {
                esMinuscula = true;
            }
        }

        if (posicion !== -1) {
            const nuevaPosicion =
                (posicion -
                    desplazamiento +
                    caracteresAlfabeto.length) %
                caracteresAlfabeto.length;

            let nuevoCaracter =
                caracteresAlfabeto[nuevaPosicion];

            if (esMinuscula) {
                nuevoCaracter = nuevoCaracter.toLowerCase();
            }

            resultado += nuevoCaracter;
        } else {
            resultado += caracter;
        }
    }

    return resultado;
}

// [REF_07]

function atbash(texto, alfabeto) {
    const caracteresAlfabeto = Array.from(alfabeto);
    let resultado = "";

    for (const caracter of texto) {
        let posicion = caracteresAlfabeto.indexOf(caracter);

        let esMinuscula = false;

        if (posicion === -1) {
            const caracterMayuscula = caracter.toUpperCase();
            posicion = caracteresAlfabeto.indexOf(caracterMayuscula);

            if (posicion !== -1) {
                esMinuscula = true;
            }
        }

        if (posicion !== -1) {
            const nuevaPosicion =
                caracteresAlfabeto.length - 1 - posicion;

            let nuevoCaracter =
                caracteresAlfabeto[nuevaPosicion];

            if (esMinuscula) {
                nuevoCaracter = nuevoCaracter.toLowerCase();
            }

            resultado += nuevoCaracter;
        } else {
            resultado += caracter;
        }
    }

    return resultado;
}

// [REF_08]

function frecuenciaCaracteres(texto, alfabeto) {
    const caracteresAlfabeto =
        new Set(Array.from(alfabeto));

    const frecuencias = new Map();

    for (const caracter of texto) {
        if (caracteresAlfabeto.has(caracter)) {
            const cantidad =
                frecuencias.get(caracter) || 0;

            frecuencias.set(
                caracter,
                cantidad + 1
            );
        }
    }

    return frecuencias;
}

// [REF_09]

function obtenerPalabras(texto) {
    return texto
        .toUpperCase()
        .split(/\s+/)
        .map(
            palabra =>
                palabra.replace(
                    /[.,;:!?¿¡()[\]{}"'“”‘’]/g,
                    ""
                )
        )
        .filter(
            palabra =>
                palabra.length > 0
        );
}

// [REF_10]

function contarPalabrasComunes(texto) {
    const palabras =
        obtenerPalabras(texto);

    let contador = 0;

    for (const palabra of palabras) {
        if (
            PALABRAS_COMUNES.has(
                palabra
            )
        ) {
            contador++;
        }
    }

    return contador;
}

// [REF_11]

function puntuarPalabras(texto) {
    const palabras =
        obtenerPalabras(texto);

    let puntuacion = 0;

    for (const palabra of palabras) {
        if (
            PALABRAS_COMUNES.has(
                palabra
            )
        ) {
            // [REF_29]
            puntuacion +=
                30 + (palabra.length * 5);
        }
    }

    return puntuacion;
}

// [REF_12]

function puntuarPatrones(texto) {
    const textoMayusculas =
        texto.toUpperCase();

    let puntuacion = 0;

    for (const patron of PATRONES_ESPANOL) {
        let posicion = 0;

        while (true) {
            posicion =
                textoMayusculas.indexOf(
                    patron,
                    posicion
                );

            if (posicion === -1) {
                break;
            }

            // [REF_30]
            puntuacion +=
                patron.length * 2;

            posicion += patron.length;
        }
    }

    return puntuacion;
}

// [REF_13]

function puntuarFrecuencia(
    texto,
    alfabeto
) {
    const frecuencias =
        frecuenciaCaracteres(
            texto,
            alfabeto
        );

    let total = 0;

    for (
        const cantidad
        of frecuencias.values()
    ) {
        total += cantidad;
    }

    if (total === 0) {
        return 0;
    }

    let puntuacion = 0;

    for (
        const [caracter, cantidad]
        of frecuencias
    ) {
        const letra =
            caracter.toUpperCase();

        if (
            Object.prototype.hasOwnProperty.call(
                FRECUENCIA_ESPANOL,
                letra
            )
        ) {
            const frecuenciaReal =
                (cantidad / total) * 100;

            const frecuenciaEsperada =
                FRECUENCIA_ESPANOL[letra];

            const diferencia =
                Math.abs(
                    frecuenciaReal -
                    frecuenciaEsperada
                );

            puntuacion +=
                Math.max(
                    0,
                    10 - diferencia
                );
        }
    }

    return puntuacion;
}

// ============================================================
// MEJORA: análisis de estructura del texto.
// Se agrega sin alterar los REF existentes.
// ============================================================

function puntuarEstructura(texto) {
    const caracteres =
        Array.from(texto);

    if (caracteres.length === 0) {
        return 0;
    }

    const textoMayusculas =
        texto.toUpperCase();

    const palabras =
        obtenerPalabras(texto);

    const letras =
        (
            textoMayusculas.match(
                /[A-ZÑ]/g
            ) || []
        );

    const cantidadEspacios =
        caracteres.filter(
            caracter =>
                caracter === " "
        ).length;

    const proporcionEspacios =
        cantidadEspacios /
        caracteres.length;

    let puntuacion = 0;

    if (
        proporcionEspacios >= 0.05 &&
        proporcionEspacios <= 0.30
    ) {
        puntuacion += 35;
    } else if (
        proporcionEspacios > 0 &&
        proporcionEspacios < 0.40
    ) {
        puntuacion += 15;
    }

    if (palabras.length > 0) {
        puntuacion += Math.min(
            25,
            palabras.length * 2
        );
    }

    const proporcionLetras =
        letras.length /
        caracteres.length;

    if (
        proporcionLetras >= 0.25
    ) {
        puntuacion += 20;
    }

    const palabrasValidas =
        palabras.filter(
            palabra =>
                PALABRAS_COMUNES.has(
                    palabra
                )
        ).length;

    if (
        palabrasValidas > 0
    ) {
        puntuacion += Math.min(
            20,
            palabrasValidas * 5
        );
    }

    const signosMalColocados =
        (
            textoMayusculas.match(
                /^[,.;:!?¿¡]|[ ]{2,}|[,.;:!?¿¡][A-ZÑ]/g
            ) || []
        ).length;

    puntuacion -= Math.min(
        20,
        signosMalColocados * 4
    );

    return Math.max(
        0,
        Math.min(
            100,
            puntuacion
        )
    );
}

// ============================================================
// MEJORA: puntuación de español.
// ============================================================

function puntuacionEspanol(texto) {
    const letras =
        (
            texto
                .toUpperCase()
                .match(/[A-ZÑ]/g) || []
        );

    if (letras.length === 0) {
        return 0;
    }

    const frecuencia =
        puntuarFrecuencia(
            texto,
            letras.join("")
        );

    const palabras =
        puntuarPalabras(texto);

    const patrones =
        puntuarPatrones(texto);

    const textoMayusculas =
        texto.toUpperCase();

    const vocales =
        (
            textoMayusculas.match(
                /[AEIOU]/g
            ) || []
        ).length;

    const proporcionVocales =
        vocales /
        letras.length;

    let vocalesScore = 0;

    if (
        proporcionVocales >= 0.25 &&
        proporcionVocales <= 0.55
    ) {
        vocalesScore = 100;
    } else if (
        proporcionVocales >= 0.20 &&
        proporcionVocales <= 0.60
    ) {
        vocalesScore = 60;
    }

    const palabrasNormalizadas =
        Math.min(
            100,
            palabras
        );

    const patronesNormalizados =
        Math.min(
            100,
            patrones
        );

    const frecuenciaNormalizada =
        Math.min(
            100,
            frecuencia
        );

    if (
        letras.length < 8
    ) {
        return (
            frecuenciaNormalizada * 0.20 +
            palabrasNormalizadas * 0.45 +
            patronesNormalizados * 0.20 +
            vocalesScore * 0.15
        );
    }

    return (
        frecuenciaNormalizada * 0.25 +
        palabrasNormalizadas * 0.45 +
        patronesNormalizados * 0.20 +
        vocalesScore * 0.10
    );
}

// [REF_14]

function puntuarCandidato(
    texto,
    alfabeto
) {
    const palabras =
        puntuarPalabras(texto);

    const patrones =
        puntuarPatrones(texto);

    const frecuencia =
        puntuarFrecuencia(
            texto,
            alfabeto
        );

    const espanol =
        puntuacionEspanol(texto);

    const estructura =
        puntuarEstructura(texto);

    /*
     * Se conserva la puntuación original,
     * pero ahora se añade información lingüística
     * para que el análisis automático sea más preciso.
     */
    const puntuacionOriginal =
        palabras +
        patrones +
        frecuencia;

    const puntuacionMejorada =
        espanol * 0.75 +
        estructura * 0.25;

    return (
        puntuacionOriginal * 0.55 +
        puntuacionMejorada * 0.45
    );
}

// [REF_15]

function descifradoAutomatico(
    texto,
    alfabeto
) {
    const candidatos = [];

    // [REF_31]

    const resultadoAtbash =
        atbash(
            texto,
            alfabeto
        );

    const puntuacionAtbash =
        puntuarCandidato(
            resultadoAtbash,
            alfabeto
        );

    candidatos.push({
        tipo: "Atbash",
        desplazamiento: null,
        texto: resultadoAtbash,
        puntuacion:
            puntuacionAtbash
    });

    // [REF_32]

    const longitudAlfabeto =
        Array.from(
            alfabeto
        ).length;

    /*
     * Se cambia únicamente el inicio de 1 a 0.
     * El módulo 0 representa el texto original y
     * también es un candidato válido.
     */
    for (
        let desplazamiento = 0;
        desplazamiento < longitudAlfabeto;
        desplazamiento++
    ) {
        const resultado =
            descifrarCesar(
                texto,
                desplazamiento,
                alfabeto
            );

        const puntuacion =
            puntuarCandidato(
                resultado,
                alfabeto
            );

        candidatos.push({
            tipo: "César",
            desplazamiento:
                desplazamiento,
            texto: resultado,
            puntuacion:
                puntuacion
        });
    }

    // [REF_33]

    candidatos.sort(
        (a, b) =>
            b.puntuacion -
            a.puntuacion
    );

    const mejor =
        candidatos[0];

    const segundo =
        candidatos[1];

    /*
     * Mejora: calculamos una confianza a partir
     * de la calidad del mejor candidato y de la
     * diferencia respecto al segundo.
     */
    if (
        mejor &&
        segundo &&
        mejor.puntuacion > 0
    ) {
        const calidad =
            Math.min(
                1,
                mejor.puntuacion / 100
            );

        const diferencia =
            Math.max(
                0,
                mejor.puntuacion -
                segundo.puntuacion
            );

        const separacion =
            Math.min(
                1,
                diferencia / 12
            );

        mejor.confianza =
            Number(
                (
                    calidad * 0.45 +
                    separacion * 0.55
                ).toFixed(4)
            );
    } else if (mejor) {
        mejor.confianza = 0.5;
    }

    return mejor;
}

// [REF_16]

function cifrarDesdeInterfaz() {
    const mensaje =
        document.getElementById(
            "mensajeCifrar"
        ).value;

    const alfabeto =
        document.getElementById(
            "alfabeto"
        ).value;

    const tipo =
        document.getElementById(
            "tipoCifrado"
        ).value;

    const resultadoElemento =
        document.getElementById(
            "resultadoCifrado"
        );

    // [REF_34]

    if (
        !validarAlfabeto(
            alfabeto
        )
    ) {
        mostrarError(
            resultadoElemento,
            "El alfabeto no es válido. No debe estar vacío ni contener caracteres repetidos."
        );

        return;
    }

    if (
        mensaje.length === 0
    ) {
        mostrarError(
            resultadoElemento,
            "Escribe un mensaje para cifrar."
        );

        return;
    }

    // [REF_35]

    let resultado;

    if (
        tipo === "cesar"
    ) {
        const desplazamiento =
            parseInt(
                document.getElementById(
                    "desplazamiento"
                ).value
            );

        if (
            isNaN(
                desplazamiento
            ) ||
            desplazamiento < 1
        ) {
            mostrarError(
                resultadoElemento,
                "El desplazamiento debe ser mayor que 0."
            );

            return;
        }

        resultado =
            cifrarCesar(
                mensaje,
                desplazamiento,
                alfabeto
            );
    } else {
        resultado =
            atbash(
                mensaje,
                alfabeto
            );
    }

    // [REF_36]

    resultadoElemento.className =
        "resultado resultado-exito";

    resultadoElemento.innerHTML = `
        <strong>Mensaje cifrado:</strong>
        <div class="texto-final">
            ${escaparHTML(resultado)}
        </div>
    `;
}

// [REF_17]

function descifrarDesdeInterfaz() {
    const mensaje =
        document.getElementById(
            "mensajeDescifrar"
        ).value;

    const alfabeto =
        document.getElementById(
            "alfabeto"
        ).value;

    const resultadoElemento =
        document.getElementById(
            "resultadoDescifrado"
        );

    // [REF_37]

    if (
        !validarAlfabeto(
            alfabeto
        )
    ) {
        mostrarError(
            resultadoElemento,
            "El alfabeto no es válido. No debe estar vacío ni contener caracteres repetidos."
        );

        return;
    }

    // [REF_38]

    if (
        mensaje.trim().length === 0
    ) {
        mostrarError(
            resultadoElemento,
            "Escribe un texto cifrado."
        );

        return;
    }

    const cantidadCaracteres =
        Array.from(
            mensaje.trim()
        ).length;

    if (
        cantidadCaracteres < 10
    ) {
        mostrarError(
            resultadoElemento,
            "El texto es demasiado corto para realizar un análisis confiable. Se necesitan al menos 10 caracteres."
        );

        return;
    }

    // [REF_39]

    const resultado =
        descifradoAutomatico(
            mensaje,
            alfabeto
        );

    // [REF_36]

    resultadoElemento.className =
        "resultado resultado-exito";

    let informacionDesplazamiento =
        "";

    if (
        resultado.desplazamiento !==
        null
    ) {
        informacionDesplazamiento = `
            <p class="info">
                <strong>Módulo detectado:</strong>
                ${resultado.desplazamiento}
            </p>
        `;
    }

    let informacionConfianza =
        "";

    if (
        typeof resultado.confianza ===
        "number"
    ) {
        informacionConfianza = `
            <p class="info">
                <strong>Confianza:</strong>
                ${(resultado.confianza * 100).toFixed(1)}%
            </p>
        `;
    }

    resultadoElemento.innerHTML = `
        <p class="info">
            <strong>Tipo detectado:</strong>
            ${resultado.tipo}
        </p>

        ${informacionDesplazamiento}

        ${informacionConfianza}

        <div class="texto-final">
            ${escaparHTML(
                resultado.texto
            )}
        </div>
    `;
}

// [REF_18]

function mostrarError(
    elemento,
    mensaje
) {
    elemento.className =
        "resultado resultado-error";

    elemento.innerHTML = `
        <strong>Aviso:</strong>
        <p>
            ${escaparHTML(mensaje)}
        </p>
    `;
}

// [REF_19]

function escaparHTML(texto) {
    return texto
        .replace(
            /&/g,
            "&amp;"
        )
        .replace(
            /</g,
            "&lt;"
        )
        .replace(
            />/g,
            "&gt;"
        )
        .replace(
            /"/g,
            "&quot;"
        )
        .replace(
            /'/g,
            "&#039;"
        );
}

// [REF_20]

function actualizarCampoDesplazamiento() {
    const tipo =
        document.getElementById(
            "tipoCifrado"
        ).value;

    const contenedor =
        document.getElementById(
            "contenedorDesplazamiento"
        );

    if (
        tipo === "cesar"
    ) {
        contenedor.style.display =
            "block";
    } else {
        contenedor.style.display =
            "none";
    }
}

// [REF_21]

document
    .getElementById(
        "btnCifrar"
    )
    .addEventListener(
        "click",
        cifrarDesdeInterfaz
    );

document
    .getElementById(
        "btnDescifrar"
    )
    .addEventListener(
        "click",
        descifrarDesdeInterfaz
    );

document
    .getElementById(
        "tipoCifrado"
    )
    .addEventListener(
        "change",
        actualizarCampoDesplazamiento
    );

// [REF_40]

actualizarCampoDesplazamiento();