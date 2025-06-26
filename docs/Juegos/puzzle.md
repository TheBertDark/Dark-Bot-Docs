# /puzzle

¡Juega un rompecabezas deslizante interactivo en Discord con imágenes personalizadas o aleatorias!

---

## ¿Qué hace este comando?
Permite a los usuarios iniciar un juego de puzzle tipo "sliding puzzle" (rompecabezas de piezas deslizantes) directamente en el chat, usando imágenes predeterminadas o la imagen que tú elijas.

---

## Opciones del comando
- **imagen** (opcional): URL de una imagen personalizada para el puzzle. Si no se indica, se usará una imagen aleatoria.
- **dificultad** (opcional): Nivel de dificultad del puzzle, elige entre:
  - `3` = Fácil (3x3)
  - `4` = Normal (4x4)
  - `5` = Difícil (5x5)
  (Por defecto es 3x3)

---

## ¿Cómo funciona el juego?
1. Al ejecutar `/puzzle`, se genera una imagen dividida en piezas y mezclada aleatoriamente.
2. Se muestran botones de dirección (⬆️⬇️⬅️➡️) para mover las piezas y resolver el puzzle.
3. El objetivo es ordenar todas las piezas para reconstruir la imagen original.
4. El bot muestra tu tiempo y movimientos al resolverlo.

---

## Ejemplos de uso
- `/puzzle` → Puzzle fácil con imagen aleatoria.
- `/puzzle dificultad:4` → Puzzle 4x4 de dificultad normal.
- `/puzzle imagen:https://ejemplo.com/miimagen.png dificultad:5` → Puzzle difícil con tu propia imagen.

---

## Detalles técnicos y tips
- **Imágenes**: Si usas una URL personalizada, debe ser una imagen válida y accesible públicamente (JPG, PNG, etc.).
- **Botones**: Usa los botones de flecha para mover la pieza vacía y reorganizar el puzzle.
- **Tiempo y movimientos**: El bot lleva un registro y te muestra tu desempeño al terminar.
- **Privacidad**: Solo tú puedes interactuar con tu puzzle; otros usuarios deben iniciar el suyo propio.
- **Dificultad**: Entre más grande el tamaño (5x5), más complejo y retador será el juego.

---

## Advertencias y recomendaciones
- Usa imágenes cuadradas para evitar distorsión.
- Si la imagen personalizada no carga, revisa que la URL sea directa y válida.
- Si abandonas el puzzle, puedes iniciar uno nuevo cuando quieras.
- ¡Reta a tus amigos a ver quién resuelve el puzzle en menos movimientos y tiempo!

---

¿Tienes dudas o sugerencias? ¡Contacta a un administrador o deja tu feedback en el servidor!

---

*Esta documentación fue generada automáticamente a partir del comando y complementada con información del archivo PUZZLE_README.md.*
