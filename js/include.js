window.addEventListener('DOMContentLoaded', () => {
    const allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        const includePath = el.dataset.includePath;
        if (includePath) {
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;

                    // 로드된 후에 nav 이벤트 호출
                    commonNavHandler();
                }
            }
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    })
});