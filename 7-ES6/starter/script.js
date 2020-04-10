function Person(name) {
    this.name = name;
}

// ES5
Person.prototype.myFriends5 = function(friends) {
    
    var arr = friends.map(function(el) {
       return this.name + ' is friends with ' + el; 
    }.bind(this));
    
    console.log(arr);
}

var friends = ['Bob', 'Jane', 'Mark'];
new Person('John').myFriends5(friends);

// Inside of myFriends5 this would refer to this object of the newly created instance of Person that is called myFriends5. However,
// inside the callback function this would refer to the global object window

// ES6
Person.prototype.myFriends6 = function(friends) {
    var arr = friends.map(el => `${this.name} is friends with ${el}`);
    console.log(arr);
}

new Person('Mike').myFriends6(friends);

// Inside this arrow function, this is permanently bound to the lexical context of where it is written. It shares the this from its
// surroundings. So inside myFriends6 this is set to Mike and so the arrow function (the callback function), this will be set to Mike
// even if you bind or call myFriends6 with any other value. It is a permanent binding when it is written!