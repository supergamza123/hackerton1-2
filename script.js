// // 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
//https://api.openai.com/v1/engines/davinci/completions

document.addEventListener('DOMContentLoaded', () => {
    const initialMessage = "초기 메뉴 메시지입니다.";
    document.getElementById('menuContent').textContent = initialMessage;

    const endpointURL = 'https://api.openai.com/v1/engines/davinci/completions';
    const apiKey = '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';

    function sendMessage() {
        const messageInput = document.getElementById('userInput');
        const chatContainer = document.getElementById('chatContainer');
        const menuContent = document.getElementById('menuContent');

        const message = messageInput.value.trim();
        if (message !== '') {
            const userMessageElement = document.createElement('div');
            userMessageElement.className = 'message user-message';
            userMessageElement.textContent = message;
            chatContainer.appendChild(userMessageElement);

            callGPT3API(message, chatContainer, menuContent, initialMessage);

            messageInput.value = '';
        }
    }

    function callGPT3API(inputText, chatContainer, menuContent, initialMessage) {
        fetch(endpointURL, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'prompt': inputText,
                'max_tokens': 150,
                'temperature': 0.7,
                // 다른 매개변수 설정 가능
            })
        })
        .then(response => response.json())
        .then(data => {
            const gptResponse = data.choices[0].text.trim();

            const gptMessageElement = document.createElement('div');
            gptMessageElement.className = 'message gpt-message';
            gptMessageElement.textContent = gptResponse;
            chatContainer.appendChild(gptMessageElement);

            if (menuContent.textContent === initialMessage) {
                menuContent.textContent = gptResponse;
            }
        })
        .catch(error => {
            console.error('API 호출 에러:', error);
        });
    }

    document.getElementById('userInput').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendMessage();
        }
    });

    document.getElementById('sendMessageButton').addEventListener('click', function () {
        sendMessage();
    });
});
