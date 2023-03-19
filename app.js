// const test = require("./4-name");
// console.log(test);
// const twoName = require("./6-test")
// const sayHi = require("./5-utils");
// require("./7-mind-grenade");
// sayHi("test");
// sayHi(test.harry);
// sayHi(test.karan);
// console.log(twoName.items);

//////////////////////////////////////////////////////
// const os = require("os");

// const user = os.userInfo();
// const getUp = os.uptime();

// console.log(getUp);

//////////////////////////////////////////////////////////
const  _ = require('lodash');

const items = [1,[2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);


