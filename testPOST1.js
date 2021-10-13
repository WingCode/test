var sendPOST = (function () {
    function sendPOST() {
    }
    sendPOST.sendEvent = function (payload) {
        fetch("https://test115.free.beeceptor.com", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });
    };
    return sendPOST;
}());
