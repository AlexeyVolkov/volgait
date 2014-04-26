function EmailController($scope) {
	$scope.Auth = {};
	$scope.activeTab = "inbox";
    $scope.isPopupVisible = false;
    $scope.isComposePopupVisible = false;
    $scope.composeEmail = {};
    $scope.sentEmails = [
    {
        to: 'maria@gmail.com',
        subject: 'Привет',
        date: 'Jan 15',
        body: 'Как твои дела?'
    },
    {
        to: 'maria@gmail.com',
        subject: 'Привет',
        date: 'Jan 15',
        body: 'Как твои дела?'
    },
    {
        to: 'maria@gmail.com',
        subject: 'Привет',
        date: 'Jan 15',
        body: 'Как твои дела?'
    },
    {
        to: 'maria@gmail.com',
        subject: 'Привет',
        date: 'Jan 15',
        body: 'Как твои дела?'
    },
    {
        to: 'maria@gmail.com',
        subject: 'Привет',
        date: 'Jan 15',
        body: 'Как твои дела?'
    }
];
	$scope.spam = [
    {
        from: 'maria@gmail.com',
        subject: 'Привет',
        date: 'Jan 15',
        body: 'Как твои дела?'
    },
    {
        from: 'maria@gmail.com',
        subject: 'Привет',
        date: 'Jan 15',
        body: 'Как твои дела?'
    }
];
	$scope.important = [
    {
        from: 'maria@gmail.com',
        subject: 'Пока',
        date: 'Jan 15',
        body: 'Как твои дела?'
    },
    {
        from: 'maria@gmail.com',
        subject: 'Пароль',
        date: 'Jan 15',
        body: 'Как твои дела?'
    }
];
//log in
	$scope.Authf = function(Auth){
		$scope.Auth = Auth;
		console.log($scope.Auth);
	};
//sending
    $scope.sendEmail = function() {
    $scope.composeEmail.date = new Date();
    $scope.sentEmails.push($scope.composeEmail);
    console.log($scope.sentEmails);
    $scope.isComposePopupVisible = false;
};

	$scope.showComposePopup = function() {
    $scope.composeEmail = {};
    $scope.isComposePopupVisible = true;
};

//viewing
    $scope.showPopup = function (email) {
    $scope.isPopupVisible = true;
    $scope.selectedEmail = email;
};

//Deleting
	$scope.deleteMail = function (email) {
		var answer = confirm("Вы уверены, что хотите удалить это сообщение?");

	};

    $scope.emails = [
    {
        from: 'john@gmail.com',
        subject: 'Сегодня прекрасный день',
        date: 'Jan 1',
        body: 'Всем привет!'
    },
    {
        from: 'john@gmail.com',
        subject: 'Сегодня прекрасный день',
        date: 'Jan 1',
        body: 'Всем привет!'
    },
    {
        from: 'john@gmail.com',
        subject: 'Сегодня прекрасный день',
        date: 'Jan 1',
        body: 'Всем привет!'
    },
    {
        from: 'john@gmail.com',
        subject: 'Сегодня прекрасный день',
        date: 'Jan 1',
        body: 'Всем привет!'
    },
    {
        from: 'john@gmail.com',
        subject: 'Сегодня прекрасный день',
        date: 'Jan 1',
        body: 'Всем привет!'
    },
    {
        from: 'Ember',
        subject: 'I hate you Angular!',
        date: 'Dec 8',
        body: 'wassup dude'
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
}//EmailController

$(document).ready(function(){
	
});