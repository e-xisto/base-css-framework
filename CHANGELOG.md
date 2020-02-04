# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- (build 0.1.10) Se añade Terser-webpack-plugin a la configuración de Webpack.
- (build 0.1.11) Responsive tables.
- (build 0.1.12) Se añade la opción de parallax con video background.
- (build 0.1.13) Componente tooltip.

### Changed
- (build 0.1.10) Revisión función inicialización Slider y ejemplos.
- (build 0.1.12) Revisión componente parallax.

### Removed
- (build 0.1.10) Eliminar UglifyJS-webpack-plugin.


## [0.1.1] - 2020-02-03

### Changed
- Revisión de elemento embed tamaño por defecto 16/9.
- Revisión completa de elemento button tamaño.
- Revisión mixin make-button-varaiant().
- Revisión elemento input.
- Revisión elemento select.
- Revisión elemento textarea.
- Revisión elementos check, option y switch.
- Revisión componente dropdown.
- Revisión componente collapse.
- Revisión componente modal.
- Revisión ejemplos sliders.

### Added
- Variables para definición de botones.
- Variables para definición de formularios.
- Maquetación elemento file personalizado.
- Librería de iconos.
- Se incluyen ejemplos de slider con swiperjs.


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
