const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
	res.status(302).redirect(`https://github.com/x43romp/`);
});

app.listen(port, () => {
	console.log(`Server started on port ${port}`);
});
