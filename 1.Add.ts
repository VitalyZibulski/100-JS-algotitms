function add(param1: number, param2: number): number {
    return param1 + param2;
}

//console.log(add(1,2));

function add2(...param1: number[]): number {
    let total = 0;

    console.log(param1);

    param1.forEach((num) => {
        total += num;
    });

    return total;

}

console.log(add2(1,2,3,4));