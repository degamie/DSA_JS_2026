//T(C(N) =O(N) and S(C(N))=O(1) as it requires const space alloc iteratively
function countWords(str){//countWords() method declare
    cnt=1;//cnt val declare
    for(let i=0;i<str.length;i++){//str's length  iteration
        if(str[i]===" ")cnt++;//incr cnt to created Space b/w Words
    }return cnt;//Printing count val
}
console.log(countWords("Java Script 2026"));//printing cnt
//Output =>3
