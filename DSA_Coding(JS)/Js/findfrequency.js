//T((C(N))==O(N**2) and S(C(N))==O(1) as it requires const space space alloc iteratively 
function findFrequency(arr) {//findFrequency() method declare
    for (let i = 0; i < arr.length; i++) {//arr's length wise iteration
        let alreadycnt = false;//alreadycnted initializing for arr's counted element's processing
        for (let k = 0; k < i; k++) {//arr's next initial val iteration
            if (arr[i] === arr[k]) {//checking arr's initial  matched indx found
                alreadycnt = true;//assining alreadycnted as true
                break;//navigating to next element
            }
        }
        if (alreadycnt) continue;//if arr's element has been already counted ,move to next element
        let cnt = 0;//initializing count
        for (let j = i; j < arr.length; j++) {//arr's next element's iteration
            if (arr[j] === arr[i]) {//checking arr's current and next element 
                cnt++;//incr. count
            }
        }
        console.log(arr[i] + " -> " + cnt);//Printing arr's indx val and its total count
    }
}
console.log(findFrequency([4,4,4,2,2,7,7,7,8,1]));//printing arr's frequency