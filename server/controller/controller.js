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
        // console.log(req.params)
        db.find_posts(id)
        .then(response => res.status(200).send(response))
        .catch( (err) => res.status(500).send('something went wrong'))
    },

    get1Post: (req, res, next) => {
        const db = req.app.get('db');
        let {id} = req.params;
        // console.log(req)
        db.find_op(id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    getComments: (req, res, next) => {
        const db = req.app.get('db');
        let {id} = req.params;
        // console.log(req.params.id)
        db.find_comments(id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    getUsersPosts: (req, res, next) => {
        const db = req.app.get('db');
        let {id} = req.params;
        db.find_users_posts(id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    getCurrentUser: (req, res, next) => {
        const db = req.app.get('db');
        let {user_id} = req.user;
        // console.log(user_id)
        db.find_current_user(user_id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    createCategory: (req, res, next) => {
        const db = req.app.get('db');
        let {newCat} = req.body;
        // console.log(req.body)
        db.create_category(newCat)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    createPost: (req, res, next) => {
        const db = req.app.get('db');
        let {op, cat_id, user_id} = req.body;
        // console.log(req.body)
        db.create_op(op, cat_id, user_id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    createComment: (req, res, next) => {
        const db = req.app.get('db');
        let {op_comment, op_id, user_id} = req.body;
        // console.log(req.body)
        db.create_comment(op_comment, op_id, user_id)
        .then(response => res.status(200).send(response))
        .catch(response => res.status(500).send('something went wrong'))
    },

    deleteCategory: (req, res, next) => {
        const db = req.app.get('db');
        let {id} = req.body;
        db.delete_category(id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    deletePost: (req, res, next) => {
        const db = req.app.get('db')
        // console.log(req.params)
        let {id} = req.params;
        db.delete_post(id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(500).send('something went wrong'))
    },

    deleteComments: (req, res, next) => {
        const db = req.app.get('db')
        let {id} = req.params;
        db.delete_comments(id)
        .then(response => res.status(200).send(response))
        .catch(err => res.status(200).send('something went wrong'))
    },
}