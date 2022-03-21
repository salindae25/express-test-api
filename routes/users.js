const express = require('express');
const router = express.Router();


const users = [{ name: 'salinda', email: 'salindae25@gmail.com' }];
router.get("/", (request, response) => {
    return response.send("welcome to test api")
})
router.get('/users', (req, res) => {
    return res.send(users);
})

router.get('/user/:name', (req, res) => {
    const { name } = req.params
    const user = users.find(x => x.name == name);
    if (!user) return res.status(404).json({ error: 'No user in that name exit' })
    return res.json({ ok: true, user })
})

router.post('/add-user', (req, res) => {
    const { name, email } = req.body;
    if (!(name && email)) return res.status(404).send('body missing properties');

    users.push({ name, email });
    return res.status(200).send('User added')
})


module.exports = router