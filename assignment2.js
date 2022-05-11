// Q : 03
usersName = [
	{
		"name":"Harry Potter",
 		"city":"London"
	},
	{
		"name":"Don Quixote",
		"city":"Madrid"
	},
	{
		"name":"Joan of Arc",
		"city":"Paris"
	},
	{
		"name":"Rosa Park",
		"city":"Alabama"
	},
	{
		"name":"John",
		"city":" Paris"
	}

]

//Displays all users name
var names = JSON.stringify(usersName, ['name'])
console.log(names)


var div = document.getElementById('Info');
async function getNamesFromApi() {
	const info = usersName;
	console.log(info);
	let ul = document.createElement('ul');
	info.forEach((user) => {
		let li = document.createElement('li');
		li.innerHTML = user.name;
		ul.appendChild(li);
		div.appendChild(ul);

	})
}
getNamesFromApi();


//Display user name from city London
var city_name = usersName.filter(function(cname) {
	return cname.city == "London";
});
console.log(city_name)


//1.

const url = 'https://jsonplaceholder.typicode.com/posts';

//api calls inside async function and await for the response
async function getAllCountriesIdFromApi() {

    // Make api call .. using await
    const response = await fetch(url);

    // converts to json data
    const data1 = await response.json();
    
    console.log("[");
    data1.forEach((country) => {

        if(country.userId=="1"){
        console.log(country);
        }
    })
    console.log("]");
 }
 getAllCountriesIdFromApi();
