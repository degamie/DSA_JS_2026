function removeDuplicates(str){
    let out=" ";
    for(let i=0;i<str.length;i++){
        let found=false;
        for(let j=0;i<out.length;j++){
            if(out[j]===str[i]){
                found=true;
                break;
            }
            if(!found){
                out[j]+=str[i];
            }
    }}return out;
}
console.log(removeDuplicates("Progmming,"));