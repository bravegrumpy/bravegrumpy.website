START action.php
<?php 
$postdata = redirect();
?>

<?php
function doAction($array) {
    echo 'START action.doAction \n';
    $name = htmlspecialchars($array['name']);
    $age = (int)$array['age'];

    $output = array(
        'name' => var_dump($name),
        'age' => var_dump($age)
    ); 
    echo 'END action.doAction \n';

    return json_encode($output);
}

function redirect() {
    echo 'START action.redirect \n';

    if (isset($_POST['name']) AND isset($_POST['age']) ) {
        //$data = doAction($_POST);
        $data = array(
            'name'=> 'redirectName',
            'age' => 'redirectAge'
        );
        //echo json_encode($data);
        //echo 'action.doAction returned a value \n';
        echo 'END action.redirect \n';
        header("Location: ./hello.php");
        return json_encode($data, $flags = 'JSON_PRETTY_PRINT');

    } else {
        echo "There was an error\n";
        echo 'END action.redirect\n';
        exit;
    }
}
?>
END action.php
<a href="./hello.php" >Back</a>