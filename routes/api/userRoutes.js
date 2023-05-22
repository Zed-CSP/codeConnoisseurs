const router = require('express').Router();
const { User } = require('../../models');
const sendWelcomeEmail = require('../../utils/sendmail')

//api/users endpoint
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    const validPassword = await userData.checkPassword(req.body.password);

    if (!userData || !validPassword) {
      res
        .status(403)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_fn = userData.first_name;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

// GET /api/users/loggedin (get the logged in user's id)
router.get('/loggedin', (req, res) => {
  try {
    if (req.session.user_id) {
        const loggedinUser = req.session.user_id;
        res.json(loggedinUser);
    } else {
        res.status(400).json({ message: 'no logged in user' });
    }
  } catch (error) {
    res.status(500).json({error});
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.post('/signup', async (req, res) => {
  try {
    console.log(req.body);
    let userData = await User.findOne({ where: { email: req.body.email } });

    if (userData) {
      res
        .status(400)
        .json({ message: 'This email has already been used' });
      return;
    }
    if(!req.body.email || !req.body.password) {
      res
        .status(400)
        .json({ message: 'Please fill out all fields. I am just a computer...' });
      return;
    }

    userData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
    });
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.user_fn = userData.first_name;
      req.session.logged_in = true;
      sendWelcomeEmail(userData.email);
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
