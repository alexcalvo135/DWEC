window.onload=function (){

	var cont=0;
	var vector = new Array();
	do{
		

		var nums = prompt("Introduce una secuencia de notas: ");
		nums = parseInt(nums);
		vector[cont]=nums;
		cont++;
	
	}while(nums != -1)
	

	//for(i=0;i<vector.length;i++){
		var c3 = document.getElementById("c3");
		console.log(c3);
		c3.innerHTML = `${vector[i]},`;
	
		if(vector == 10){

				var c4 = document.getElementById("c4");
				console.log(c4);
				c4.innerHTML =`SI`;
		} else{
				var c4 = document.getElementById("c4");
				console.log(c4);
				c4.innerHTML =`NO`;
		}
		
		
}

