;(async () => {
    const h2 = document.querySelector('h2')
    const h3 = document.querySelector('h3')

    const { pathname } = window.location
    const [, searchType, id] = pathname.split('/')

    const url = (() => {
        if (searchType === 'joke') return `/api/v1/joke/${id}`
        else return '/api/v1/random-joke'
    })()

    const results = await fetch(url)
    const { joke, punchline } = await results.json()
    h2.textContent = joke
    h3.textContent = punchline

    const button = document.querySelector('button')
    button.addEventListener('click', async () => {
        const results = await fetch('/api/v1/random-joke')
        const { joke, punchline } = await results.json()
        h2.textContent = joke
        h3.textContent = punchline
    })
    
})()

