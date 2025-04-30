
function areaCalculator(width, height = 1) {
    return width * height;
  }
  
  console.log(`Area (5, 3): ${areaCalculator(5, 3)}`);
  console.log(`Area (5): ${areaCalculator(5)}`);
  
  const areaCalculatorArrow = (width, height = 1) => width * height;
  
  console.log(`Area (4, 2): ${areaCalculatorArrow(4, 2)}`);
  console.log(`Area (4): ${areaCalculatorArrow(4)}`);
  
  
  let message = "Global greeting";
  
  const greetWithHello = (name = "User") => {
    let message = "Hello from function";
    return `${message}, ${name}`;
  };
  
  console.log(message); 
  console.log(greetWithHello("Steve")); 
  console.log(greetWithHello());
