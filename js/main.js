/*function change(hash){
	var arr = hash.split('/');
	var html = "helo";

	switch(arr[0]){
		case 'compose':
		html = "<div class=\"input-group\">\
  					<span class=\"input-group-addon\">Кому:</span>\
  					<input type=\"text\" class=\"form-control\" ng-model=\"yourName\">\
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
	//$("#main").html(html);
}*/

function EmailController($scope) {
    $scope.isPopupVisible = false;

    $scope.showPopup = function (email) {
    $scope.isPopupVisible = true;
    $scope.selectedEmail = email;
    console.log($scope.selectedEmail);
};

    $scope.emails = [
       { from: 'John', subject: 'I love angular', date: 'Jan 1' },
       { from: 'Jack', subject: 'Angular and I are just friends', date: 'Feb 15' },
       { from: 'Ember', subject: 'I hate you Angular!', date: 'Dec 8' }
    ];
}

$(document).ready(function(){
	/*var hash = window.location.hash.slice(3);
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
	});*/
});