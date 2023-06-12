const ProblemAndSolution = (): JSX.Element => {
  // -----------------------------------------------------------------------------------------------

  // 49. Group Anagrams
  // Medium

  // Companies
  // Given an array of strings strs, group the anagrams together. You can return the answer in any order.

  // An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

  // const groupAnagrams = function (strs: string[]): string[][] {
  //   const map: Map<string, string[]> = new Map();

  //   for (let word of strs) {
  //     const sortedWord: string = [...word].sort().join("");

  //     if (map.has(sortedWord)) {
  //       map.get(sortedWord)?.push(word);
  //     } else {
  //       map.set(sortedWord, [word]);
  //     }
  //   }

  //   return Array.from(map.values());
  // };

  // groupAnagrams();

  // -----------------------------------------------------------------------------------------------

  return <h1>Problem and Solution</h1>;
};

export default ProblemAndSolution;
