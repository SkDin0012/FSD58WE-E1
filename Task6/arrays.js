
fetch("https://restcountries.com/v3.1/all").then((r) => r.json()).then((data) => {

    const Aisa = data.filter((country) => country.region === "Asia");
    console.log(Aisa);

    const populationDetails = data.filter((country) => country.population < 2000000);
    console.log(populationDetails);

    Aisa.forEach((country) => {
      console.log("name :", country.name.common);
      console.log("capital:", country.capital);
      console.log("flag :", country.flag);
    });

    const tpopulationdetails=data.reduce((acc,country)=> acc+country.population,0); 
    console.log(tpopulationdetails);

    const usDollor=data.find(country=>{
        return country.currencies && Object.values(country.currencies).includes("USD");
    });

    if(usDollor){
        console.log("ues dollor country:", usDollor.name.common);
    }
    else{
        console.log("no use dollor country");
    }

  }).catch(error=>console.error("the error data",error));