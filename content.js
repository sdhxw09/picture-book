//find all images larger than 500 x 384
chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
    $('img').each(function () {
        if (this.width > 500 && this.height > 384) {
            chrome.extension.sendRequest({imageUrl: this.src});
        }
    });
});

