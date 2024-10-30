// const { log } = require("console");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const methodOverride = require("method-override");
const { v4: uuidv4 } = require('uuid');


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"))
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let posts = [
    {
        id: uuidv4(),
        username: "apna college",
        contant: "we are doing coding!",
    },

    {
        id: uuidv4(),
        username: "shradh khapra",
        contant: "i teach backend development!"
    },

    {
        id: uuidv4(),
        username: "rahul kumar",
        contant: "i got selected for my 1st internship!",
    },

    {
        id: uuidv4(),
        username: "priyanshi",
        contant: "i learn coding by apna college!"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts });
})

app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});
app.post("/posts", (req, res) => {
    let { username, contant } = req.body;
    let id = uuidv4();
    posts.push({ id, username, contant });
    res.redirect("/posts");
});

app.get("/posts/:id", (req, res) => {
    let { id } = req.params;
    console.log(id);

    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});


app.patch("/posts/:id", (req, res) => {
    let { id } = req.params;
    let newcontant = req.body.contant;
    let post = posts.find((p) => id === p.id);
    console.log(id);
    console.log(newcontant);


    post.contant = newcontant;
    console.log(post);
    res.redirect("/posts");


    res.send("patch request was recieve");

});

app.get("/posts/:id/edit",(req,res) => {
    let { id } = req.params;
    let post = posts.find((p) => id === p.id);
res.render("edit.ejs",{post});
})


app.delete("/posts/:id", (req,res) => {
    let { id } = req.params;
    posts = posts.find((p) => id === p.id);
    res.send("delete post")
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log("listening to port : 8080");

});