# Week 4 - Challenge 2

## Ahorcado

Programa mediante React el juego del ahorcado. Aquí tienes un `svg` para el dibujo del ahorcado, cada hijo del svg es un elemento que tendrás que ir mostrando cada vez que se falle (hay que utilizar conditional rendering para ello).

Hay que incluir un archivo con la lista de componentes y sus responsabilidades.

## COMPONENTES:

    WordBox:
    - Renderizar la caja.
    - Recibir la letra y renderizarla.


    AlphabetLetter:
    - Renderitzar la letra que recibe.
    - Aceptar Acción al onClick.
    - Añadirse una classe CSS cuando al hacer click.


    Hangman:
    -Renderizar partes del ahorcado.
    -Recibe una classe CSS que indica si esta apagada o encencida la parte del cuerpo.


    App:
    - Añadir clase de las distintas partes del Hangman si la letra apretada es incorrecta.
    - Si la letra clicada es correcta enviar letra y posición al WordBox.
    - Contener una array de palabras.
    - Imprimir tantos WordBox como letras tenga la palabra.
    - Seleccionar una palabra random de la array para el juego.
