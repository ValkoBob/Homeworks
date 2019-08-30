<h1>Task2</h1>
<p>Calculate the sum of the numbers in the interval
  between the entered by the user (from -1000 to 1000), summing only the numbers that end at 2, 3 and 7.</p>
<form action="" method="post">
  <label for="firstNumber2">Enter the first number:</label>
  <input title="First number" type="number" name="firstNumber2" id="firstNumber2" value="-1000" min="-1000">
  <label for="secondNumber2">Enter the second number:</label>
  <input title="Second number" type="number" name="secondNumber2" id="secondNumber2" value="1000" max="1000">
  <input type="submit" title="sumTwoNumbers2" value="Count" name="sumTwoNumbers2">
</form>
<div>
  Result of summing:
    <?php
    if (isset($_POST["sumTwoNumbers2"])) {
        $firstNumber = $_POST["firstNumber2"];
        $secondNumber = $_POST["secondNumber2"];
        $numbersForValidation = [2, 3, 7];
        $min = $firstNumber;
        $max = $secondNumber;
        if ($min > $max) {
            $min = $secondNumber;
            $max = $firstNumber;
        }
        $sum = 0;
        for ($i = $min; $i <= $max; $i++) {
            if (in_array(abs($i % 10), $numbersForValidation)) {
                $sum += $i;
            }
        }
        echo $sum;
    }
    ?>
</div>
