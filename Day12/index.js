const require = (path) => {
    const fs = require('fs');
    const file = fs.readFileSync(path, 'utf8');
    return eval(file);
    };

// Teaching Aman Github