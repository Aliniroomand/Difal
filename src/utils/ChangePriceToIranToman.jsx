
const formatter=new Intl.NumberFormat("fa-IR",{currency:"IRT"})


const ChangePriceToToman=(price)=>{
    return formatter.format(price);
}



export {ChangePriceToToman}