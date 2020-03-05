# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Añado variables sizes eliminando tamaños proporcionales de ´$base-space-size´.


## [0.1.2] - 2020-03-04

### Added
- Se añade Terser-webpack-plugin a la configuración de Webpack.
- Responsive tables.
- Se añade la opción de parallax con video background.
- Componente tooltip.
- Componente alert.
- Componente navbar.
- Renderizado de markdown en documentación.
- Configurar Google Chrome como navegador por defecto en Browsersync.
- Carga menú de contenidos en documentación.
- Documentación introducción, instalación, contenidos y layout.
- Se añade plantilla sandbox.html para realizar test y pruebas.

### Changed
- Revisión función inicialización Slider y ejemplos.
- Revisión componente parallax.
- Actualización de configuración webpack (event-hooks, nunjucks-plugin, browsersync).
- Optimización scripts package.json eliminando webpack-dev-server y copia de archivos.
- Se optimiza la carga de plantillas nunjucks y contexto de variables.
- Estilos plantilla de documentación.
- Comportamiento responsive de heading y paragraph.
- Modificada la tipografía base por "Nunito Sans".
- Revisada las proporciones en la utilidad spacing.

### Removed
- Eliminar UglifyJS-webpack-plugin.
- Se elimina la carga de plantillas con HtmlWebpackPlugin y nunjucks-isomorphic-loader.

### Fixed
- Stop video al cerrar modal con video.
- Eliminar creación de archivo base.js.LICENCE.txt (TerserPlugin extractComments option).


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
