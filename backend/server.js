const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const PORT = 5000;

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());

/* MONGODB CONNECTION */

const uri =
"mongodb://vikas:vikasbabu9090@ac-jxfjryl-shard-00-00.z9zolmd.mongodb.net:27017,ac-jxfjryl-shard-00-01.z9zolmd.mongodb.net:27017,ac-jxfjryl-shard-00-02.z9zolmd.mongodb.net:27017/?ssl=true&replicaSet=atlas-nim8jh-shard-0&authSource=admin&appName=Cluster0";

mongoose.connect(uri);

mongoose.connection.once("open", () => {

    console.log("MongoDB Connected 😎🔥");
});

/* NODEMAILER */

const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {

        user: "vikas482004@gmail.com",

        pass: "rauiacbmsdobsjyr"
    }
});

/* CONTACT SCHEMA */

const contactSchema = new mongoose.Schema({

    name: String,

    email: String,

    message: String
});

const Contact = mongoose.model("Contact", contactSchema);

/* PROJECT SCHEMA */

const projectSchema = new mongoose.Schema({

    title: String,

    description: String,

    github: String,

    image: String
});

const Project = mongoose.model("Project", projectSchema);

/* HOME ROUTE */

app.get("/", (req, res) => {

    res.send("Backend Running Successfully 🚀");
});

/* ABOUT ROUTE */

app.get("/about", (req, res) => {

    res.json({

        name: "Vikas Kumar",

        role: "Full Stack Developer",

        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Node.js"
        ]
    });
});

/* CONTACT API */

app.post("/contact", async (req, res) => {

    try {

        const newContact = new Contact({

            name: req.body.name,

            email: req.body.email,

            message: req.body.message
        });

        await newContact.save();

        await transporter.sendMail({

            from: "vikas482004@gmail.com",

            to: "vikas482004@gmail.com",

            subject: "New Portfolio Message 🚀",

            html: `

            <h2>New Message Received 😎🔥</h2>

            <p><b>Name:</b> ${req.body.name}</p>

            <p><b>Email:</b> ${req.body.email}</p>

            <p><b>Message:</b> ${req.body.message}</p>

            `
        });

        console.log("Email Sent Successfully 🚀");

        res.json({

            message: "Message Saved & Email Sent 😎🔥"
        });

    } catch (error) {

        console.log(error);

        res.status(500).json({

            error: "Something went wrong"
        });
    }
});

/* GET ALL MESSAGES */

app.get("/messages", async (req, res) => {

    try {

        const messages = await Contact.find();

        res.json(messages);

    } catch (error) {

        res.status(500).json({

            error: "Failed to fetch messages"
        });
    }
});

/* DELETE MESSAGE */

app.delete("/messages/:id", async (req, res) => {

    try {

        await Contact.findByIdAndDelete(req.params.id);

        res.json({

            message: "Message Deleted 😎🔥"
        });

    } catch (error) {

        res.status(500).json({

            error: "Delete failed"
        });
    }
});

/* ADD PROJECT */

app.post("/add-project", async (req, res) => {

    try {

        const newProject = new Project({

            title: req.body.title,

            description: req.body.description,

            github: req.body.github,

            image: req.body.image
        });

        await newProject.save();

        res.json({

            message: "Project Added 😎🔥"
        });

    } catch (error) {

        res.status(500).json({

            error: "Failed to add project"
        });
    }
});

/* GET ALL PROJECTS */

app.get("/projects", async (req, res) => {

    try {

        const projects = await Project.find();

        res.json(projects);

    } catch (error) {

        res.status(500).json({

            error: "Failed to fetch projects"
        });
    }
});

/* DELETE PROJECT */

app.delete("/delete-project/:id", async (req, res) => {

    try {

        await Project.findByIdAndDelete(req.params.id);

        res.json({

            message: "Project Deleted 😎🔥"
        });

    } catch (error) {

        res.status(500).json({

            error: "Delete failed"
        });
    }
});

/* UPDATE PROJECT */

app.put("/update-project/:id", async (req, res) => {

    try {

        await Project.findByIdAndUpdate(

            req.params.id,

            {

                title: req.body.title,

                description: req.body.description,

                github: req.body.github,

                image: req.body.image
            }
        );

        res.json({

            message: "Project Updated 😎🔥"
        });

    } catch (error) {

        res.status(500).json({

            error: "Update failed"
        });
    }
});

/* SERVER START */

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT} 🚀`);
});