<!DOCTYPE html>
<html lang="en-us">
    <head>
        <title>PHP Test</title>
    </head>
    <body>
        <header>
        <h1>Hello World in PHP</h1>
        </header>
        <nav></nav>
        <main>
            <section>
                <h2>Mixing php with html to display user data.</h2>
                <?php
                if (str_contains($_SERVER['HTTP_USER_AGENT'], 'Firefox')) {
                ?>
                <h3>str_contains() returned true</h3>
                <p>You are using Firefox</p>
                <?php
                } else {
                ?>
                <h3>str_contains() returned false</h3>
                <?php
                }
                ?>
                <p>Note that php and html can just be mixed.</p>
            </section>
            <section>
                <h2>A simple PHP Form</h2>
                <?php
                    function getFormData() {
                        if (isset($_POST['name']) && isset($_POST['age']) ) {
                            $name = htmlspecialchars($_POST['name']);
                            $age = (int)$_POST['age'];
                        }
                        exit;
                    }
                ?>
                <form action="action.php" method="post">
                    <label for="name">Your name:</label>
                    <input name="name" id="name" type="text" />
                    <label for="age">Your age:</label>
                    <input name="age" id="age" type="number" />

                    <button type="submit">Submit</button>
                </form>
                <article>
                    <h3>PHP code that should get stuff from action.php </h3>
                    <?php
                        $name = 'default name';
                        $age = 'unknown age';
                        //include './action.php';
                        //echo $postdata;
                        //phpinfo();
                        
                    ?>
                </article>
                <article>
                    <h3>Appending form output to this page. </h3>
                    <p>Hi <?php echo $name ?>.</p>
                    <p>You are <?php echo $age ?> years old.</p>
                </article>
            </section>
            <section>
                <h2>Include Example</h2>
                <section>
                    <h3>Without an include statement</h3>
                    <article>
                        <p>
                        <?php

                        echo "A $color $fruit";
                        ?>
                        </p>
                        <p>Clearly, we are looking an simply undefined variables.</p> 
                    </article>
                    
                    <h3>With the include statement </h3>
                    <article>
                        <p><em>The include statement is commented out</em></p>
                        <?php
                        include './vars.php';
                        ?>
                        <p>Seeing if I can break up the php</p>
                    </article>
                    <article>
                        <?php
                        echo "A $color $fruit";
                        ?>
                    </article>
                    <h3>Using a function</h3>
                    <article>
                        <?php
                        function coloredFruit()
                        {
                            global $color;

                            include './vars.php';

                            //echo "A $color $fruit";
                        }
                        ?>
                        <p>
                            <strong>Function Call:</strong> <br/> <?php coloredFruit(); ?>
                        </p>
                        <p>
                            <strong>No Function Call:</strong> <br/>
                            <em>Note that vars is included earlier</em><br/>
                            <?php echo "A $color $fruit"; ?>
                        </p>
                    </article>
                </section>
            </section>
            <section>
                <h2>Reading external files</h2>
                <article>
                    <p>Hopefully this will work an append type thing.</p>
                    <p>My goal here is to directly append an external file. </p>
                </article>
                <article>
                    <?php
                    $filename = "./goodbye.php";
                    $goodbye = file_get_contents($filename);
                    echo $goodbye;
                    ?>
                </article>
            </section>

        <!-- below is a command to get lots of info. Not for end users. -->
        <!-- ?php phpinfo(); ?-->
        </main>
    </body>
</html>