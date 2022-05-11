//Data
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


//Display user name from city London : (In console)
var city_name = usersName.filter(function(cname) {
	return cname.city == "London";
});
console.log(city_name)




//1.
const url1 = 'https://jsonplaceholder.typicode.com/posts';

const answer1 = document.querySelector('.answer1')
async function getAllUsersById1(id, url) {
    const response1 = await fetch(url);
    const data1 = await response1.json();
    const result1 = data1.filter(element => {
        return element.userId === id}).forEach(element => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`${element.title}\n`))
            answer1.appendChild(li);
        });    
}
getAllUsersById1(1, url1)



//2.
//1).Products Name and Price, whose price is greater than 100
const url2 = 'https://fakestoreapi.com/products';


async function getNameAndPrice(url){
    const response2_1 = await fetch(url);
    const data2_1 = await response2_1.json();
    const answer2_1 = document.querySelector('.answer2_1')


    const result2 = data2_1.filter(element => {
        return element.price > 100}).forEach(element => {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(`Product Name:${element.title},\tPrice:${element.price}`));
            answer2_1.appendChild(li);
        })
    
}

getNameAndPrice(url2)





//1). Display all cats name is decending order
const url3 = 'https://api.thecatapi.com/v1/breeds';

async function catsNameInDescending(url) {
    const answer3_1 = document.querySelector('.answer3_1');
    const response3_1 = await fetch(url);
    const data3_1 = await response3_1.json();


    const catsDecending = data3_1.map(element => {
        return element.name
    }).sort().reverse().forEach(element => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(element));
        answer3_1.appendChild(li);
    });

}
catsNameInDescending(url3)



//2). Get the Cats with country-code=US
async function catsFromUS(url, countryCode) {
    const answer3_2 = document.querySelector('.answer3_2');
    const response3_2 = await fetch(url);
    const data3_2 = await response3_2.json();

    //uses filter to get the cats whose country_code is US
    const US_Cats = data3_2.filter(element => {
        return element.country_codes === countryCode;
    }).forEach(element => {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(element.name));
        answer3_2.appendChild(li);
    })
}
catsFromUS(url3, 'US')

