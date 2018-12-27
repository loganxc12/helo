module.exports = {

     register: (req, res) => {
          const { username, password } = req.body;
          const db = req.app.get("db");
          db.create_user([ username, password ])
               .then(() => res.sendStatus(200))
               .catch(error => {
                    res.status(500).send({errorMessage: "Error in postHouse method"});
                    console.log(error);
               })
     }

}