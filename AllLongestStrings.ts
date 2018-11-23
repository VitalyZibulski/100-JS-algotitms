function allLongestStrings(inputArray: string[]): string[] {
    let longestLength = 0;

    const lengestWords = [];

    inputArray.forEach((word: string) => {
        longestLength = longestLength < word.length ? word.length : longestLength;
    });

    inputArray.forEach((word: string) => {
        if(word.length === longestLength) {
            lengestWords.push(word);
        }
    });

    return lengestWords;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));