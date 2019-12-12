<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST["name"]));
    $comment = htmlspecialchars(trim($_POST["comment"]));

    if(!empty($name) && !empty($comment)) {
        echo "<p>やっほー<b>$name</b>.かなしみのおきな</p>";
        echo "<p>こめんと表示しまーす：<b>$comment</b>";
    }else {
        echo "<p>なんか入力しろはげー</p>";
    }
}else {
    echo "<p>あなたの名前とコメントぷりぃず</p>";
}
?>