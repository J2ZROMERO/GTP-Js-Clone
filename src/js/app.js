const API_KEY = ''

const submitButton =  document.querySelector('#submit')
const outputElement = document.querySelector('#output');
const inputElement = document.querySelector('input');
const historyElement = document.querySelector('.history');

const getmessage = async () => {

    
        const options = {
            method : 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "model": "gpt-3.5-turbo",
                "messages": [
                    {
                        "role": "user",
                        "content": "You are a helpful assistant."
                      }
                    ],
                    max_tokens: 40
            })
            
        }
        try {
        const response = await fetch(` https://api.openai.com/v1/chat/completions`, options)
        const data = await response.json()
        console.log(data)
        outputElement.textContent = data.choices[0].message.content

        if(data.choices[0].message.content){
            const pElement = document.createElement('p')
            pElement.textContent = inputElement.value
            historyElement.appendChild(pElement)
        }
    }catch (error) {
        console.log(error)
    }
}

submitButton.addEventListener('click', getmessage)
