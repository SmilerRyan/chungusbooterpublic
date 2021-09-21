const fs = require('fs');

//fs.writeFile('decoded.html', ``, ()=>{});
//fs.writeFile('decoded.html', CODE);

try {
    const data = fs.readFileSync('index.html').toString();
	
	var runnable;
	runnable = data;
	runnable = runnable.replace('<script', '// <script');
	runnable = runnable.replace('\n</script>', '\n// </script>');
	//runnable = runnable.replace('document.write', 'console.log');
	runnable = runnable.replace('document.write(', 'fs.writeFileSync(\'decoded.html\', ');
	
	console.log(runnable);
	eval(runnable);
} catch (err) {
    console.error(err);
}