import express from "express";
const app = express();

app.get("/", (req, res) => {
	res.send("your response accepted");
});

app.get("/login", (req, res) => {
	const HIT = +1;
	console.log(`Someone want to login ${HIT}`);
	res.send("This you login page");
});

app.get("/api/jokes", (req, res) => {
	const jokes = [
		{ id: 1, title: "A first joke", content: "the first joke" },
		{ id: 2, title: "A Second joke", content: "the second joke" },
		{ id: 3, title: "A Third joke", content: "the third joke" },
		{ id: 4, title: "A fourth joke", content: "the fourth joke" },
	];
	console.log(jokes.id);
	res.send(jokes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server at http://localhost:${PORT}`);
});
