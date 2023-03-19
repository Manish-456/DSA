function permutations(nums) {
    
    if (nums.length === 0) {
      return [[]];
    }
  
    const result = [];
    for (let i = 0; i < nums.length; i++) {
      const rest = [...nums.slice(0, i), ...nums.slice(i + 1)];
      const restPermutations = permutations(rest);
      console.log(restPermutations);
      for (const perm of restPermutations) {
        result.push([nums[i], ...perm]);
      }
    }
    return result;
  }
  
  // Example usage:
  const nums = [1, 2, 3];
  const perms = permutations(nums);
  console.log(perms); // [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]]
  
console.log([2,3].slice(0,0));