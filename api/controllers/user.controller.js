import User from "../models/user.model.js"
import createError from "../utils/createError.js"
import bcrypt from "bcrypt"


export const deleteUser = async (req, res, next) => {
    await User.findByIdAndDelete(req.params.id)
    res.status(201).send("Deleted!")

}

export const getUser = async (req, res, next) => {
    const user = await User.findById(req.params.id)
    res.status(201).send(user)
}

export const updateUser = async (req, res, next) => {
    if (req.body.password) {
        req.body.password = bcrypt.hashSync(req.body.password, 5);
    }

    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getUsers = async (req, res, next) => {
    const query = req.query.new;
    try {
        const users = query
            ? await User.find().sort({ _id: -1 }).limit(5)
            : await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
}

export const getUserStats = async (req, res, next) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                },
            },
        ]);
        res.status(200).json(data)
    } catch (err) {
        next(err);
    }
}

