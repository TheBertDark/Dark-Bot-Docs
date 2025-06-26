# /tc

Verifica si una configuración de gcsim cumple con los estándares KQMC/Theorycraft

---

## ¿Qué hace este comando?
Analiza un enlace de gcsim.app y verifica automáticamente si la configuración cumple con los estándares de Theorycraft/KQMC, mostrando un resultado detallado.

---

## Opción del comando
- **enlace** (obligatorio): Enlace de gcsim.app (debe ser del tipo `https://gcsim.app/sh/...` o `https://gcsim.app/db/...`).

---

## ¿Cómo funciona?
1. El usuario proporciona un enlace de gcsim.app con `/tc enlace:<enlace>`.
2. El bot valida que el enlace sea correcto y extrae el código del mismo.
3. Consulta la API de gcsim para obtener la configuración.
4. Analiza los artefactos, estadísticas y combinaciones usadas para determinar si cumplen con los estándares KQMC (Theorycraft).
5. Devuelve un resultado indicando si la configuración es válida, con detalles de los puntos que cumplen o no.

---

## Ejemplo de uso
- `/tc enlace:https://gcsim.app/sh/MW7dPmpt9WPt`
- `/tc enlace:https://gcsim.app/db/XYZ123456`

## Consejos
- Si tienes dudas sobre los resultados, consulta la guía completa en la sección "Verificador KQMC".
- Usa este comando solo en canales permitidos por la configuración del bot.

---

*Esta documentación fue generada automáticamente y puede ser ampliada según necesidades específicas.*
