const myTasks = [
    { name: "Buy Grocery", priority: 3 },
    { name: "Buy fuel", priority: 1 },
    { name: "Deposit to account", priority: 2 }
  ];
  
  const myTaskCounter = () => {
    let count = 0;
    return () => {
      count++;
      return count;
    };
  };
  
  const taskCounter = myTaskCounter();
  
  const makeTaskAPriority = (taskList, minPriority = 1) => {
    return taskList
      .filter(task => task.priority >= minPriority)
      .sort((a, b) => b.priority - a.priority);
  };
  
  const result1 = makeTaskAPriority(myTasks, 2);
  console.log(`Call ${taskCounter()}:`, result1);
  
  const result2 = makeTaskAPriority(myTasks, 1);
  console.log(`Call ${taskCounter()}:`, result2);
