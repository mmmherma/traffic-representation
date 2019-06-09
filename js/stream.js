// Added filesystem library
const fs = require('fs');
// Added csv-parser library
const csv = require('csv-parser');

// Path to check events
// TODO Configurable path
let path = 'path';

// Listen for folder changes
fs.watch(path, (eventType, filename) => {
  // Check eventType
  // rename events captured when new file added to path
  if(eventType == 'rename') {
    const linkPoints = [];
    fs.createReadStream(path + filename)
      .pipe(csv())
      .on('data', (data) => {
        // Add link_points field to linkPoints list
        linkPoints.push(data['link_points']);
      })
      .on('end', () => {
        console.log(linkPoints);
    });
    console.log(eventType);
    console.log(filename);
  }
})

// Eliminar filas con el mismo ID
// Coger la columna link_points
// Eliminar tuplas erróneas
// Eliminar tuplas con menor de 4 decimales
