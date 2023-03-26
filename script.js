function calculateMinCost() {

	var inputData=document.querySelector("#rope-lengths").value;
	var inputArr=inputData.split(",");
	

	for (let index = 0 ; index < inputArr.length; index++) {
		inputArr[index]=Number(inputArr[index]);
	}
	
	var cost=0;
	inputArr.sort(function(a,b){return a-b});

	while(inputArr.length>1){
		var newRope=inputArr[0]+inputArr[1];
		cost+=newRope;
		inputArr.splice(0,2);
		inputArr.push(newRope);
		inputArr.sort(function(a,b){return a-b});
	}
	
	document.getElementById('result').textContent=cost;
  
  
}  
