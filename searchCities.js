var cities = document.getElementById('cities');
var search = document.getElementById('search');

let data = [];

search.addEventListener('keyup', (e)=> {
  const searchStrings = e.target.value.toLowerCase();
  const getFilteredData = data.filter((chars) => {
    return (chars.city.toLowerCase().includes(searchStrings));
  });
  allCities(getFilteredData);
}) 

const getCities = async () => {
    try{
        const response = await fetch('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json');
        data = await response.json();
        allCities(data);
    }
    catch(e){
        console.log(e, 'Error Fetching');
    }
};

const allCities = (element) => {
    const output = element.map((cities) => {
       return `<div class='box'>
        <h2 id='city'>City: ${cities.city}</h2>
        <h4 id='growth'>Growth: ${cities.growth_from_2000_to_2013}</h4>
        <h4 id='latitude'>Latitude: ${cities.latitude}</h4>
        <h4 id='longitude'>Longitude: ${cities.longitude}</h4>
        <h4 id='population'>Population: ${cities.population}</h4>
        <h4 id='rank'>Rank: ${cities.rank}</h4>
        <h4 id='state'>State: ${cities.state}</h4>
        </div>`
    })
    
    cities.innerHTML= output;
}

getCities();

