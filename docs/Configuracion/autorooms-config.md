# /autorooms-config

Configura y administra el sistema de salas automáticas de voz en tu servidor.

---

## ¿Qué es el sistema de salas automáticas?
Permite que los usuarios creen salas de voz temporales de forma dinámica al unirse a un canal disparador. Las salas se gestionan automáticamente según la configuración que elijas.

---

## Permisos necesarios
- Solo usuarios con permiso de **Gestionar canales** pueden usar estos comandos.

---

## Subcomandos y opciones detalladas

### `/autorooms-config setup`
Configura el canal de voz disparador y la categoría donde se crearán las salas.
- **canal** (obligatorio): Canal de voz que, al unirse, creará una sala automática.
- **categoria** (opcional): Categoría donde se crearán las salas (si no se indica, se usan canales sueltos).

**Ejemplo:**
```
/autorooms-config setup canal:#Sala de espera categoria:#Salas temporales
```

---

### `/autorooms-config template`
Define la plantilla del nombre de las salas nuevas.
- **nombre** (obligatorio): Plantilla, puedes usar `{username}` y `{displayName}`.

**Ejemplo:**
```
/autorooms-config template nombre:"Sala de {displayName}"
```

---

### `/autorooms-config limits`
Configura límites para las salas automáticas.
- **max-salas** (opcional): Máximo de salas simultáneas (1-20).
- **limite-usuarios** (opcional): Máximo de usuarios por sala (0 = sin límite, 1-99).

**Ejemplo:**
```
/autorooms-config limits max-salas:10 limite-usuarios:5
```

---

### `/autorooms-config quality`
Ajusta la calidad de audio de las salas automáticas.
- **bitrate** (obligatorio): Calidad en kbps (8-96).

**Ejemplo:**
```
/autorooms-config quality bitrate:64
```

---

### `/autorooms-config toggle`
Activa o desactiva todo el sistema de salas automáticas.
- **estado** (obligatorio): `true` para activar, `false` para desactivar.

**Ejemplo:**
```
/autorooms-config toggle estado:true
```

---

### `/autorooms-config status`
Muestra la configuración actual del sistema de salas automáticas.

**Ejemplo:**
```
/autorooms-config status
```

---

### `/autorooms-config reset`
Resetea TODA la configuración del sistema (¡acción irreversible!).

**Ejemplo:**
```
/autorooms-config reset
```

---

## Consejos y advertencias
- Los nombres de sala pueden personalizarse con `{username}` (usuario) o `{displayName}` (apodo).
- Si el canal disparador o la categoría se eliminan, el sistema puede dejar de funcionar hasta que se reconfigure.
- El límite de bitrate depende de los boosts del servidor.
- El reset elimina toda la configuración y deberás volver a configurar desde cero.
- Los usuarios sin permisos no pueden ejecutar estos comandos.

---

## Ejemplo de flujo de configuración
1. Crea una categoría y un canal de voz "Sala de espera".
2. Ejecuta `/autorooms-config setup canal:#Sala de espera categoria:#Salas temporales`.
3. Personaliza el nombre con `/autorooms-config template nombre:"Sala de {displayName}"`.
4. Limita la cantidad de salas o usuarios si lo deseas.
5. Ajusta la calidad de audio según tus necesidades.
6. Activa el sistema con `/autorooms-config toggle estado:true`.
7. Consulta el estado con `/autorooms-config status`.

---

¿Dudas? Usa `/autorooms-config status` para ver la configuración actual o consulta a un administrador.
