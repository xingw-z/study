var user = {
    id: 888,
    name: 'JerryHong',
    courseLists: [{
      "name": "My Courses",
      "courses": [{
        "id": 511018,
        "title": "React for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "tags": [{ id: 1, name: "JavaScript" }],
        "rating": 5
      }, {
        "id": 511019,
        "title": "React for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "tags": [{ id: 1, name: "JavaScript" }],
        "rating": 5
      }, {
        "id": 511020,
        "title": "Front-End automat workflow",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "tags": [{ "id": 2, "name": "gulp" }, { "id": 3, "name": "webpack" }],
        "rating": 4
      }]
    }, {
      "name": "New Release",
      "courses": [{
        "id": 511022,
        "title": "Vue2 for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "tags": [{ id: 1, name: "JavaScript" }],
        "rating": 5
      }, {
        "id": 511023,
        "title": "Angular2 for Beginners",
        "coverPng": "https://res.cloudinary.com/dohtkyi84/image/upload/v1481226146/react-cover.png",
        "tags": [{ id: 1, name: "JavaScript" }],
        "rating": 4
      }]
    }]
  };
  
  var allCourseIds = [];


Array.prototype.concatAll = function() {
    var result = [];
  // 用 apply 完成
  console.log(result.push, [].push, Array().push);
  this.forEach((array) => {
    // [].push.apply(result, array);
    result.push(...array);
  });
  
  return result;
}
/** 这个返回的就是 数组里面有数组 */
allCourseIds = user.courseLists.map(item => {
    return item.courses.filter(course => course.rating === 5);
})
/** 这个返回的就是数组里面有对象 */
var allCourseIds2 = user.courseLists.map(item => {
    return item.courses.filter(course => course.rating === 5);
}).concatAll()


console.log(allCourseIds, allCourseIds2, allCourseIds == allCourseIds2)