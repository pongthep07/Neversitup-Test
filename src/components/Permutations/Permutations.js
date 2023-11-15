export function Permutations(str) {
  const result = [];

  const permute = (arr, start) => {

    if (start === arr.length - 1) {
       
      result.push(arr.join(""));
      return;
    }

    const used = new Set();

    for (let i = start; i < arr.length; i++) {
      if (used.has(arr[i])) continue;
      used.add(arr[i]);

      [arr[start], arr[i]] = [arr[i], arr[start]]; 
      permute([...arr], start + 1);
    }
  };

  permute(str.split(""), 0);
  return result;
}
