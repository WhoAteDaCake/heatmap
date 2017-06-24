const fs = require('fs');
const path = require('path');
const chalk = require('chalk');


const missing = chalk.yellow;
const error = chalk.red;
const DEV = process.env.NODE_ENV === 'development';

if (typeof process.env.NODE_ENV === 'undefined') {
	console.log(
		`${missing('NODE_ENV')} not found, assuming to be 'production'`);
}

function difference(arr1, arr2) {
	const a1 = arr1.slice();
	const a2 = arr2.filter((val) => {
		if (a1.includes(val)) {
			a1.splice(a1.indexOf(val), 1);
			return false;
		}
		return true;
	});
	return [a1, a2];
}

function readDependencies() {
	const route = path.join(process.cwd(), 'package.json');
	const deps = JSON.parse(
		fs.readFileSync(route, 'utf-8'));
	return {
		dev: Object.keys(deps.devDependencies),
		norm: Object.keys(deps.dependencies),
	};
}

function checkDependencies(dep) {
	const route = path.join(process.cwd(), '/node_modules/');
	fs.readdir(route, (err, resp) => {
		const diff = difference(dep, resp);
		if (diff[0].length !== 0) {
			const msg = 'Missing the following packages:';
			console.log(
				chalk.styles.white.open + msg + chalk.styles.white.close);
			diff[0].map(d => console.log(error(d)));
		}
	});
}

// console.log(process.env.NODE_ENV);
const deps = readDependencies();
checkDependencies(deps.norm);
if (DEV) {
	checkDependencies(deps.dev);
}