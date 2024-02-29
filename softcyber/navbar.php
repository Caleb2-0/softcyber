<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script defer src = "script.js"></script>
    <title>navbar</title>
</head>
<body>
    <header>
        <div class="logo">SoftCyber</div>
        <div class="tongle">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <nav class = "navbar">
            <ul>
                <li><a href = "index.php" class = "<?php if($page == 'index'){echo 'active';}?>" tabindex = "1">home</a></li>
                <li><a href = "aboutUs.php" class = "<?php if($page == 'aboutUs'){echo 'active';}?>" tabindex = "2">about us</a></li>
                <li><a href = "productsAndServices.php" class = "<?php if($page == 'productsAndServices'){echo 'active';}?>">products &amp; services</a></li>
                <li><a href = "photoGallery.php" class = "<?php if($page == 'photoGallery'){echo 'active';}?>">gallery</a></li>
                <li><a href = "contactUs.php" class = "<?php if($page == 'contactUs'){echo 'active';}?>">contact us</a></li>
            </ul>
        </nav>
    </header>
</body>

</html>