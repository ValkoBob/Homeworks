<h1>Task8</h1>
<p>Count the number of lines, letters and spaces in the entered text. Consider the Cyrillic alphabet,<br>
  emoji and special characters</p>
<form method="post">
  <label>
    <textarea name="textarea" cols="30" rows="10" placeholder="Enter the symbols"></textarea>
  </label>
  <input type="submit" name="countSymbols" value="Count symbols">
</form>
<div>
  Result is:
    <?php
    if (isset($_POST["countSymbols"])) {
        $symbols = $_POST["textarea"];
        $strings = count(preg_split('/\n/', $symbols));
        $whitespaces = substr_count($symbols, ' ');
        $chars = iconv_strlen($symbols) - $whitespaces;
        echo "Number of strings : $strings<br>
            Number of characters : $chars <br>
            Number of whitespaces : $whitespaces <br>";
    }
    ?>
</div>
