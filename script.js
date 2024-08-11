function generic(){
	var min = Number(document.getElementById("min_number").value);
	var max = Number(document.getElementById("max_number").value);
	var res_input = document.getElementById("result_input");
	var res;
	if (min == max) res = min;
	else if (min > max) res = max;
	else{
		res = Math.floor(Math.random() * (max - min));
		res += min;
		console.log(res);
	}
	res_input.value = res;
}
function copy_result(){
	var res_input = document.getElementById("result_input");
	res_input.select();
	document.execCommand("copy");
    let tg = window.Telegram.WebApp;
    document.write(tg.initDataUnsafe.user.id);
}
