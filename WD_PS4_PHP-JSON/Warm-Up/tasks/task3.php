<h1>Task3</h1>
<p>Select file to upload: </p>
<form method="post" enctype="multipart/form-data">
  <input type="file" name="file"/>
  <input type="submit" value="Upload file" name="upload"/>
  <input type="submit" value="Display files" name="display"/>
</form>
<div>
    <?php
    $target_dir = "uploads/";
    if (isset ($_POST["upload"])) {
        $file = $_FILES["file"]["name"];
        if ($file) {
            move_uploaded_file($_FILES["file"]["tmp_name"], $target_dir . $file);
        } else {
            echo "File is not downloaded!";
        }
    } elseif (isset ($_POST["display"])) {
        $files = array_diff(scandir($target_dir, SCANDIR_SORT_NONE), ['.', '..']);
        foreach ($files as $file) {
            $normalSize = normal_size($target_dir . $file);
            echo "Name of file: $file Size is: $normalSize <br>";
        }
    }
    ?>
    <?php
    function normal_size($path)
    {
        $size = filesize($path);
        $units = array('bytes', 'Kb', 'Mb', 'Gb', 'Tb');
        $power = $size > 0 ? floor(log($size, 1024)) : 0;
        return number_format($size / pow(1024, $power),
                2, '.', ',') . ' ' . $units[$power];
    }

    ?>
</div>
