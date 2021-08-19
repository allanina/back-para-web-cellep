// require permite importar modulos, bibliotecas e outras páginas
// neste exemplo, estamos incorporando a biblioteca http ao nosso projeto
const http = require('http')
//recuperando o modulo mod_home
const msg_home = require('./mod_home')
const msg_contato = require('./mod_contato')
const msg_sobre = require('./mod_sobre')

//configuramos o servidor para a resposta em res.end
const server = http.createServer(function(req, res){

  //recuperar requisição da URL
  let categoria = req.url

  //definir a rota
  if(categoria == '/sobre'){
    console.log(msg_sobre)
    res.end(msg_sobre)
  } else if(categoria == '/contato') {
    console.log(msg_contato)
    res.end(msg_contato)
  } else {  //home
    console.log(msg_home)
    res.end(msg_home)
  }

})

server.listen(3000, () => {
  console.log('Servidor escutando na porta 3000')
  console.log('Pressione CTRL+C para encerrar')
})

