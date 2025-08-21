// frequency as object (fine)

const freqObj: Record <string, number> = {};
for  (const ch of "ababa") freqObj[ch] = (freqObj[ch] || 0) + 1;

// Map - safer for non-string keys

const freq = new Map <number, number>();
for (const n of [1,1,2]) freq.set(n, (freq.get(n) || 0) + 1);

// Set - membership
const seen = new Set<string>();
seen.add("a");
seen.add("b");
console.log(seen.has("a"));
console.log(seen.has("b"));
console.log(seen.has("c"));

function twoSumIndices( nums: number[], target: number): [number, number] | null {
    const seen = new Map<number, number> ();
    for (let i = 0; i < nums.length; i++{
        const need = target - nums[i];
        if (seen.has(need)) return [seen.get(need)!, i];
        seen.set(nums[i], i);
    }
    return null;
}


console.log(JSON.stringify(twoSumIndices([2,7,11,15], 9)) === JSON.stringify([0,1])); 