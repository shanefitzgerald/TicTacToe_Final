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

for(i = 0; i < 3; ++i)
        {
            // Left column
            if($scope.board[0+i] != "" &&
                $scope.board[0+i]==$scope.board[3+i] &&
                $scope.board[3+i]== $scope.board[6+i])
            {
                console.log("win - vertical")
            }
            if($scope.board[0+(i*3)] != "" &&
                $scope.board[0]==$scope.board[1] &&
              $scope.board[1]== $scope.board[2])
            {
                console.log("win - horizontal");
            }
            if ($scope.board[0]==$scope.board[8] && 
                $scope.board[8]==$scope.board[4])
            {
                console.log('win - diagonal')
            }
            if ($scope.board[2]==$scope.board[4] &&
                $scope.board[4]==$scope.board[6])
            {
                console.log('win - diagonal')
            }
        }
};