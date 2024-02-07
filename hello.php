<!DOCTYPE html>
<html lang="en-us">
    <head>
        <title>PHP Test</title>
    </head>
    <body>
        <h1>Hello World in PHP</h1>
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
                <form action="action.php" method="post">
                    <label for="name">Your name:</label>
                    <input name="name" id="name" type="text" />
                    <label for="age">Your age:</label>
                    <input name="age" id="age" type="number" />

                    <button type="submit">Submit</button>
                </form>
            </section>

        <!-- below is a command to get lots of info. Not for end users. -->
        <!-- ?php phpinfo(); ?-->
        </main>
    </body>
</html>