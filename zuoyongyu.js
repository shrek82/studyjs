var a = 1;

function foo() {
    if (!a) {
        var a = 10;
    }
    console.log(a);
}

foo();