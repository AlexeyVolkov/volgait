function change(hash){
	var arr = hash.split('/');
	var html = "helo";

	/*switch(arr[0]){
		case 'compose':
			$("#compose").fadeIn();
		break;
	}*/
}

function EmailController($scope) {
    $scope.isPopupVisible = false;
    $scope.isComposePopupVisible = false;

    $scope.showComposePopup = function(){
    	$scope.isComposePopupVisible = true;
    };

    $scope.showPopup = function (email) {
    $scope.isPopupVisible = true;
    $scope.selectedEmail = email;
};

    $scope.emails = [
    {
        from: 'John',
        subject: 'I love angular',
        date: 'Jan 1',
        body: 'hello world!'
    },
    {
        from: 'Jack',
        subject: 'Angular and I are just friends',
        date: 'Feb 15',
        body: 'just kidding'
    },
    {
        from: 'Ember',
        subject: 'I hate you Angular!',
        date: 'Dec 8',
        body: 'wassup dude'
    }
];
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