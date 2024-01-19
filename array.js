var games = ["Mobile Legend", "Valorant", "PUBG", "Cooking Mama"];

console.log(games); 

games.push("valorant");
console.log(games); 

var removedGames = games.pop();
console.log(removedGames); 
console.log(games); 


games.unshift("cooking mama");
console.log(games); 

var removedFirstGames = games.shift();
console.log(removedFirstGames); 
console.log(games); 

games.sort();
console.log(games); 

var slicedGames = games.slice(1, 4);
console.log(slicedGames); 