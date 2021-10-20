# Week 4 - Challenge 2

## Ahorcado

Programa mediante React el juego del ahorcado. Aquí tienes un `svg` para el dibujo del ahorcado, cada hijo del svg es un elemento que tendrás que ir mostrando cada vez que se falle (hay que utilizar conditional rendering para ello).

Hay que incluir un archivo con la lista de componentes y sus responsabilidades.

## COMPONENTES:

    WordBox:
    - (ok) Renderizar la caja.
    - (ok) Recibir la letra y renderizarla.


    AlphabetLetter:
    - (ok) Renderitzar la letra que recibe.
    - (ok) Aceptar Acción al onClick.
    - (ok) Añadirse una classe CSS cuando al hacer click.


    Hangman:
    -Renderizar partes del ahorcado.
    -Recibe una classe CSS que indica si esta apagada o encencida la parte del cuerpo.


    App:
    - Añadir clase de las distintas partes del Hangman si la letra apretada es incorrecta.
    - Si la letra clicada es correcta enviar letra y posición al WordBox.


    - (ok) Contener una array de palabras.
    - (ok) Imprimir tantos WordBox como letras tenga la palabra.
    - (ok) Seleccionar una palabra random de la array para el juego.
