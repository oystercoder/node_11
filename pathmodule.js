const path = require('node:path');
console.log(path.basename('C:\\temp\\myfile.html'));
// Returns: 'C:\\temp\\myfile.html')
console.log(path.extname(__filename))
console.log(__filename)