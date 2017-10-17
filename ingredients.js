var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

var count = 0;
while(count < ingredients.length){
	console.log(ingredients[count]);
	count ++;
}


for(var count = 0; count< ingredients.length; count ++){
	console.log(ingredients[count]);
}


for (var count = ingredients.length -1; count>=0; count -- ){
	console.log(ingredients[count]);
}