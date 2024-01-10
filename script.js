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
    }})

    document.getElementById('userInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });


const endpointURL = 'https://api.openai.com/v1/engines/davinci/completions'; // 여기에 엔드포인트 URL을 넣으세요
const apiKey = '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'; // 여기에 API 키를 넣으세요

function callGPT3API(inputText) {
    fetch(endpointURL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'prompt': inputText,
            'max_tokens': 150, // 생성할 최대 토큰 수
            'temperature': 0.7, // 생성에 사용할 문장 다양성
            // 기타 필요한 매개변수 설정
        })
    })
    .then(response => response.json())
    .then(data => {
        // API 응답 데이터를 이용한 작업 수행
        console.log(data.choices[0].text.trim());
        // 이 예제에서는 첫 번째 결과를 가져와서 출력합니다.
    })
    .catch(error => {
        // API 호출이 실패한 경우 처리
        console.error('API 호출 에러:', error);
    });
}

// 예시로 사용할 함수
function sendMessage() {
    const messageInput = document.getElementById('userInput');
    const userMessage = messageInput.value.trim();
    const gptMessageElement = document.createElement('div');
            gptMessageElement.className = 'message gpt-message';
            gptMessageElement.textContent = gptResponse;
            chatContainer.appendChild(gptMessageElement);

    if (userMessage !== '') {
        // 사용자 메시지 출력
        console.log('사용자 메시지:', userMessage);

        // GPT-3 API 호출
        callGPT3API(userMessage);

        messageInput.value = '';
    }
}

document.getElementById('userInput').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendMessage();
    }
});



