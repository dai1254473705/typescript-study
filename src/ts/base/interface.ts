/**
 * interface
 * daiyunzhou 2019/1/4 14:29
 */
interface Shape {
  name: string;
  width: number;
  height: number;
  color: string;
}

var area = (shape: Shape) => {
  console.log('name', shape.name);
  console.log('width', shape.width);
  console.log('height', shape.height);
  console.log('color', shape.color);
};
area({ name: '123213', width: 2, height: 23, color: '234234' });
