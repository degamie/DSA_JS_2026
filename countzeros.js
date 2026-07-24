//T(C(N)==O(N**2) and S(C(N)==O(1))as it requires cosnt space alloc quater's Iteration
function moveZeros(arr){
    let indx=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0)arr[indx]=arr[i];
        indx++;
    while(indx<arr.length){
        arr[indx]=0;
        indx++;
    }}return arr;
}
console.log(moveZeros([0,0,1,3,6,7,9]));