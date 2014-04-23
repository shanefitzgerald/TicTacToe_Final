function TicTacToeCtrl($scope){
    $scope.board = ['','','','','','','','',''];


    $scope.playerMove = function(cellIndex){

        $scope.board[cellIndex]="X";
    }

    $scope.player =1;
    $scope.playedB =['','','','','','','','',''];
    
    $scope.moves = 0;

    $scope.playerTurn = function(cellIndex) {
      if($scope.board[cellIndex]==""){
        console.log($scope.player);  
            if ($scope.player ==1 ){
                $scope.board[cellIndex]="X";
                console.log(cellIndex)
                $scope.playedB[cellIndex] = $scope.board[cellIndex]
                console.log($scope.playedB)
                $scope.moves++
                console.log("you have made " + $scope.moves + " moves")
                $scope.player= 2;
                
            }
            else {
                $scope.board[cellIndex]="O";
                console.log(cellIndex)
                $scope.playedB[cellIndex] = $scope.board[cellIndex]
                console.log($scope.playedB)
                $scope.moves++
                console.log("you have made " + $scope.moves + " moves")
                $scope.player= 1;
            }
        }
        else
            alert("Can't Click Here, Seat taken")

    }


};