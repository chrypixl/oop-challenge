const shape = new Triangle();
shape.setColor('blue');
expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');

const shape = new Square();
shape.setColor('green');
expect(shape.render()).toEqual('');

const shape = new Circle();
shape.setColor('red');
expect(shape.render()).toEqual('<circle cx="" cy="" r="" fill="red" />');

