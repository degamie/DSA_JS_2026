//WID(3/8/2026(Sarthak Mittal(DegamieSign(js_ds_arr_streaming_cal)))
const arr=[1,3,5,7,9,10,12,14,16,17,19,20,21,24,26,28];
console.log(arr.filter(x=>x%2==0));
console.log(arr.flatMap(x=>x%2?x*x:[]));
console.log(arr.map(x=>x*x));