DOCUMENTACIÓN DE REFERENCIAS - SCRIPT DE CIFRADO


[REF_01] -> Banco ampliado de palabras comunes en español (Set global)
[REF_02] -> Patrones y sílabas frecuentes del español (Array global)
[REF_03] -> Frecuencia estándar de letras en español en porcentaje (%)
[REF_04] -> Función para validar que el alfabeto no esté vacío ni repetido
[REF_05] -> Función principal para cifrar mediante el método de César
[REF_06] -> Función principal para descifrar mediante el método de César
[REF_07] -> Función para aplicar el cifrado / descifrado simétrico Atbash
[REF_08] -> Función para calcular las frecuencias brutas de cada carácter
[REF_09] -> Función auxiliar para limpiar y separar texto en palabras
[REF_10] -> Función para contar coincidencias exactas de palabras comunes
[REF_11] -> Función de aptitud (fitness): otorga puntuación basada en palabras válidas encontradas
[REF_12] -> Función de aptitud (fitness): otorga puntuación basada en patrones silábicos detectados
[REF_13] -> Función de aptitud (fitness): evalúa la cercanía estadística de las letras con el español real
[REF_14] -> Función de puntuación global que consolida palabras, patrones y frecuencias
[REF_15] -> Función de fuerza bruta inteligente que evalúa Atbash y todos los desplazamientos de César
[REF_16] -> Controlador del evento de interfaz para realizar el proceso de cifrado
[REF_17] -> Controlador del evento de interfaz para realizar el descifrado automático
[REF_18] -> Función auxiliar para inyectar mensajes de error formateados en el DOM
[REF_19] -> Función de seguridad para escapar caracteres HTML y prevenir XSS
[REF_20] -> Función de interfaz para alternar la visibilidad del campo de desplazamiento (César/Atbash)
[REF_21] -> Registro de escuchadores de eventos (Event Listeners) principales
[REF_22] -> Subgrupo del banco: Artículos, preposiciones, conjunciones y pronombres
[REF_23] -> Subgrupo del banco: Verbos frecuentes (infinitivos y conjugaciones comunes)
[REF_24] -> Subgrupo del banco: Sustantivos, adjetivos y adverbios muy comunes
[REF_25] -> Subgrupo de patrones: Trigramas y tetragramas comunes del español
[REF_26] -> Subgrupo de patrones: Terminaciones y sufijos clave (-ando, -endo, -mente, etc.)
[REF_27] -> Subgrupo de patrones: Palabras cortas esenciales
[REF_28] -> Nota: Los caracteres fuera del alfabeto se mantienen sin modificar
[REF_29] -> Ponderación: Las palabras largas aportan más evidencia que palabras de una sola letra
[REF_30] -> Ponderación: Los patrones más largos aportan mayor puntuación proporcional
[REF_31] -> Bloque de evaluación inicial para el algoritmo Atbash
[REF_32] -> Bloque de iteración por fuerza bruta para todos los desplazamientos de César
[REF_33] -> Bloque de ordenamiento del array de candidatos de mayor a menor puntuación
[REF_34] -> Bloque de validaciones iniciales de entrada para el cifrado
[REF_35] -> Bloque de ejecución lógica de cifrado según el tipo seleccionado
[REF_36] -> Bloque de representación gráfica del resultado exitoso en la interfaz
[REF_37] -> Bloque de validación del alfabeto para el descifrado
[REF_38] -> Bloque de validación de longitud mínima del texto cifrado (mínimo 10 caracteres)
[REF_39] -> Bloque de ejecución del motor de descifrado automático
[REF_40] -> Ejecución inicial automática al cargar el script en el navegador