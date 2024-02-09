<section>
    <h2>Goodbye</h2>
    <article>
        <p>This is a goodbye.</p>
        <p>
            <?php
            function sayGoodbye($name) {
                echo "Goodbye ". $name ."!";
            }
            ?>
        </p>
        <p>
            <?php sayGoodbye($_POST['name']) ?>
        </p>
        <p>See Ya later! </p>
    </article>
</section>