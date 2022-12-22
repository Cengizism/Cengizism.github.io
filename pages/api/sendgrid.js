async function sendEmail(req, res) {
  console.log('sending mail');
  // try {
  //   await sendgrid.send({
  //     to: 'ulusoy.cengiz@gmail.com',
  //     from: 'ulusoy.cengiz@gmail.com',
  //     subject: `[Lead from Cengizism] : ${req.body.subject}`,
  //     html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  //     <html lang="en">
  //     <head>
  //       <meta charset="utf-8">
  //       <title>Cengizism</title>
  //       <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
  //     </head>
  //     <body>
  //       <div class="container" style="margin-left: 20px;margin-right: 20px;">
  //         <h3>You've got a new mail from ${req.body.fullname}, their email is: ${req.body.email} </h3>
  //         <div style="font-size: 16px;">
  //           <p>Message:</p>
  //           <p>${req.body.message}</p>
  //         </div>
  //       </div>
  //     </body>
  //     </html>`,
  //   });
  // } catch (error) {
  //   // console.log(error);
  //   return res.status(error.statusCode || 500).json({ error: error.message });
  // }

  return res.status(200).json({ error: '' });
}

export default sendEmail;
