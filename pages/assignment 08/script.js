let expression = '';
$("#view h3").text('0')

$('button').on("click", function () {
    let value = $(this).text();

    if (value === '=') {
        try {
            expression = eval(expression);
        } catch {
            expression = 'Error';
        }
    } else if (value === 'C') {
        expression = '';
    } else if (value === '⌫') {
        expression = expression.slice(0, -1);
    } else if (value === '%') {
        try {
            expression = (eval(expression) / 100);
        } catch {
            expression = 'Error';
        }
    } else {
        expression += value;
    }
    $("#view h3").text(expression);
});