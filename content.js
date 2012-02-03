//find all images larger than 500 x 384
$('img').each(function () {
    if (this.width > 500 && this.height > 384) {
        Console.log(this.src);
    }
});
