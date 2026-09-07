//WID(7/9/2026)(Sarthak Mittal)(DegamieSign)(Js interview Coding)
function closureCounter() {
    let cnt=0;
    return function(){
        cnt++;
        return cnt;
    }
}
const cnt1=closureCounter();
const cnt2=closureCounter();

console.log(cnt1());//1
console.log(cnt2());//1
console.log(cnt1());//2
console.log(cnt2());//2