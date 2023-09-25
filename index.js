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

/** Template teste das paginas series ***** */
app.get('/thebigbangtheory',(req,res) => {
    res.render('thebigbangtheory',{
        bbt_nome : bd_bbt.nome,
        bbt_fotoPoster : bd_bbt.fotoPoster,
        bbt_generos: bd_bbt.generos,
        bbt_num_episodios : bd_bbt.num_episodios,
        bbt_num_temporadas : bd_bbt.num_temporadas,
        bbt_nota : bd_bbt.nota,
        bbt_resumo : bd_bbt.resumo,

        bbt_elenco : bd_bbt.elenco,
        bbt_temporadas : bd_bbt.temporadas
    })
})

/** Stranges Things page */
app.get('/strangerthings',(req,res) =>{
    res.render('strangerthings',{
        st_nome : bd_st.nome,
        st_fotoPoster : bd_st.fotoPoster,
        st_generos : bd_st.generos,
        st_num_episodios : bd_st.num_episodios,
        st_num_temporadas : bd_st.num_temporadas,
        st_nota : bd_st.nota,
        st_resumo : bd_st.resumo,
        st_elenco : bd_st.elenco,
        st_temporadas : bd_st.temporadas

    })
})

app.get('/sobrenatural',(req,res) => {
    res.render('sobrenatural', {
        sn_nome : bd_sn.nome,
        sn_fotoPoster : bd_sn.fotoPoster,
        sn_generos : bd_sn.generos,
        sn_num_episodios : bd_sn.num_episodios,
        sn_num_temporadas : bd_sn.num_temporadas,
        sn_nota : bd_sn.nota,
        sn_resumo : bd_sn.resumo,
        sn_elenco : bd_sn.elenco,
        sn_temporadas : bd_sn.temporadas
    })
})



app.listen(port, () =>{
    console.log('App running at port ${port}');
})