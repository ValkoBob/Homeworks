<h1>Task1</h1>
<p>Calculate the sum of the numbers in the interval
  between the entered by the user (from -1000 to 1000).</p>
<form action="" method="post">
  <label for="firstNumber1">Enter the first number:</label>
  <input title="First number" type="number" name="firstNumber1" id="firstNumber1" value="-1000" min="-1000">
  <label for="secondNumber1">Enter the second number:</label>
  <input title="Second number" type="number" name="secondNumber1" id="secondNumber1" value="1000" max="1000">
  <input type="submit" title="sumTwoNumbers1" value="Count" name="sumTwoNumbers1">
</form>
<div>
  Result of summing:
    <?php
    if (isset($_POST["sumTwoNumbers1"])) {
        $firstNumber = $_POST["firstNumber1"];
        $secondNumber = $_POST["secondNumber1"];
        $sum = 0;
        for ($i = $firstNumber; $i <= $secondNumber; $i++) {
            $sum += $i;
        }
        echo $sum;
    }
    ?>
</div>
