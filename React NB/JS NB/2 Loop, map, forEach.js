// ES-6: map, filter , forEach

let marks = [10, 20, 30, 40, 50];
let arr = marks.map(x => {
    if(x < 25)
        return x + 5;
});
