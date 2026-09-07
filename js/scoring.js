export function createScore() {
  let count = 0;
  let countable = true;

  return {
    get value() {
      return count;
    },

    armForNewTask() {
      countable = true;
    },

    // Returns false when this task was already counted, so retries don't add up.
    registerCorrect() {
      if (!countable) {
        return false;
      }
      countable = false;
      count += 1;
      return true;
    }
  };
}
