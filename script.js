// document.addEventListener('DOMContentLoaded', () => {
//     const messageInput = document.getElementById('userInput');

//     messageInput.addEventListener('keypress', (e) => {
//         if (e.key === 'Enter') {
//             e.preventDefault(); // 기본 Enter 행동을 막습니다.
//             sendMessage();
//         }
//     });
// });

// function sendMessage() {
//     const messageInput = document.getElementById('userInput');
//     const chatContainer = document.getElementById('chatContainer'); // 변경된 부분

//     const message = messageInput.value.trim();
//     if (message !== '') {
//         const messageElement = document.createElement('div');
//         messageElement.className = 'message user-message';
//         messageElement.textContent = message;

//         chatContainer.appendChild(messageElement);
//         messageInput.value = '';
//     }
// }

document.addEventListener('DOMContentLoaded', () => {
    const initialMessage = "초기 메뉴 메시지입니다.";
    document.getElementById('menuContent').textContent = initialMessage;

// 메세지 전송 함수
function sendMessage() {
    const messageInput = document.getElementById('userInput');
    const chatContainer = document.getElementById('chatContainer');
    const menuContent = document.getElementById('menuContent');

    const message = messageInput.value.trim();
    if (message !== '') {
        const messageElement = document.createElement('div');
        messageElement.className = 'message user-message';
        messageElement.textContent = message;

        // 메뉴에 메세지 추가
        if (menuContent.textContent === "초기 메뉴 메시지입니다.") {
            menuContent.textContent = message;
        }

        // 채팅창에 메세지 추가
        else {
            chatContainer.appendChild(messageElement);
        }

        messageInput.value = '';
    }
}

    document.getElementById('userInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });
});


// 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


