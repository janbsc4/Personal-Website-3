const rollSheep = () => {
	document.querySelector("img.smiley").classList.toggle("gosmiley")
}

document.querySelector("input[name='sheepButton']").addEventListener("click", rollSheep);