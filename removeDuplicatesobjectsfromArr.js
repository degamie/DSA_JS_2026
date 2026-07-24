//WID(24/7/2026)(Sarthak Mittal)(DegamieSign)(DSA)
function removeduplicateObjfromarr(arr){
    let out=[];let indx=0;
    for(let i=0;i<arr.length;i++){
            for(let j=0;i<out.length;j++){
                let isDuplic=false;
                if(user[i].id===out[j].id || user[i].name ===out[j].name || user[i].age === out[j].age ){
                    isDuplic=true;break;
                }
                  if(!isDuplic){out[i]=arr[j];i++;}
    }
    return out;
}
}
    // }return isDuplic+out;


const user=[
    {id:"1",name:"Sarthak Mittal",age:"24"},
    {id:"2",name:"A",age:"25"},
    {id:"3",name:"B",age:"45"}
    
];
console.log(removeduplicateObjfromarr(user));