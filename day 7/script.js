//A)GET ALL COUNTRIES FROM ASIA CONTINENT/REGION USING FILTER
var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all',true);
req.send();
req.onload= function(){
    var result = JSON.parse(req.response);
    console.log(result)
    const asia = result.filter((element)=>{
        if(element.region === 'Asia'){
            return element.name;
        }
    })
    console.log(asia);
}
//B) GET ALL THE COUNTRIES WITH POPULATION LESS THAN 2LACS USING FILTER
var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all',true);
req.send();
req.onload=function(){
    var countryData = JSON.parse(req.response);
    const population = countryData.filter((element)=>{
        if(element.population<200000){
            return element.name;
        }
    })
    console.log(population)
}
//GET THE FOLLOWING DETAILS NAME,CAPITAL,FLAG USING FOREACH FUNCTION
var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all',true);
req.send();
req.onload=function(){
    var countryData = JSON.parse(req.response);
    countryData.forEach(element => {
        console.log(element.name,element.capital,element.flag)
    });
}
//PRINT THE TOTAL POPULATION OF COUNTRIES USING REDUCE FUNCTION
var req=new XMLHttpRequest();
req.open('GET','https://restcountries.com/v3.1/all',true);
req.send();
req.onload=function(){
    var countryData = JSON.parse(req.response);
    const population = countryData.reduce((acc,element)=>{
        return acc+element.population;
    },0)
    console.log(population)
}
//PRINT THE COUNTRY THAT USES US DOLLARS AS CURRANCY
var req=new XMLHttpRequest();
req.open('Get','https://restcountries.com/v3.1/all',true);
req.send();
req.onload=function(){
    var countryData = JSON.parse(req.response);
    var cur=[];
    for(i=0;i<data.length;i++){
        if(data[i]=currencies[0].code=='USD'){
            console.log('name:',data[i].name,"==>",data[i].currencies[0].code)
        }
    }
}
