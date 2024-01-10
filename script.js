// document.addEventListener('DOMContentLoaded', () => {
//     const initialMessage = "초기 메뉴 메시지입니다.";
//     document.getElementById('menuContent').textContent = initialMessage;

// // 메세지 전송 함수
// function sendMessage() {
//     const messageInput = document.getElementById('userInput');
//     const chatContainer = document.getElementById('chatContainer');
//     const menuContent = document.getElementById('menuContent');

//     const message = messageInput.value.trim();
//     if (message !== '') {
//         const messageElement = document.createElement('div');
//         messageElement.className = 'message user-message';
//         messageElement.textContent = message;

//         // 메뉴에 메세지 추가
//         if (menuContent.textContent === "초기 메뉴 메시지입니다.") {
//             menuContent.textContent = message;
//         }

//         // 채팅창에 메세지 추가
//         else {
//             chatContainer.appendChild(messageElement);
//         }

//         messageInput.value = '';
//     }
// }

//     document.getElementById('userInput').addEventListener('keypress', function (e) {
//         if (e.key === 'Enter') {
//             e.preventDefault();
//             sendMessage();
//         }
//     });
// });

// fetch('API_ENDPOINT_URL', {
//     method: 'GET', // GET, POST, PUT, DELETE 등 HTTP 메소드 선택
//     headers: {
//         'Authorization': 'Bearer 1nXLCT3BlbkFJf5J0rZ5fTbSjvlBPCREj',
//         'Content-Type': 'application/json'
//         // 기타 필요한 헤더 설정
//     }
// })
// .then(response => response.json())
// .then(data => {
//     // API 응답 데이터를 이용한 작업 수행
// })
// .catch(error => {
//     // API 호출이 실패한 경우 처리
//     console.error('API 호출 에러:', error);
// });

// // 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

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
    
    // API 호출 및 처리
    fetch('API_ENDPOINT_URL', {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        // API 응답 데이터를 이용한 작업 수행
        console.log(data);
    })
    .catch(error => {
        // API 호출이 실패한 경우 처리
        console.error('API 호출 에러:', error);
    });
});
