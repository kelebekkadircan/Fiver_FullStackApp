import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';


export const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 10);

        const newUser = new User({
            ...req.body,
            password: hash
        });
        await newUser.save();
        res.status(201).send("User has been created")
    } catch (error) {
        res.status(500).send("Something went wrong")
    }

}
export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(404).send("User not found");

        const isCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isCorrect) return res.status(400).send("Wrong password or username");

        const { password, ...others } = user._doc

        res.status(200).json(others)


    } catch (error) {
        res.status(500).send("Something went wrong")

    }

}
export const logout = async (req, res, next) => {
    try {

    } catch (error) {
        res.status(500).send("Something went wrong")

    }

}