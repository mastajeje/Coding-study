class RankTracker {
    constructor() {
      this.scores = []; // Sorted array to store scores
    }
  
    rank(score) {
      // Insert the score while keeping array sorted
      let index = this.binaryInsert(score);
      
      // Rank is determined by the index (1-based rank)
      return index + 1;
    }
  
    binaryInsert(score) {
      let left = 0, right = this.scores.length;
  
      // Binary search for insertion point
      while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (this.scores[mid] <= score) right = mid; // Scores sorted in descending order
        else left = mid + 1;
      }
  
      // Insert at correct position
      this.scores.splice(left, 0, score);
      return left; // Return index for ranking
    }
  }
  
  // Example usage:
  const tracker = new RankTracker();
  console.log(tracker.rank(70));  // Output: 1
  console.log(tracker.rank(100)); // Output: 1
  console.log(tracker.rank(80));  // Output: 2
  console.log(tracker.rank(70));  // Output: 4
  console.log(tracker.rank(50));  // Output: 5