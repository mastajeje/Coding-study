//요세푸스 문제
class Queue {
  constructor(value) {
    this.head = 0;
    this.tail = 0;
    this.storage = {};
  }

  enqueue(value) {
    this.storage[this.tail] = value;
    this.tail++;
  }

  dequeue() {
    // check if queue is empty
    if (this.head === this.tail) return null;
    const value = this.storage[this.head];
    delete this.storage[this.head];
    this.head++;
    return value;
  }

  size() {
    return this.tail - this.head;
  }
}

const solution = (N, K) => {
  // let result = []
  const queue = new Queue();
  let result;
  for (i = 0; i < N; i++) {
    queue.enqueue(i + 1);
  }

  while (queue.size() > 0) {
    for (i = 1; i <= K; i++) {
      if (i !== K) {
        const value = queue.dequeue();
        queue.enqueue(value);
      } else {
        result = queue.dequeue();
      }
    }
  }

  return result;
};

console.log(solution(5, 2));
// expected: 3
console.log(solution(5, 3));
// expected: 4
console.log(solution(6, 2));
// expected: 5
