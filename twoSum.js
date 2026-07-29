//T(C(N) and S(C(N)==O(N)) as it requires contigous space alloc iteratively
function twoSum(arr,target){
    const seen=new Map();
    for(let i=0;i<arr.length;i++){
        const currNum=arr[i];
        const compl=target-currNum;
        if(seen.has(compl)){
            return [seen.get(compl),i];
            seen.set(currNum);
        }
    }return [];
}
const arr=[2,5,7,11,15];const target=9;
console.log(twoSum(arr,target));
