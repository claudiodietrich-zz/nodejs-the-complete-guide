const routesHandler = (req, res) => {
  const url = req.url
  const method = req.method

  if (url === '/') {
    res.write('<html>')
    res.write('<head><title>Assignment 1</title></head>')
    res.write('<body>')
    res.write('<h1>Hello from node!</h1>')
    res.write('<form action="/create-user" method="POST"><input type="text" name="username" placeholder="username"><button type="submit">Send</button></form>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/users') {
    res.write('<html>')
    res.write('<head><title>Assignment 1</title></head>')
    res.write('<body>')
    res.write('<ul>')
    res.write('<li>User 1</li>')
    res.write('<li>User 2</li>')
    res.write('<li>User 3</li>')
    res.write('<li>User 4</li>')
    res.write('</ul>')
    res.write('</body>')
    res.write('</html>')
    return res.end()
  }

  if (url === '/create-user') {
    const body = []

    req.on('data', chunk => {
      body.push(chunk)
    })

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString()
      const username = parsedBody.split('=')[1]

      console.log(username)
    })

    res.statusCode = 302
    res.setHeader('Location', '/')
    res.end()
  }
}

module.exports = {
  routesHandler
}