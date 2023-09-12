const express = require("express");
const users = express.Router();
const {
    getUserByID
} = require("../queries/users");

// get method route to request data for user
users.get("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { error, user } = await getUserByID(id);

        if (error && error.received === 0) {
            res.status(404).json({ error: "User Not Found, Check User ID And Try Again" });
        } else if (error) {
            throw new Error("Server Error")
        } else {
            res.status(200).json(user);
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})

module.exports = users;