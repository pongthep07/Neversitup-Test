export function Findtheoddint(arr) {
    let count = {};

    for (let num of arr) {
      count[num] = (count[num] || 0) + 1;
    }
  
    for (let key in count) {
      if (count[key] % 2 !== 0) {
        return parseInt(key);
      }
    }
  }
  