document.write("<p>HTML-DOS v1.00</p>")
document.write('<p id="iosoutput"></p>')
document.write('<input id="iosinput"/>')

var disk = null
fetch('https://adev531.github.io/HTMLDOS/disk.json')
    .then((response) => response.json())
    .then((json) => {
	console.log(json)
	disk = json
    });

var iosinput = document.getElementById('iosinput')
var iosoutput = document.getElementById('iosoutput')

iosoutput.innerHTML = disk["helloworld.txt"]

iosinput.addEventListener('keypress', function(e){
	var args = iosinput.value.split(" ")
	var command = args[0]
	if (e.keyCode === 13 || epy.which === 13) {
		e.preventDefault()
		if (command === "echo") {
			iosoutput.innerHTML += '<br>'
			args.forEach(function(arg){
				if (arg != command) {
					iosoutput.innerHTML += arg + ' '
				}
			});
		} else {
			iosoutput.innerHTML += "<br>no command named " + command + ".\n"
		}
	}
})

setInterval(function() {
		window.scrollBy(0,50)
}, 1)
