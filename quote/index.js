const getRandomQuote = require('get-random-quote')

module.exports = async (req, res) => {
  const quote = await getQuote()
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify(quote))
}

function getQuote() {
  if (Math.random() < 0.3) {
    return {
      author: 'Vera Bergström',
      text: 'En tjock man kan inte slingra sig',
    }
  }
  return getRandomQuote()
}
