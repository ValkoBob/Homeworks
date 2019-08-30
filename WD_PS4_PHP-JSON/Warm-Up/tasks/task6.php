<h1>Task6</h1>
<p>Generate random array with the numbers from 0 to 10; length of the array should be 100; removes from array repeats;
    sorting; reversing and multiply each number on 2.</p>
<form action="" method="post">
    <input type="submit" title="generateArray" value="Generate" name="generateArray">
</form>
<div>
    Result:
    <?php
    if (isset($_POST["generateArray"])) {
        $generatedArray = array();
        for ($i = 0; $i < 100; $i++){
            $generatedArray [$i] = mt_rand(1, 10);
        }
        echo "Generated Array: "; print_r($generatedArray);
        $generatedArray = array_unique($generatedArray);
        echo "<br><br> After removing repeats: "; print_r($generatedArray);
        sort( $generatedArray);
        echo "<br><br>Sorted array: "; print_r($generatedArray);
        $generatedArray = array_reverse($generatedArray);
        echo "<br><br>Reverse of array: "; print_r($generatedArray);
        array_walk($generatedArray, function(&$value) {
            $value *= 2;
        });
        echo "<br><br>After multiplying on 2: "; print_r($generatedArray);
    }
    ?>
</div>
