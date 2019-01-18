Array.prototype.map = function(callback) {
    let result = [];
    this.forEach((ele, idx) => {
        result.push(callback(ele, idx));
    });
    return result;
}


var newCourseList = [
	{
		"id": 511021,
		"title": "React for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511022,
		"title": "Vue2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511023,
		"title": "Angular2 for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 5
	},
	{
		"id": 511024,
		"title": "Webpack for Beginners",
		"coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
		"rating": 4
	}
], idAndTitle = [];

idAndTitle = newCourseList.map(item => {
    return { title: item.title, id: item.id }
});

console.log(idAndTitle);