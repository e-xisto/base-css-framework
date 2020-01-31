# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed
- [build 0.1.1] Revisión de elemento embed tamaño por defecto 16/9.
- [build 0.1.2] Revisión completa de elemento button tamaño.
- [build 0.1.2] Revisión mixin make-button-varaiant().
- [build 0.1.3] Revisión elemento input.
- [build 0.1.3] Revisión elemento select.
- [build 0.1.3] Revisión elemento textarea.
- [build 0.1.4] Revisión elementos check, option y switch.
- [build 0.1.6] Revisión componente dropdown.
- [build 0.1.7] Revisión componente collapse.
- [build 0.1.8] Revisión componente modal.

### Added
- [build 0.1.2] Variables para definición de botones.
- [build 0.1.3] Variables para definición de formularios.
- [build 0.1.4] Maquetación elemento file personalizado.
- [build 0.1.5] Librería de iconos.
- [build 0.1.9] Se incluyen ejemplos de slider con swiperjs.


## [0.1.0] - 2020-01-20

### Added
- Configuración de nuevo repositorio de proyecto.
- Scripts `npm run dev` y `npm run build`.
- Variables para definición de colores.
- Plantilla muestra colores.
- Definida layout para documentación.
- Incluidas las variables para los elementos contenido texto.
- Añadido plugin prismjs para Syntax Highlighting.


### Changed
- Nueva estructura de carpetas y organización de archivos.
- Revisión configuración de webpack (CopyPlugin).
- Lectura de plantillas automatizada en `src/docs/template.js`.
- Cambio nombre carpeta `src/html` por `src/docs`.
- Cambio configuración del Webpack Dev Server.
- Configuración carpeta `/docs` para generar Github Pages.
- Actualizado mixin colores para cargar variables CSS.
- Se divide el elemento text en diferentes archivos.
- Se divide utils en diferentes archivos.

### Fixed
- Revisadas las utilidades flex.
- Revisado el componente grid.
- Revisado las clases de spacing.
- Revisada declaración globales de variables CSS tipografía.
- Revisado elemento lista.
- Revisado elemento párrafo.
- Revisado elemento encabezado.
- Revisado elemento blockquote.
- Error mixin spacing padding.
