const router = require('express').Router();
const { User } = require('../../models');

//api/users endpoint
router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(402)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword =  userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(403)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

//FOR TESTING PURPOSES ONLY
router.post('/test', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(402)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword =  userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(403)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    res.json({ user: userData, message: 'You are now logged in!' });
  } catch (err) {
    res.status(500).json(err);
  }
})

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
      req.session.logged_in = true;
      
      res.status(200).json({ user: userData, message: 'You are now logged in!' });
    });
    
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;
