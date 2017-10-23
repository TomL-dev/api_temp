let express = require('express');
let fs = require('fs');

let app = express();

let readTemperature = function () {
	fs.readFile('/sys/class/thermal/thermal_zone0/temp', 'utf8', function (err, data) {
		if (err) {
			return console.log(err);
		}
		console.log(data);
	});
}	
app.get('/', (req, res) => {
	res.status(200).send({ 'message': 'base' });
});

app.listen(3001, () => {
	console.log("started on port 3001");
});