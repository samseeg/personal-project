module.exports = {
    
    getCategories: (req, res, next) => {
        const db = req.app.get('db');
        db.find_categories()
        .then(response => res.status(200).send(response))
        .catch((err) => res.status(500).send('something went wrong'))
    },

    getPosts: (req, res, next) => {
        const db = req.app.get('db');
        let {id} = req.params;
        // console.log(req.params.id)
        db.find_posts(id)
        .then(response => res.status(200).send(response))
        .catch( (err) => res.status(500).send('something went wrong'))
    },

    getUser: (req, res, next) => {
        const db = req.app.get('db');
        let {id} = req.params;
        // console.log(req)
        db.find_user_from_id(id)
        .then(response => res.status(200).send(response))
    }

}