module.exports = {
    
    getCategories: (req, res, next) => {
        const db = req.app.get('db');
        db.find_categories()
        .then(response => res.status(200).send(response))
        .catch(res.status(500).send('something went wrong'))
    },

    getPosts: (req, res, next) => {
        const db = req.app.get('db');
        db.find_posts()
        .then(response => res.status(200).send(response))
        .catch(res.status(500).send('something went wrong'))
    }

}