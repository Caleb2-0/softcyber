<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Contact Us</title>
</head>
<body>
    <header>
        <?php $page = 'contactUs'; include ("navbar.php");?>
    </header>
    <main>
        <h1>Contact Us</h1>
        <br>
        <p>Leave a message</p>
        <div class="formwrap">
        <form>
            <input type = "text" placeholder = "Your Name" required>
            <input type = "text" placeholder = "Your Email" required>
            <input type = "text" placeholder = "Subject" required>
            <textarea type = "text" placeholder = "Your Message" required></textarea>
            <button type = "submit">send</button>
        </form>
        </div>
        
    </main>
    <footer>
        <?php include ('footer.php') ?>
    </footer>
</body>
</html>