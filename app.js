const input = document.getElementsByTagName('input')[0];
const addBtn = document.getElementsByTagName('button')[0];
const ol=document.getElementsByTagName('ol')[0];
addBtn.addEventListener("click",(o)=>{
	let li = document.createElement('li')
	console.log(li)
	li.innerText = input.value;
	ol.append(li);
	input.value="";
	let delBtn = document.createElement('button')
	delBtn.innerHTML = '<i class="bi bi-trash3"></i>';
	li.append(delBtn);
	let checkBtn = document.createElement('button')
	checkBtn.innerHTML = '<i class="bi bi-check2-circle"></i>';
	li.append(checkBtn)
	delBtn.className = "del";
	saveData
})
ol.addEventListener("click",(o)=>{
	console.log(o.target)
	let targetEl = o.target;
	let parentEl = (targetEl.parentElement).parentElement;
	if(o.target.className=="bi bi-trash3"){
		parentEl.remove();
	}else if(o.target.className=="bi bi-check2-circle"){
		parentEl.classList.toggle("checked")
	}
	saveData();
});
localStorage.setItem("ner","Dashka's app")

function saveData(){
	localStorage.setItem("Dashka's app" ,ol.innerHTML)
}
function getData(){
	ol.innerHTML = localStorage.getItem("Dashka's app");
}
getData();