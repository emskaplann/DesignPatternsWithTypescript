namespace TheIteratorPatternChallenge {
    export function iterateThroughAnArray(array: Array<any>): void {
        for (let item of array)
        {
            console.log(item);
        }
    }
}

var array: Array<string> = ["a", "b", "c", "d", "e"];
TheIteratorPatternChallenge.iterateThroughAnArray(array);