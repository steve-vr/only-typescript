import * as stats from "./stats";

export async function sum(numbers:number[]) {
    return Promise.resolve(stats.sum(numbers));
}

export async function average(numbers:number[]) {
    return Promise.resolve(stats.average(numbers));
}