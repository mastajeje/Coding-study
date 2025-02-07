class Queue {
  constructor() {
    this.storage = {};
    this.head = 0;
    this.tail = 0;
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    if (this.head === this.tail) return null;
    const value = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return value;
  }

  peek() {
    return this.storage[this.head];
  }

  size() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const solution = (progresses, speeds) => {
  let result = [];

  const workDays = progresses.map((progress, index) => {
    const speed = speeds[index];
    let workDay = Math.ceil((100 - progress) / speed);
    return workDay;
  });

  let priorWork = workDays[0];

  let count = 0;
  workDays.forEach((workDay, index) => {
    if (workDay <= priorWork) {
      count++;
    } else {
      result.push(count);
      count = 1;
      priorWork = workDays[index];
    }
  });
  result.push(count);
  //   const workDaysQueue = new Queue();

  //   for (const workDay of worDays) workDaysQueue.enqueue(workDay);

  //   let deploymentCount = 1;
  //   let priorWork = workDaysQueue.dequeue();
  //   while (!workDaysQueue.isEmpty()) {
  //     if (priorWork >= workDaysQueue.peek()) {
  //       console.log("b");
  //       workDaysQueue.dequeue();
  //       deploymentCount++;
  //     } else {
  //       console.log("c");
  //       result.push(deploymentCount);
  //       priorWork = workDaysQueue.peek();
  //       deploymentCount = 0;
  //     }

  //     if (workDaysQueue.size() === 1 && deploymentCount === 0) {
  //       deploymentCount += 1;
  //       result.push(deploymentCount);
  //     }

  //     console.log(workDaysQueue, deploymentCount, "b", result);
  //   }

  return result;
};
console.log(solution([93, 30, 55], [1, 30, 5]));
//expected: [2,1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
//expected: [1,3,2]
