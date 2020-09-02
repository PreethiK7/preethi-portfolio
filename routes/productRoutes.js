module.exports = (app) => {

    const nodemailer = require('nodemailer');

    var transport = {
        service: 'gmail',
        host: 'smtp.gmail.com',
        auth: {
            user: process.env.USER,
            pass: process.env.PASS
        }
    }

    var transporter = nodemailer.createTransport(transport)

    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        } else {
            console.log('All works fine, congratz!');
        }
    });

    app.post('/api/send', (req, res, next) => {
        const name = req.body.name
        const email = req.body.email
        const message = req.body.messageHtml


        var mail = {
            from: name,
            to: 'preethikesavan7@gmail.com',
            subject: 'Contact form request',
            html: message
        }

        transporter.sendMail(mail, (err, data) => {
            if (err) {
                res.json({
                    msg: 'fail'
                })
            } else {
                res.json({
                    msg: 'success'
                })
            }
        })
    })
}
