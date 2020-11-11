const showToast = (message, duration,messageStyles) => {
    const toast = document.createElement("div")
    toast.style = "position: absolute; bottom: 20%; font-size: 20px; width: 100%; text-align: center; z-index: 1100";
    const messageElement = document.createElement("p");
    messageElement.innerText = message;
    messageElement.style = `padding: 20px; background-color: black; color: white; border-radius: 10px; width: fit-content; margin: auto${messageStyles ? `; ${messageStyles}` : ";"}`;
    toast.append(messageElement);
    const html = document.querySelector("html");
    html.append(toast);
    setTimeout(() => {toast.remove()},duration)
}

export default showToast;
