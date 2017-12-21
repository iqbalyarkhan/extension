window.onload = function () {
    document.body.style.backgroundImage = 'url("chrome-extension://@'+chrome.runtime.id+'/image.png")';
    document.body.style.backgroundSize="cover";
};
