<h1>Task5</h1>
<p>Calculate the sum of the digits in number.</p>
<form action="" method="post">
  <label for="number">Enter the number:</label>
  <input title="number" type="text" name="number" id="number" value="0">
  <input type="submit" title="sumNumber" value="Count" name="sumNumber">
</form>
<div>
  Result of summing:
    <?php
    if (isset($_POST["sumNumber"])) {
        echo array_sum(str_split($_POST["number"]));
    }
    ?>
</div>
