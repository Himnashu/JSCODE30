// 


/*
 * Complete the function below.
 * Instead of returning the answer, log the answer to the console.
 * https://jsonmock.hackerrank.com/api/countries/search?name=  
 */

function getCountries(s, p) {
  let count=0;
  const Http = new XMLHttpRequest();
const url=`https://jsonmock.hackerrank.com/api/countries/search?name=${s}`;
Http.open("GET", url);
Http.send();
Http.onreadystatechange = (e) => {
  let countries= JSON.parse(Http.response);
  countries.data.map((country)=>{
      if(country.population> p){
        count++
      }
  })
}
    return count;
}
getCountries('un', 100 );