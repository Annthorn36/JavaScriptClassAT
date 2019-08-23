<!DOCTYPE html>
<html lang="en">
<head>
    
</head>
<h2>JavaScript Program</h2>
<body>

    <p id = "Demo"></p>

    <script>
    var text ="";
    var i =35;
    while (i<37) {
        text +="The age"+i+"</br>";
        i++;
    }
    document.getElementById("Demo").innerHTML=text;
    
    </script>

</body>
</html>