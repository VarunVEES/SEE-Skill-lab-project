const express = require('express');

const router = express.Router();

const User =
require('../models/User');



/* =========================
   REGISTER USER
========================= */

router.post('/register',
async (req, res) => {

    const existingUser =
    await User.findOne({

        email: req.body.email

    });



    if(existingUser){

        return res.json({

            success: false,

            message:
            'Email Already Registered'

        });

    }



    const user = new User({

        name: req.body.name,

        email: req.body.email,

        password: req.body.password

    });



    await user.save();



    res.json({

        success: true,

        user

    });

});



/* =========================
   LOGIN USER
========================= */

router.post('/login',
async (req, res) => {

    const user =
    await User.findOne({

        email: req.body.email,

        password: req.body.password

    });



    if(user){

        res.json({

            success: true

        });

    }

    else{

        res.json({

            success: false

        });

    }

});



/* =========================
   GET ALL USERS
========================= */

router.get('/all',
async (req, res) => {

    const users =
    await User.find();



    res.json(users);

});



module.exports = router;