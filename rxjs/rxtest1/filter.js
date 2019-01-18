Array.prototype.filter = function(callback) {
    let result = [];
    this.forEach((ele, idx) => {
        let _item = callback(ele, idx)
        if (_item) {
            result.push(ele)
        }
    });
    return result
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


idAndTitle = newCourseList.filter(item => {
    return item.rating > 4
})

console.log(idAndTitle)