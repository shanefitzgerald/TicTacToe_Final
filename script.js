function TicTacToeCtrl($scope) {
	$scope.board= [" ", " ", " ", " ", " ", " ", " ", " ", " "];
};

$scope.turn = 0;
$scope.clicker = function(cellIndex) {
	$scope.turn++;
	if ($scope.turn % 2 == 0) {
		$scope.board[cellIndex]='X';
	}
	else 
		$scope.board[cellIndex]='O'
}