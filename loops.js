var countries = [
    "India",
    "USA",
    1892,
    "Russia",
    "Germany",
    "Italy",
    "slovakia"
]

for(let i = 0 ; i < countries.length ; i++){
    if(typeof countries[i] != "string") continue;
    console.log(countries[i]);
}
