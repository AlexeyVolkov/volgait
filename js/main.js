function change(hash){
	var arr = hash.split('/');
	var html = "helo";

	switch(arr[0]){
		case 'compose':
		html = "<div class=\"input-group\">\
  					<span class=\"input-group-addon\">Кому:</span>\
  					<input type=\"text\" class=\"form-control\">\
				</div>"+
				//SUBJECT
				"<div class=\"input-group\">\
  					<span class=\"input-group-addon\">Тема:</span>\
  					<input type=\"text\" class=\"form-control\">\
				</div>"+
				//TEXT
				"<div class=\"input-group\">\
  					<textarea class=\"form-control\" placeholder=\"Текст письма\"></textarea>\
				</div>";
		break;
	}
	$(".message").html(html);
}

$(document).ready(function(){
	var hash = window.location.hash.slice(3);
	change(hash);
	// on Hash change
	$(window).on('hashchange',function(){ 
    	hash = location.hash.slice(3);
    	change(hash);
	});

	//compose button
	$("#compose").click(function(){
		var compose_hash = "#!/compose"
		window.location.hash = compose_hash;
		change(hash);
	});
});