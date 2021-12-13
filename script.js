let billInput = document.getElementsByClassName("bill-input")
let billEl = document.getElementById("bill");
let btnTip = document.querySelectorAll(".btn-tip");
let customInput = document.getElementById("input-custom");
let tipAmountTotal = document.getElementById('tip-amount-total');
let totalAmountPerPerson = document.getElementById("total-amount-total");
let tipSelectBtn = document.getElementsByClassName("tip-select-btns");
let numberPeople = document.getElementById("input-number-people");
let errorMessage = document.getElementById("error-msg");
let resetBtn = document.getElementById("reset");

let bill = 0;
let tip = 0;
let persons = 0;



billEl.addEventListener("input", (e) =>{
	bill = Number(billEl.value);
	resetBtn.style.opacity = "1";
	document.getElementById("input-number-people").style.border="1px solid red";
	errorMessage.style.display="block";
	calculate();
})


btnTip.forEach((tipButton) => {
	tipButton.addEventListener("click", (event) => {
		tip = Number(tipButton.value);
		let target = event.currentTarget;
		btnTip.forEach(item => {
			if(item !== tipButton){
				item.classList.remove("active-btn")
			}
		});

		tipButton.classList.toggle("active-btn");

		if(target.classList.contains("active-btn")){
			customInput.disabled = true;
			customInput.value = "";
			calculate();
		}
		else {
			customInput.disabled = false;
		}
	})
})

customInput.addEventListener("input", (event) => {

	customInput.style.backgroundColor = "white";
	tip = Number(customInput.value);
	calculate();
})


numberPeople.addEventListener("input", (e) => {
	persons = Number(numberPeople.value);

	if(persons <=0) {
		errorMessage.style.display="block";
	}
	else {
		errorMessage.style.display="none";
		document.getElementById("input-number-people").style.border="";
		calculate();
	}
})

resetBtn.addEventListener("click", function(){

		billEl.value="";
		customInput.value="";
		customInput.disabled = false;
		numberPeople.value = "";

		btnTip.forEach(tipButton =>{
			tipButton.classList.remove("active-btn");
		})
				
		resetBtn.style.opacity = "0";
		document.getElementById("input-number-people").style.border="";
		
		tipAmountTotal.textContent = "$0.00";
		totalAmountPerPerson.textContent = "$0.00";
		errorMessage.style.display = "none";
		
	})

function calculate() {
	if(bill >= 0 && persons >= 1){
		let amountTip = (bill * tip) / 100;
		
		let totalAmount = amountTip + bill;
		

		tipAmountTotal.textContent = "$ "+ (amountTip/persons).toFixed(2);
		totalAmountPerPerson.textContent = "$ "+(totalAmount/persons).toFixed(2);

	}
}









	



