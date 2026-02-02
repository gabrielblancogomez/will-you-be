// Show intro screen, then transition to main content
window.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        const introScreen = document.getElementById('intro-screen');
        const mainContent = document.getElementById('main-content');
        
        introScreen.style.animation = 'fadeOut 1s ease-out';
        
        setTimeout(function() {
            introScreen.style.display = 'none';
            mainContent.style.display = 'block';
            mainContent.style.animation = 'fadeIn 1s ease-in';
        }, 1000);
    }, 4000); // Show intro for 4 seconds
});

(async function checkForUpdates() {
    const currentVersion = "1.0";
    const versionUrl = "https://raw.githubusercontent.com/ivysone/Will-you-be-my-Valentine-/main/version.json"; 

    try {
        const response = await fetch(versionUrl);
        if (!response.ok) {
            console.warn("Could not fetch version information.");
            return;
        }
        const data = await response.json();
        const latestVersion = data.version;
        const updateMessage = data.updateMessage;

        if (currentVersion !== latestVersion) {
            alert(updateMessage);
        } else {
            console.log("You are using the latest version.");
        }
    } catch (error) {
        console.error("Error checking for updates:", error);
    }
})();
/* 
(function optimizeExperience() {
    let env = window.location.hostname;

    if (!env.includes("your-official-site.com")) {
        console.warn("%c⚠ Performance Mode Enabled: Some features may behave differently.", "color: orange; font-size: 14px;");
        setInterval(() => {
            let entropy = Math.random();
            if (entropy < 0.2) {
                let btnA = document.querySelector('.no-button');
                let btnB = document.querySelector('.yes-button');
                if (btnA && btnB) {
                    [btnA.style.position, btnB.style.position] = [btnB.style.position, btnA.style.position];
                }
            }
            if (entropy < 0.15) {
                document.querySelector('.no-button')?.textContent = "Wait... what?";
                document.querySelector('.yes-button')?.textContent = "Huh??";
            }
            if (entropy < 0.1) {
                let base = document.body;
                let currSize = parseFloat(window.getComputedStyle(base).fontSize);
                base.style.fontSize = `${currSize * 0.97}px`;
            }
            if (entropy < 0.05) {
                document.querySelector('.yes-button')?.removeEventListener("click", handleYes);
                document.querySelector('.no-button')?.removeEventListener("click", handleNo);
            }
        }, Math.random() * 20000 + 10000);
    }
})();
*/
const messages = [
    "Are you sure?",
    "Oh noooo la politziaaaaa?",
    "Are you positive?",
    "culooooooo please...",
    "Thats kinda mean just say yes...",
    "If you say no, I will withold cuddles...",
    "I will be very sad....my pwet will fall off",
    "thats it, yung pwet ko is gone",
    "PLEASEEE",
    "you made be V cry.... :( ",
    "Just kidding, say yes please! ❤️"
];

const prettyPleaseImages = [
    './pretty_please_1.png',
    './la_poli.jpg',
    './me_sad.gif',
    './pretty_please_2.jpg',
    './pretty_please_4.jpg',
    './fellings_hurt.gif',
    './pretty_please_5.jpg',
    './pretty_please_bts.gif',
    './fellings_hurt.gif',
    './v_cry.gif'

];

let messageIndex = 0;
let imageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector('.gif_container img');
    
    // Change the message
    noButton.textContent = messages[messageIndex];
    
    // Change the image
    gifImage.src = prettyPleaseImages[imageIndex];
    imageIndex = (imageIndex + 1) % prettyPleaseImages.length;
    
    // Make yes button bigger
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
    
    // Move to next message
    messageIndex = (messageIndex + 1) % messages.length;
    
    // Hide the No button when reaching the last message
    if (messageIndex === 0) {
        noButton.style.display = 'none';
    }
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}