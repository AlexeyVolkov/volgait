$(document).ready(function(){
	var hash = window.location.hash.slice(2);

	// on Hash change
	$(window).on('hashchange',function(){ 
    	hash = location.hash.slice(2);
    	console.log(hash);
	});

	console.log(hash);
});