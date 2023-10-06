
let allcost = document.querySelectorAll("#allcost input");
let count = document.querySelector("#count");
let depart = document.querySelector("#depart");
let cbtn = document.querySelectorAll(".btn");
let tbody = document.querySelector("#tbody");
let allspan = document.querySelectorAll(".invalid");
let allspaninvaled = document.querySelectorAll(".invalid-number");
let numbinputt =document.querySelectorAll(".numberin"); 
let allinput = document.querySelectorAll("input");
let mood = "creat";
let indexid ;

let products =[];


if(localStorage.products!= null){
    products = JSON.parse(localStorage.products);
}
else{
    products =[];   
}

let createproduct =()=>{
    let newproduct0 ={
        day: allcost[0].value ,
        MakramVOY1am : allcost[1].value ,
        MakramVOY1bm : allcost[2].value ,
        MakramVOY2am: allcost[3].value ,
        MakramVOY2bm: allcost[4].value ,
        FontanaVOY3am: allcost[5].value ,
        FontanaVOY3bm: allcost[6].value ,
        nots: allcost[7].value ,
        Hollyday: allcost[8].value 
    }
    let newproduct1 ={
        day: allcost[9].value ,
        MakramVOY1am: allcost[10].value ,
        MakramVOY1bm : allcost[11].value ,
        MakramVOY2am: allcost[12].value ,
        MakramVOY2bm: allcost[13].value ,
        FontanaVOY3am: allcost[14].value ,
        FontanaVOY3bm: allcost[15].value ,
        nots: allcost[16].value ,
        Hollyday: allcost[17].value 
    }
    let newproduct2={
        day: allcost[18].value ,
        MakramVOY1am: allcost[19].value ,
        MakramVOY1bm : allcost[20].value ,
        MakramVOY2am: allcost[21].value ,
        MakramVOY2bm: allcost[22].value ,
        FontanaVOY3am: allcost[23].value ,
        FontanaVOY3bm: allcost[24].value ,
        nots: allcost[25].value ,
        Hollyday: allcost[26].value 
    }
    let newproduct3={
        day: allcost[27].value ,
        MakramVOY1am: allcost[28].value ,
        MakramVOY1bm : allcost[29].value ,
        MakramVOY2am: allcost[30].value ,
        MakramVOY2bm: allcost[31].value ,
        FontanaVOY3am: allcost[32].value ,
        FontanaVOY3bm: allcost[33].value ,
        nots: allcost[34].value ,
        Hollyday: allcost[35].value 
    }
    let newproduct4 ={
        day: allcost[36].value ,
        MakramVOY1am: allcost[37].value ,
        MakramVOY1bm : allcost[38].value ,
        MakramVOY2am: allcost[39].value ,
        MakramVOY2bm: allcost[40].value ,
        FontanaVOY3am: allcost[41].value ,
        FontanaVOY3bm: allcost[42].value ,
        nots: allcost[43].value ,
        Hollyday: allcost[44].value 
    }
    let newproduct5 ={
        day: allcost[45].value ,
        MakramVOY1am: allcost[46].value ,
        MakramVOY1bm : allcost[47].value ,
        MakramVOY2am: allcost[48].value ,
        MakramVOY2bm: allcost[49].value ,
        FontanaVOY3am: allcost[50].value ,
        FontanaVOY3bm: allcost[51].value ,
        nots: allcost[52].value ,
        Hollyday: allcost[53].value 
    }
    let gap ={
        day: "الجمعه" ,
        MakramVOY1am: "اجازه" ,
        MakramVOY1bm : "اجازه" ,
        MakramVOY2am: "اجازه" ,
        MakramVOY2bm: "اجازه" ,
        FontanaVOY3am: "اجازه" ,
        FontanaVOY3bm: "اجازه" ,
        nots: "اجازه" ,
        Hollyday: "اجازه" 
    }
  
    products.push(newproduct0,newproduct1,newproduct2,newproduct3,newproduct4,newproduct5,gap);0
    clearinput();
    renderData();
    localStorage.setItem("products",JSON.stringify(products));
};

let clearinput = () => {
    allcost[1].value ="";
    allcost[2].value ="";
    allcost[3].value ="";
    allcost[4].value ="";
    allcost[5].value ="";
    allcost[6].value ="";
    allcost[7].value ="";
    allcost[8].value ="";
    allcost[10].value ="";
    allcost[11].value ="";
    allcost[12].value ="";
    allcost[13].value ="";
    allcost[14].value ="";
    allcost[15].value ="";
    allcost[16].value ="";
    allcost[17].value ="";
    allcost[19].value ="";
    allcost[20].value ="";
    allcost[21].value ="";
    allcost[22].value ="";
    allcost[23].value ="";
    allcost[24].value ="";
    allcost[25].value ="";
    allcost[26].value ="";
    allcost[28].value ="";
    allcost[29].value ="";
    allcost[30].value ="";
    allcost[31].value ="";
    allcost[32].value ="";
    allcost[33].value ="";
    allcost[34].value ="";
    allcost[35].value ="";
    allcost[37].value ="";
    allcost[38].value ="";
    allcost[39].value ="";
    allcost[40].value ="";
    allcost[41].value ="";
    allcost[42].value ="";
    allcost[43].value ="";
    allcost[44].value ="";
    allcost[46].value ="";
    allcost[47].value ="";
    allcost[48].value ="";
    allcost[49].value ="";
    allcost[50].value ="";
    allcost[51].value ="";
    allcost[52].value ="";
    allcost[53].value ="";
   
}

let renderData = ()=>{
    let table= "" ;
    for(let i=0; i < products.length ; i++){
        table += `
        <tr>
        <td class="th9">${products[i].day} </td>
       <td class="th1">${products[i].MakramVOY1am} </td>
       <td class="th1">${products[i].MakramVOY1bm} </td>
       <td class="th2">${products[i].MakramVOY2am} </td>
       <td class="th2">${products[i].MakramVOY2bm} </td>
       <td class="th3">${products[i].FontanaVOY3am} </td>
       <td class="th4">${products[i].FontanaVOY3bm} </td>
       <td class="th5">${products[i].nots} </td>
       <td class="th6">${products[i].Hollyday} </td>
       </tr>
    `}
    
    tbody.innerHTML =  table;
    
};

renderData();

    
 let updatetitem = (i)=>{






 }
cbtn[0].addEventListener('click', createproduct);


// clear table
let cleardata =()=>{
        localStorage.clear();
        products.splice(0);
        renderData();
}
cbtn[1].addEventListener('click', cleardata);






