const getRandomQuote = require('get-random-quote')

module.exports = async (req, res) => {
  const quote = await getRandomQuote()

  res.end(JSON.stringify(quote))
}
