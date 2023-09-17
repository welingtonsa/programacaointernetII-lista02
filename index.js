/** Import */
const express = require('express')
/** Import dos arquivos js */
const bd_bbt = require('./dist/bd_bbt.js')
const bd_sn = require('./dist/bd_sn.js')
const bd_st = require('./dist/bd_st.js')
const path = require('path')

const app = express()
const port = 3000

/** BootStrap files config */
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')))
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')))

/** Adicionando arquivos staticos .PUG 
 ** ./src/viws declara o caminho principal dos viws 
*/
app.set('views', './public/views');
app.set('view engine', 'pug');

app.get('/', (req, res) =>{
    res.render('index',{});
  
    //console.log(bd_bbt.nome)
})

app.get('/index',(req,res) => {
    res.render('index',{ 
        bbt_nome : bd_bbt.nome,
        sn_nome : bd_sn.nome,
        st_nome : bd_st.nome,
        bbt_fotoBg : bd_bbt.fotoBg,
        sn_fotoBg : bd_sn.fotoBg,
        st_fotoBg : bd_st.fotoBg,
        bbt_generos: bd_bbt.generos,
        sn_generos : bd_sn.generos,
        st_generos : bd_st.generos
    });
})

app.listen(port, () =>{
    console.log('App running at port ${port}');
})