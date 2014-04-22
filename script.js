function TicTacToeCtrl($scope) {
	$scope.board= ["", "", " ", " ", " ", " ", " ", " ", " "];
};



// To determine to put an "X" or an "O", X goes first always


//  i=2
//	(i++)
//  While i%2 = 0
//		put an 'X' innerHTML when clicked
//	Else 
//		put an 'O' innerHTML when clicked
// When i = 11 and there is no winner, alert(The game is a tie!)



function WhosTurn() {
	(i=2; i++;)
	if (i%2=0) {
		onclick innerHTML 'X'
	Else
		onclick innerHTML 'O'
	};
};