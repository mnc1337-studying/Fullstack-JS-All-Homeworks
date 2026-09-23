// ЗАВДАННЯ №1

const handleButtonClick = (buttonId, message) => {
    const btn = document.getElementById(buttonId);
    if (btn) {
        const handleButtonClickEvent = () => {
            console.log(`${message}`);
        }
        btn.addEventListener("click", handleButtonClickEvent);
    } else {
        console.error(`Element with ID '${buttonId}' not found!`);
    }
};

handleButtonClick("myButton", "Message from button - it was clicked successfully!");



// ЗАВДАННЯ №2

const trackMousePosition = () => {
    const handleMousePositionEvent = (event) => {
        let x = event.clientX;
        let y = event.clientY;
        console.log(`Mouse X: ${x}, Mouse Y: ${y}`);
    };
    document.addEventListener("mousemove", handleMousePositionEvent);
};

trackMousePosition();



// ЗАВДАННЯ №3

const setupEventDelegation = (selector) => {
    const list = document.querySelector(selector);
    if (list) {
        list.addEventListener("click", (event) => {
            const targetLi = event.target.closest("li");
            if (targetLi && list.contains(targetLi)) {
                const liTextContent = targetLi.textContent.trim();
                console.log(`Item clicked: ${liTextContent}`);
            }
        });
    } else {
        console.error(`Element with selector '${selector}' not found!`);
    }
};

setupEventDelegation("#testList");



export { handleButtonClick, trackMousePosition, setupEventDelegation };