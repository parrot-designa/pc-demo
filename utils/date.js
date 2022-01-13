//冒泡排序
function bubbleSort(originArr){
    let newArray=[...originArr];
    for(let i=0;i<newArray.length;i++){
        for(let j=i+1;j<newArray.length;j++){
            if(newArray[i]>newArray[j]){
                let temp=newArray[i];
                newArray[i]=newArray[j];
                newArray[j]=temp;
            }
        }
    }
    return newArray;
}

export function complete(number){
    return String(number).padStart(2,0);
}

export function dateUtil(params){
    let date;
    if(!params){
        date=new Date();
    }else{
        date=new Date(params);
    }
    return {
        year:date.getFullYear(),
        month:complete(date.getMonth()+1),
        day:complete(date.getDate())
    }
}

//通过年份生成前后50年
export function generateYear(year){
    const yearFrontArray=bubbleSort(new Array(50).fill('').map((item,index)=>Number(year)-(index+1)))
    const yearBehindArray=new Array(50).fill('').map((item,index)=>Number(year)+index)
    const yearArray=yearFrontArray.concat([year]).concat(yearBehindArray);
    return yearArray.map(item=>({name:item,value:item}))
}