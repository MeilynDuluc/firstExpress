const express = require('express')
const app = express()



app.get('/greeting/', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
})
app.get('/greeting/:name', (req, res) => {
    const firstName = req.params.name;
    res.send(`<h1>Hello ${firstName}</h1>`)
})
app.get('/tip/:total/:tipPercentage', (req, res) => {
    const ans = parseInt(req.params.total) * (parseInt(req.params.tipPercentage) / 100)
    res.send(`<h1>Your total is $${ans}</h1>`);
        
    
})

app.get('/magic/:question', (req, res) => {
    const magicResponse = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"];
    const randomMagic = magicResponse[Math.floor(Math.random()*magicResponse.length)];
    const ans = req.params.question
    res.send(`<h1>Question: ${ans} Prediction: ${randomMagic}</h1>`);
});



app.listen(3000, () => {
    console.log('Listening on Port 3000')
})