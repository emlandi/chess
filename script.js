$(function() {
  renderBoard();
  setBoard();
  playChess();
});

var colors = ["B", "W"];
var pieces = ["P", "H", "B", "R", "K", "Q"];
var cols = ["A", "B", "C", "D", "E", "F", "G", "H"];
var rows = [1, 2, 3, 4, 5, 6, 7, 8];

function renderBoard() {
  $(".chessBoard").after("<tr><td id=deleteBtn>Delete Piece</td></tr>");
  for (var i=8; i>0; i--) {
    $(".chessBoard").append("<tr></tr>");
    for (var j=0; j<8; j++) {
      $(".chessBoard").append("<td id=" + cols[j]+i + ">" + cols[j] + i + "</td>");
    };
  };
};

function setBoard() {
  $('input[type="button"]').click(function(e) {
    var colorVal = color.value;
    var pieceVal = piece.value;
    var positionValC = position.value[0];
    var positionValR = position.value[1];
    // console.log("Place " + colorVal + pieceVal + " on " + positionValC + positionValR);
    $("#" + positionValC + positionValR).append("<p>" + colorVal + pieceVal + "</p>");
  });
}

function playChess(source, dest) {
  var sourceId, sourcePiece, destId, destPiece;

  $("td").mousedown(function() {
    sourceId = $(this).attr("id");
    sourcePiece = $(this).find("p").text();
    // console.log("Selected source " + sourceId + " and piece " + sourcePiece);
  });
  $("td").mouseup(function() {
    destId = $(this).attr("id");
    destPiece = $(this).find("p").text();

    if (sourcePiece == "") {
      alert("There is no piece on " + sourceId + " to move! Please make a new selection.");
    } else {
      $("#" + sourceId).find("p").remove();
      $("#" + destId).find("p").remove();
      if (destId !== "deleteBtn") {
        $("#" + destId).append("<p>" + sourcePiece + "</p>");
      }
      // if (destPiece !== "") {
      //   console.log("Piece " + sourcePiece + " has been moved from " + sourceId + " to " + destId + " and has replaced " + destPiece);
      // } else {
      //   console.log("Piece " + sourcePiece + " has been moved from " + sourceId + " to " + destId + ". No pieces have been replaced.");
      // }
    }
  });
}
