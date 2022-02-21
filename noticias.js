var http = require('http');

var server = http.createServer( function teste(req,res){

var categoria = req.url;

if (categoria =='/tecnologia') {
    res.end("<html><body>Tudo sobre tecnologia</body></html>");

}else if (categoria =='/saude') {
    res.end("<html><body>Tudo sobre saude</body></html>");

}else if (categoria =='/esportes') {
    res.end("<html><body>Tudo sobre esportes</body></html>");

}else {
    res.end("<html><body>Portal de Comunicados</body></html>");
}
}).listen(3000);