exp = require('express');
app = new exp();
app.use(exp.static('static'));
app.listen(3000, function(err){
    console.log('escutando em 3000');
})
