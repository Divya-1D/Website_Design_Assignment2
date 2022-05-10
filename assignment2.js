// Q : 03
const usersName = [
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


//Display user name from city London
var city_name = usersName.filter(function(cname) {
	return cname.city == "London";
});
console.log(city_name)
