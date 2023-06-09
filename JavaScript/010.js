<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>bool</title>
    </head>
    <body>
        <script>
            // const(참조 변경 불가), let(변경 가능), var(X)
            let one = true; // 다른 언어는 True인 경우도 있습니다.
            // python 에서 json데이터로 통신할 때 True에서 T를 대문자로 내보내면 안됩니다.
            let two = false;
            let three;
            let four = null;
            let five = Infinity; // 비교
            // python에서는 float('inf')

            console.log(Boolean("")); // false
            console.log(Boolean(" ")); // true
            console.log(Boolean("abc")); // true
            console.log(Boolean(0)); // false
            console.log(Boolean(100)); // true
            console.log(Boolean(-100)); // true
            console.log(Boolean(three)); // false
            console.log(Boolean(four)); // false
            console.log(Boolean(five)); // true
            console.log(Boolean(NaN)); // false
            one = 0;

            // 우리를 힘들게 하는 JS
            // object가 있느냐 없는냐
            console.log(Boolean([])); // true
            console.log(Boolean({})); // true

            if (one) {
                console.log("hello");
            } else {
                console.log("world");
            }

        </script>
    </body>
</html>