function run() {
    const captchaForm = document.getElementsByClassName("form-item-english-captcha-answer")[0];
    if (!captchaForm) return;

    const label = captchaForm.querySelector("label");
    if (!label) return;

    const match = label.textContent.trim().match(/^.+\((.+)\)\s\*$/);
    if (!match) return;

    const input = captchaForm.querySelector("input");
    if (!input) return;

    input.value = match[1];
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
} else {
    run();
}