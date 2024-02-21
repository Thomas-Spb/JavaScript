'use strict';
{
  const rectangle = {
    width: 5,
    height: 5,
    set newWidth(val) {
      if (typeof val === 'number') {
        this.width = val;
      }
    },

    set newHeight(val) {
      if (typeof val === 'number') {
        this.height = val;
      }
    },

    get perimeter() {
      return (this.height + this.width) * 2 + 'cm';
    },

    get square() {
      return this.height * this.width + 'cm';
    },
  };

  rectangle.perimeter;
  rectangle.square;
  console.log('rectangle.square;: ', rectangle.square);
  console.log('rectangle.perimeter: ', rectangle.perimeter);
  rectangle.newHeight = 10;
  rectangle.perimeter;
  rectangle.square;
  console.log('rectangle.square;: ', rectangle.square);
  console.log('rectangle.perimeter: ', rectangle.perimeter);
}
