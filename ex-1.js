let isOver18 = true;
let hasCriminalBlacklist = true;
let isAllow = true;

// Start coding here
let age = 18;

isOver18 = age >= 18;
hasCriminalBlacklist = false;

isAllow = isOver18 && !hasCriminalBlacklist;

console.log(isAllow);
