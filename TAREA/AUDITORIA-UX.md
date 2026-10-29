# Auditoría de UX y Rediseño - App Notas

## Tabla de Heurísticas de Nielsen y Soluciones Aplicadas

| Heurística                             | Problema Original                                                                 | Solución Aplicada                                                                     |
| :------------------------------------- | :-------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------ |
| **Visibilidad del estado del sistema** | La aplicación no confirmaba cuando una nota se guardaba o eliminaba.              | Se agregó un mensaje visible dinámico (ej. «Nota agregada exitosamente»).             |
| **Prevención de errores**              | Permitía guardar notas totalmente vacías o sin título.                            | Se aplicó validación `required` e inhibición de envío si los campos están vacíos.     |
| **Control y libertad del usuario**     | Al hacer clic en eliminar, la nota se borraba de inmediato sin opción a revertir. | Se agregó un modal/diálogo de confirmación antes de eliminar para permitir cancelar.  |
| **Consistencia y estándares**          | Botones con tamaños desiguales y colores sin jerarquía visual.                    | Se unificaron variables CSS en `:root` para colores, fuentes y espaciado consistente. |
| **Reconocimiento antes que recordar**  | Formularios sobrecargados con múltiples opciones visibles de golpe.               | Se aplicaron agrupaciones claras y etiquetas explícitas (`label`) en cada campo.      |

---

## Leyes de UX Aplicadas

1. **Ley de Fitts:** Los botones principales de acción («Agregar Nota») tienen una altura mínima de `44px` y abarcan un área táctil amplia para facilitar su interacción.
2. **Ley de Hick:** Se redujeron las opciones de configuración visibles simultáneamente, organizando la creación de notas en un flujo secuencial simple.
3. **Ley de Miller:** La información visual de las notas creadas se organiza en bloques/tarjetas pequeños (máximo 5-7 elementos visibles por sección) para no sobrecargar la memoria de trabajo.

---

## Accesibilidad (WCAG)

- **Etiquetas y atributos:** Cada campo de entrada cuenta con su respectivo `<label>` asociado mediante `for`.
- **Imágenes:** Atributo `alt` descriptivo en todas las imágenes utilizadas.
- **Foco visible:** Indicador de foco con un borde claro (`:focus-visible`) para navegación por teclado.
- **Contraste:** Relación de contraste superior a **4.5:1** entre texto y fondo.
- **Botones:** Altura mínima de `44px` y área de toque accesible.

---

## Resultados de Auditoría Lighthouse (Accesibilidad)

- **Antes del rediseño:** 68/100
- **Después del rediseño:** 100/100

![Captura Antes](antes-lighthouse.png)
![Captura Después](despues-lighthouse.png)S
