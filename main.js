$(() => {
	let displayValue;
	let backgroundValue;
	//演算子の識別用
	let operator;
	let operators = ["plus", "minus", "multiply", "devide"];
	let operatorSymbols = ["+", "-", "*", "/"];

	//数字の入力
	$(".numSwitch").click(function ()  {
		inputValue = Number($(this).prop("id"));
		if (displayValue == null){
			displayValue = inputValue;
			displayNumber(displayValue);
		}else{
			displayValue = displayValue*10 + inputValue;
			displayNumber(displayValue);
		}
	});

	//オペレーター押下
	$(".operator").click(function () {
		clickedOperator = $(this).prop("id");
		operatorClick(clickedOperator);
	});

	// イコール押下
	$(".equal").click(() => {
		calculate(operator);
		displayNumber(displayValue);
		operator = null;
		backgroundValue	= displayValue;
		displayValue = null;
		$(".operator").css('background-color', 'white');
	});

	// オールクリア押下
	$(".allClear").click(() => {
		displayValue = null;
		backgroundValue = null;
		operator = null;
		$(".display").html("");
		$(".operator").css('background-color', 'white');
	});


	function displayNumber(displayValue) {
		$(".display").html(displayValue);
	}
	//足し算
	function sumUp(){
		displayValue += backgroundValue;
	}
	//引き算
	function subtract() {
		displayValue = backgroundValue - displayValue;
	}
	//掛け算
	function multiply() {
		displayValue *= backgroundValue;
	}
	//割り算
	function devide() {
		displayValue = backgroundValue / displayValue;
	}
	//計算機
	function calculate(operator) {
		if(backgroundValue > 0)
		if(operator == 0){
			sumUp();
		}else if(operator == 1){
			subtract();
		}else if(operator == 2){
			multiply();
		}else if(operator == 3){
			devide();
		}else{
			//一旦、エラーメッセージ？
			console.log("計算できません。")
		}
	}
	//operator押下
	function operatorClick(clickedOperator) {
		operatorIndex = operators.indexOf(clickedOperator);
		if(operator != null){
			calculate(operator);
			displayNumber(displayValue); 
			operator = operatorIndex;
			backgroundValue = displayValue;
			displayValue = null;
			markActiveOperator(operatorIndex);
		}else{
			operator = operatorIndex;
			backgroundValue	= displayValue;
			displayValue = null;
			$(".display").html(operatorSymbols[operatorIndex]);
		}
	}

	//適応中のオペレーターをマーク
	function markActiveOperator(operatorIndex) {
		operatorBox = "#" + operators[operatorIndex];
		$(".operator").css('background-color', 'white');
		$(operatorBox).css('background-color', 'gray');
	}
});