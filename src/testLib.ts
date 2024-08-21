export function expect<T>(expected:T){
    return {
        toBe(result:T){
            if (result === expected) {
                console.log("✅ correcto");
            }else{
                throw new Error(`❌  ${result} is not equal to ${expected}`);
            }            
        }
    }
}

export function test(description:string, callback:()=>void) {
    try {
        callback();
        console.log(`✅ ${description}`);
    } catch (error) {
        console.log(`❌ ${description}`);
        console.log(error);
    }
}

export const it = test;

export function describe(description:string, callback:()=>void) {
    console.log(description);
    callback();
}