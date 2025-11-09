;(async () => {
    const h2 = document.querySelector('h2')
    const h3 = document.querySelector('h3')
    const btn = document.querySelector('button')

    btn.addEventListener('click', async () => {
        const results = await fetch('/api/v1/random-joke')
        const { joke, punchline } = await results.json()
        h2.textContent = joke
        h3.textContent = punchline
    })
})()