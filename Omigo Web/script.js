const button1 = document.getElementsByClassName('.btn1');
const button2 = document.getElementsByClassName('.btn2');


document.addEventListener("DOMContentLoaded", function () {
    // Change "Download App" button content
    document.querySelector('.app button').addEventListener('click', function () {
        this.textContent = "Downloading...";
        setTimeout(() => {
            this.innerHTML = `<a href="your-download-link-here" style="color: white;">Click to Download</a>`;
        }, 2000);
    });
});