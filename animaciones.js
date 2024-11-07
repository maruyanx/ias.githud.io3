document.addEventListener("DOMContentLoaded", function() {
    const title = document.getElementById("title");
    const text = title.innerText;
    title.innerText = ''; 

    let i = 0;
    function typeLetter() {
        if (i < text.length) {
            title.innerText += text[i];
            i++;
            setTimeout(typeLetter, 150); 
        }
    }
    setTimeout(typeLetter, 500);

    title.style.animation = 'fadeIn 1s ease forwards, slideIn 1s ease forwards';
});
