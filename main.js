// define Ui varible

var productsArr =[],globalIndex,
search = document.getElementById('search'),
searchBtn=document.getElementById('searchBtn'),
productName = document.getElementById('name'),
ProductPrice = document.getElementById('price'),
ProductDesc = document.getElementById('textarea1'),
ProductCompany = document.getElementById('company'),
submit = document.getElementById('mybtn'),
cont = document.getElementById('cont');

var toggle=false ;


var getData = localStorage.getItem("products");
if (localStorage.length !== 0)
productsArr=JSON.parse(getData);
show();

// main func
submit.onclick = function(){
    
    //add();

    if (toggle == false){
        add();
    }else{
        updateData();
    }


}

// add function 
function add(){
    var product = {
        name : productName.value ,
        description : ProductDesc.value ,
        price : ProductPrice.value , 
        company : ProductCompany.value
    }


    productsArr.push(product);

    var temp = JSON.stringify(productsArr);

    localStorage.setItem("products",temp);



    show();
}


// show function 
function show(){

    var txt = '';
    for (var i = 0 ; i < productsArr.length ; i++){

        txt += `<div class=" col s4 " > <div class="mybox center-align" >
        <h4> `+ productsArr[i].name +`</h4>
        <h4> `+ productsArr[i].description +`</h4>
        <h4> `+ productsArr[i].price +`</h4>
        <h4> `+ productsArr[i].company +`</h4>
        <button onclick="del(` +i+`)" class="btn"> Delete </button>
        <button onclick="returns(` +i+`)" class="btn"> Update </button>
        </div> </div> `
    }
    cont.innerHTML=txt;

    // if ( localStorage.length === 0 ){
    //             cont.innerHTML=txt;

    // }else{ 

    //     cont.innerHTML=txt;
    // }
}

// delete func
function del(index){
    if (confirm('Are you sure ?'))
        productsArr.splice(index,1);

     localStorage.setItem("products",JSON.stringify(productsArr))   

    show();
}

// update func

function returns(index){
    productName.value=productsArr[index].name;
    ProductDesc.value=productsArr[index].description;
    ProductPrice.value=productsArr[index].price;
    ProductCompany.value=productsArr[index].company;

    toggle=true;

   
    globalIndex = index;
    submit.value='update';
    
}
function updateData(){
    productsArr[globalIndex].name=productName.value;
    productsArr[globalIndex].description=ProductDesc.value;
    productsArr[globalIndex].price=ProductPrice.value;
    productsArr[globalIndex].company=ProductCompany.value;
    show();
	
	var temp = JSON.stringify(productsArr);

    localStorage.setItem("products",temp);
	
    toggle=false;
    submit.value='Submit';
}


search.onkeyup = function(){  
    var valueInput =search.value.toLowerCase();

if (valueInput==''){
    console.log('Enter value')
    show();
}else{
    var searchArr =[];   

   
    for (var i = 0 ; i < productsArr.length ; i++){

        var item = productsArr[i].name.toLowerCase();


        if(item.indexOf(valueInput) != -1 ){
                var x =productsArr[i]                   
                 //  console.log(item)
                  // console.log(x)
                   
                   searchArr.push(x)
                   console.log(searchArr.length)
                   if( searchArr.length != 0 ){
                    var txt = '';
                    for (var k = 0 ; k < searchArr.length ; k++){
                
                        txt += `<div class=" col s4 " > <div class="mybox center-align" >
                        <h4> `+ searchArr[k].name +`</h4>
                        <h4> `+ searchArr[k].description +`</h4>
                        <h4> `+ searchArr[k].price +`</h4>
                        <h4> `+ searchArr[k].company +`</h4>
                        <button onclick="del(` +k+`)" class="btn"> Delete </button>
                        <button onclick="returns(` +k+`)" class="btn"> Update </button>
                        </div> </div> `
 
                        cont.innerHTML=txt;
                    }

                  
                    }                  
                   
        }else {

            show()                   // leh msh btshta8l !!
            console.log("searchArr")
} 
       


    }
   //jk show();      //  lma bagy ash8l de 3lashan ams7 elkym el8alt el search by2of kolo 
    console.log(searchArr)
    }


// leh kol ma a3ml backSpace tt7sb 7rka w ezay asl7haa
}


    
  
    
    
    
    
    
    
    
    
    
    
    
    
    
    
  