<!DOCTYPE html>
<html lang="en-us">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="BraveGrumpy Content">
        <meta name="author" content="Brave Grumpy Content">
        <meta name="keywords" content="Art, Writing, Photography, Personal Website">
        <title>Dev BraveGrumpy Homepage</title>
        <link rel="stylesheet" href="stylesheets/styles.css">
        <link rel="icon" href="assets/images/BG_logo.png">
    </head>
    <body>
        <header class="row col-s-12 col-m-12 col-l-12 header row">
            <div class="col-m-4"></div>
            <div class="col-m-4 title">
                <h1>Welcome to the Experimental Homepage</h1>
                <p><span class="subtitle">
                    <?php echo "PHP Edition"; ?>
                </span></p>
            </div>
            <p>Go check out the <a href="dev.html">HTML Edition</a></p>
        </header>
        <main class="row">
            <section class="col-s-12 col-m-12 navbar">
                <h2>Helpful Links</h2>
                <article><a href="index.html">Go back to the real, non-experimental homepage.</a></article>
                <div class="navbar"></div>
            </section>
            <section>
                <h2>About this page</h2>
                <p>This page is currently unstyled....</p>
                <p>This is because a lot of manual labor went into the styling for this <a href="index.html">main homepage</a>. Maybe I want to create new styles. Who knows. </p>
            </section>
            <section>
                <h2>Including Basic JS functionality</h2>
                <script type="text/javascript">
                    console.log("something happened");
                    document.write("This is some basic javascript");
                </script>
            </section>
            <section>
                <h2>Basic PHP Functionality</h2>
                <div id="app"></div>
                <article>
                    <div>
                        <p>
                            <?php
                                echo "This was created inside a php tag";
                                $a = "The following is the code I used to make it:";
                            ?>
                        </p>
                        <p><?php echo $a ?></p>
                        <pre>
    &lt;?php
        echo "This was created inside a php tag";
    ?&gt;
                        </pre>
                    </div>
                </article>
                <article>
                    <h2>Conditional Statements</h2>

                    <form method="post">
                    <input type="checkbox" name="check" id="check" default="true">
                    <button type="submit">Submit</button>
                    </form>

                    <?php
                        if (isset($_POST['check'])) {
                          $expression = True;  
                        } else {
                            $expression = False;
                        }
                    ?>

                    <p>The php expression: <pre>&lt?php echo $_POST['check']; ?&gt</pre> is evaluated.</p>

                    <?php if($expression): ?>
                        <p>The expression is True</p>
                    <?php else: ?>
                        <p>The expression is False</p>
                    <?php endif; ?>
                    <div>
                        <h3>For Loop</h3>
                        <ul>
                            <?php for ($i = 0; $i < 5; ++$i): ?>
                                <li>This is the <?= ($i + 1)?><?php
                                    switch($i) {
                                        case 0:
                                            echo "st";
                                            break;
                                        case 1:
                                            echo "nd";
                                            break;
                                        case 2:
                                            echo "rd";
                                            break;
                                        default:
                                            echo "th";
                                    }
                                    ?> loop.
                                </li>
                            <?php endfor; ?>
                        </ul>
                    </div>
                </article>
                <article>
                    <h2>Simple Tutorial</h2>
                    <p>
                    <?php
                        if (str_contains($_SERVER['HTTP_USER_AGENT'], 'Firefox')) {
                            echo 'You are using Firefox';
                        }
                    ?>
                    </p>
                    <p>
                        <?php
                            echo $_SERVER['REMOTE_ADDR'];
                        ?>
                    </p>
                </article>
                <article>
                    <h2>Working with simple HTML Forms</h2>
                    <div>
                        <form action="./action.php" method="post">
                            <div>
                                <label for="name">Name:</label>
                                <input type="text" name="name" id="name">
                            </div>
                            <div>
                                <label for="age"></label>
                                <input type="number" name="age" id="age">
                            </div>
                            <div>
                            <label for="accept">Do you want to check the box?</label>
                            <input type="checkbox" name="accept" id="accept">
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                    </div>
                    <div>
                        <h3>Form Output</h3>
                            <div>
                                <?php
                                    include("./action.php");
                                ?>
                            </div>
                    </div>
                </article>
            </section>
        </main>
        <div class="row col-s-12 footer">
            <footer>This is the footer</footer>
        </div>
    </body>
</html>
