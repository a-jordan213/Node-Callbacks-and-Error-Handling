module.exports = (x, y, callback) => { //3parameters,
    if (x <= 0 || y <= 0) {
        callback(new Error(`Reactangle dimensions must be greater than zero. Recived:: ${x}, ${y}`));
    } else {
        setTimeout(() =>
            callback(null, { //null means there's no error
                perimeter: () => 2 * (x + y), //objects 2 p & a
                area: () => x * y
            }),
            2000
        );
    }
};



//perimeter = (x, y) => 2 * (x + y);
//area = (x, y) => x * y;