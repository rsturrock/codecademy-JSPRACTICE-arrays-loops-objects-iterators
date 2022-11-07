let foodList = [];
let finalFoodItem;

const groceries = arrayOfObjects => {

    if (arrayOfObjects.length > 2) {

    finalFoodItem = arrayOfObjects.pop()
    console.log(finalFoodItem.item)
    console.log(arrayOfObjects)
    arrayOfObjects.forEach(element => {
        foodList.push(element.item);
        console.log(foodList);
    });

    return `${foodList.join(', ')} and ${finalFoodItem.item}`;

    } else if (arrayOfObjects.length === 2) {
        finalFoodItem = arrayOfObjects.pop()
        console.log(finalFoodItem.item)
        console.log(arrayOfObjects)
        arrayOfObjects.forEach(element => {
            foodList.push(element.item);
            console.log(foodList);
        });
        
        return `${foodList.join(', ')} and ${finalFoodItem.item}`;

    } else if (arrayOfObjects.length < 2) {
        return `${arrayOfObjects[0].item}`
    }
} 
