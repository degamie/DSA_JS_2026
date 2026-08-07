//WID(7/8/2026)(Sarthak Mittal)
function longestSusbString(){
    let map=new Map();
    let left=0;let maxlength=0;
    for(let i=0;i<   right.length;i++){
        if(map.has(char) && map.get(char)>=left){
            left=map.get(char);
        }
        map.set(char)+1;
        maxlength+=Math.max(max,right-left)+1;
    }return maxlength;
}