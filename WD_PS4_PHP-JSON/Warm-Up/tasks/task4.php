<h1>Task4</h1>
<p>
  The user enters the dimensions of the chessboard (in the format of ‘8x8’).
  Display (how to draw) a chessboard. <br>
  Max.size (20x20)
</p>
<form action="" method="post">
  <label for="widthOfBoard">Enter the width of the board: </label>
  <input type="number" value="" id="widthOfBoard" name="widthOfBoard">
  <label for="heightOfBoard">Enter the height of the board: </label>
  <input type="number" value="" id="heightOfBoard" name="heightOfBoard">
  <input type="submit" name="createChessBoard" value="Create">
</form>

<?php
if (isset($_POST["createChessBoard"])) {
    $width = $_POST["widthOfBoard"];
    $height = $_POST["heightOfBoard"];
    echo "<table cellspacing=0 cellpadding=0 border=1%>";
    for ($row = 1; $row <= $height; $row++) {
        echo "<tr>";
        for ($col = 1; $col <= $width; $col++) {
            $total = $row + $col;
            $cell = $total % 2 == 0 ? "<td height=30vh width=30vh bgcolor=#FFFFFF></td>" :
                "<td height=30vh width=30vh bgcolor=#000000></td>";
            echo $cell;
        }
        echo "</tr>";
    }
    echo "</table >";
}
?>
