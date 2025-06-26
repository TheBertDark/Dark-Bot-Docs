# /birthday-list

**Descripción:**
Muestra la lista de cumpleaños del servidor.

## Subcomandos
- **upcoming**: Muestra los próximos cumpleaños.
  -# Sistema de Cumpleaños: /birthday-list y /birthday-setup

Administra y consulta los cumpleaños de los miembros del servidor y configura cómo serán celebrados.

---

## ¿Qué es el sistema de cumpleaños?
Permite registrar, listar y celebrar los cumpleaños de los miembros del servidor. Puedes personalizar el canal de anuncios, el rol especial, el mensaje de felicitación, la imagen y la hora de envío.

---

## Permisos necesarios
- Solo usuarios con permiso de **Gestionar servidor** pueden configurar el sistema.

---

## Configuración: `/birthday-setup`

Este comando muestra y permite modificar la configuración del sistema de cumpleaños mediante un panel interactivo.

### Opciones configurables:
- **Canal de notificaciones:** Canal donde se anunciarán los cumpleaños.
- **Rol de cumpleañeros:** Rol que se asignará temporalmente a los usuarios que cumplen años.
- **Estado del sistema:** Activar o desactivar los anuncios automáticos.
- **Mensaje personalizado:** Texto que se enviará. Puedes usar variables como `{user}` para mencionar al cumpleañero.
- **Imagen:** URL de una imagen que acompañará el mensaje.
- **Hora de envío:** Hora (en formato 24h) en la que se enviará el mensaje de cumpleaños.

**Ejemplo de flujo de configuración:**
1. Ejecuta `/birthday-setup` para abrir el panel.
2. Usa los botones para establecer canal, rol, mensaje, imagen y hora.
3. Activa el sistema desde el mismo panel.

---

## Consulta de cumpleaños: `/birthday-list`

Permite ver los cumpleaños registrados en el servidor.

### Subcomandos:
- **upcoming:** Muestra los próximos cumpleaños.
- **today:** Muestra los cumpleaños de hoy.
- **month:** Muestra los cumpleaños de este mes.
- **stats:** Estadísticas de cumpleaños registrados.

**Ejemplos:**
- `/birthday-list upcoming`
- `/birthday-list today`
- `/birthday-list month`
- `/birthday-list stats`

---

## Consejos y advertencias
- Si no se configura canal o rol, los anuncios o asignaciones no se realizarán hasta que se establezcan.
- El mensaje puede personalizarse y se recomienda incluir `{user}` para mencionar al cumpleañero.
- La imagen debe ser una URL directa a una imagen válida.
- El sistema debe estar **activado** para que los anuncios se envíen automáticamente.
- Solo los administradores pueden modificar la configuración.
- Los cumpleaños se anuncian a la hora configurada, según el horario del bot (puede variar según el servidor).

---

¿Dudas? Usa `/birthday-setup` para revisar la configuración actual o consulta a un administrador. Puedes complementarla con ejemplos o notas adicionales.*
