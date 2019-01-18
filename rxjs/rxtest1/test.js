var courseLists = [{
    "name": "My Courses",
    "courses": [{
      "id": 511019,
      "title": "React for Beginners",
      "covers": [{
        width: 150,
        height: 200,
        url: "http://placeimg.com/150/200/tech"
      }, {
        width: 200,
        height: 200,
        url: "http://placeimg.com/200/200/tech"
      }, {
        width: 300,
        height: 200,
        url: "http://placeimg.com/300/200/tech"
      }],
      "tags": [{
        id: 1,
        name: "JavaScript"
      }],
      "rating": 5
    }, {
      "id": 511020,
      "title": "Front-End automat workflow",
      "covers": [{
        width: 150,
        height: 200,
        url: "http://placeimg.com/150/200/arch"
      }, {
        width: 200,
        height: 200,
        url: "http://placeimg.com/200/200/arch"
      }, {
        width: 300,
        height: 200,
        url: "http://placeimg.com/300/200/arch"
      }],
      "tags": [{
        "id": 2,
        "name": "gulp"
      }, {
        "id": 3,
        "name": "webpack"
      }],
      "rating": 5
    }]
  }, {
    "name": "New Release",
    "courses": [{
      "id": 511022,
      "title": "Vue2 for Beginners",
      "covers": [{
        width: 150,
        height: 200,
        url: "http://placeimg.com/150/200/nature"
      }, {
        width: 200,
        height: 200,
        url: "http://placeimg.com/200/200/nature"
      }, {
        width: 300,
        height: 200,
        url: "http://placeimg.com/300/200/nature"
      }],
      "tags": [{
        id: 1,
        name: "JavaScript"
      }],
      "rating": 5
    }, {
      "id": 511023,
      "title": "Angular2 for Beginners",
      "covers": [{
        width: 150,
        height: 200,
        url: "http://placeimg.com/150/200/people"
      }, {
        width: 200,
        height: 200,
        url: "http://placeimg.com/200/200/people"
      }, {
        width: 300,
        height: 200,
        url: "http://placeimg.com/300/200/people"
      }],
      "tags": [{
        id: 1,
        name: "JavaScript"
      }],
      "rating": 5
    }]
  }];
  
  /* 
  var result = courseList
  不得直接使用索引 covers[0]，請用 concatAll, map, filter, forEach 完成
  result 結果為 [
      {
        id: 511019,
        title: "React for Beginners",
        cover: "http://placeimg.com/150/200/tech"
      }, {
        id: 511020,
        title: "Front-End automat workflow",
        cover: "http://placeimg.com/150/200/arch"
      }, {
        id: 511022,
        title: "Vue2 for Beginners",
        cover: "http://placeimg.com/150/200/nature"
      }, {
        id: 511023,
        title: "Angular2 for Beginners",
        cover: "http://placeimg.com/150/200/people"
      },
   ]
  */

 Array.prototype.concatAll = function() {
    var result = [];
  // 用 apply 完成
//   console.log(result.push, [].push, Array().push);
  this.forEach((array) => {
    // [].push.apply(result, array);
    result.push(...array);
  });
  
  return result;
}

Array.prototype.map = function(callback) {
    let result = [];
    this.forEach((ele, idx) => {
        result.push(callback(ele, idx));
    });
    return result;
}

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

console.log(courseLists.map((ele, idx) => {
    return ele.courses;
}).concatAll().map((ele, idx) => {
    var _arr = ele.covers.filter((ele, idx) => {
        return !idx;
    })
    var _link = '';
    _arr.map((ele, idx) => {
        _link = ele.url
        return ele
    });
    return {
        id: ele.id,
        title: ele.title,
        covers: _link 
    }
}))


console.log(courseLists
    .map(list => list.courses
        .map(course => course.covers
              .filter(cover => cover.width === 150)
              .map(item => ({
                id: course.id,
                title: course.title,
                cover: item.url
              }))
).concatAll()
).concatAll())