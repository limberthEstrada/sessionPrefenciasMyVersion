const {validationResult} = require('express-validator')

const controlador = {
    index: (req, res) =>
    {
        let datosSession = req.session.usuarioDatos;
        if(datosSession)
        {
            res.render('index', {usuarioSaludo: datosSession})
        }
        else{
            res.render('index', {colorAux: req.session.color})
        }
        
    },

    processIndex: (req, res) =>
    {
        let errores = validationResult(req)
       
        if(!errores.isEmpty())
        {
            return res.render('index', {errores: errores.mapped(), oldData: req.body})
        }
        req.session.usuarioDatos = req.body;
        console.log("@Testing color: " + (typeof req.body.recordarColor));
        if(req.body.recordarColor)
        {
            res.cookie('colorCookie', req.body.color, {maxAge: 60 * 60 * 1000})
        }
        
        return res.redirect('/')
    },

    otraVista: (req, res) =>
    {
        let datosSession = req.session.usuarioDatos;
        if(datosSession)
        {
            res.render('otraVistaPa', {usuarioSaludo: datosSession})
        }
        else{
            res.render('otraVistaPa', {colorAux: req.session.color})
        }
    },

    borrarColor: (req, res) =>
    {
        req.session.destroy();
        res.clearCookie('colorCookie');
        console.log("PROBANDO SI SE GUARDA LA COOKIE: " + req.cookies.colorCookie);
        return res.redirect('/')
    }
}

module.exports = controlador;