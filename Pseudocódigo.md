El pseudocódigo utilizado para elaborar esta web:

// Variables de entrada y cálculo
var NF_2, NF_3, NF_4, NF_5   // Notas finales necesarias
var EI_F                     // Evaluación intermedia final ponderada
var EI                       // Evaluación intermedia (entrada del usuario)

// Validar que EI sea al menos 50
Si EI < 50 entonces
    Imprimir "Error: La Evaluación Intermedia debe ser al menos 50 para acceder a la Evaluación Final."
    Terminar
FinSi

// Calcular el valor ponderado de la Evaluación Intermedia
EI_F = 0.4 * EI

// Calcular los valores requeridos para alcanzar cada rango de nota
value_0 = 60 - EI_F          // Para nota final de 60
value_1 = 70 - EI_F          // Para nota final de 70
value_2 = 81 - EI_F          // Para nota final de 81
value_3 = 91 - EI_F          // Para nota final de 91

// Calcular las notas finales necesarias para cada rango
NF_2 = value_0 / 0.6
NF_3 = value_1 / 0.6
NF_4 = value_2 / 0.6
NF_5 = value_3 / 0.6

// Imprimir resultados
Imprimir "Para alcanzar un 60, necesitas: ", NF_2
Imprimir "Para alcanzar un 70, necesitas: ", NF_3

// Validar si los valores están por encima de 100
Si NF_4 > 100 entonces
    Imprimir "Para alcanzar un 81: ( - ) (no es posible)"
sino
    Imprimir "Para alcanzar un 81, necesitas: ", NF_4

Si NF_5 > 100 entonces
    Imprimir "Para alcanzar un 91: ( - ) (no es posible)"
sino
    Imprimir "Para alcanzar un 91, necesitas: ", NF_5

FIN
