//Checking Array's Sorting
//T(C(N) ==O(N)) and S(C(N))==O(1) as it requires const space alloc iteratively
function CheckArrSort(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]<arr[i-1])return false;
    }return true;
}
console.log(CheckArrSort([7,10,20,30,50,70,80]));// (output) true
console.log(CheckArrSort([10,7,30,50,70,20,80]));//false (output)