const rollSheep = () => {
	const button = document.querySelector("input[name='sheepButton']");
	const sheep = document.querySelector("img.smiley")
	sheep.classList.toggle("gosmiley")
}

document.querySelector("input[name='sheepButton']").addEventListener("click", rollSheep);