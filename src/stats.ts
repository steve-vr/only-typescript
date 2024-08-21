export function sum(numbers:number[]) {
        return numbers.reduce((previous,current) => previous + current);
}

export function average(number:number[]){
    return sum(number) / number.length;
}