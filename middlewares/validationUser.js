const {body} = require('express-validator')

let listaValidaciones = 
    {
        createForm: [
            body('nombre').notEmpty().withMessage("El nombre no puede ser vacio pa"),
            body('color').notEmpty().withMessage("El color no puede ser vacio pa"),
            body('email').notEmpty().withMessage("El email no puede ser vacio pa").bail().isEmail().withMessage("Tenés que ingresar un mail valido locura"),
            body('edad').custom(value => {
                if(isNaN(value))
                {
                    throw new Error("No es una edad valida pa")
                }
                else
                {
                    return true
                }
            })
        ],

        estaDespiertoLaCookie: (req, res, next) =>
        {
            console.log("@testing cookies en otra ruta: " + req.cookies.colorCookie);
            //return res.send(typeof req.cookies.cookieRecordarColor)
            //return res.send(typeof req.session.usuarioDatos)
            console.log(typeof req.cookies.colorCookie);
            console.log(typeof req.session.usuarioDatos);
            if((req.cookies.colorCookie) && (!req.session.usuarioDatos))
            {
               console.log("Entre por lo menos jaja");
                req.session.color = req.cookies.colorCookie;
                next();
            }
            else
            {
                console.log("na me fui aqui xd");
                next();
            }
        }
    }

module.exports = listaValidaciones;