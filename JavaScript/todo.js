console.log("This is your new ToDo app. You can see it by typing todoList and pressing enter. You can add items to it by using addItem(\"...\"). For example addItem(\"Go to gym\"). Delete the last item on the list by using todoList.pop(). Have fun!")

var todoList = [
	"Buy groceries"
]

function addItem(item) {
	todoList.push(item);
}