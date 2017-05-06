var ajax=(function(){
	function makeRequest(url,success)
	{
		var ajaxRequest = new XMLHttpRequest(); 
		var handleResponse=function()
		{
			if(ajaxRequest.readyState===4)
			{
				if(ajaxRequest.status===200)
				{
			    	var data=JSON.parse(ajaxRequest.responseText);
			    	success(data);
				}
			}
		}
		ajaxRequest.addEventListener("readystatechange",handleResponse,false); 
		ajaxRequest.open('GET', url, true);
		ajaxRequest.send();
	}
	return{
		makeRequest:makeRequest
	}
})()