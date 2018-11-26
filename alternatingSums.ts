function alternatingSums(a: number[]): number[] {
    let evenSumm = 0;
    let oddSum = 0;

    a.forEach((element, index) => {
        if(index % 2 === 0) {
            evenSumm += element;
        } else {
            oddSum += element;
        }
    });

    return [evenSumm, oddSum];
}

console.log(alternatingSums([50,60,60,45,70]));