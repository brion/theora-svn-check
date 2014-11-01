var videoTable = document.getElementById('videos');

var files = [
	'black-hole.ogv',
	'curiosity.ogv',
	'descenso.webm',
	'jarry.ogv',
	'lutra-lutra.ogv',
	'x-47b.ogv'
];
var suffix = '.360p.ogv';

function addVideo(filename, subdir) {
	var video = document.createElement('video');
	video.src = subdir + '/' + filename + suffix;
	video.width = 640;
	video.height = 360;
	video.load();
	return video;
}

function addControls(row) {
	var videoList = row.querySelectorAll('video');
	var videos = [];
	for (var i = 0; i < videoList.length; i++) {
		videos.push(videoList[i]);
	}

	var div = document.createElement('div');
	var playButton = document.createElement('button');
	var pauseButton = document.createElement('button');
	var rewindButton = document.createElement('button');

	playButton.textContent = 'Play';
	pauseButton.textContent = 'Pause';
	rewindButton.textContent = 'Rewind';

	playButton.addEventListener('click', function() {
		videos.forEach(function(video) {
			video.play();
		});
	});
	pauseButton.addEventListener('click', function() {
		videos.forEach(function(video) {
			video.pause();
		});
	});
	rewindButton.addEventListener('click', function() {
		videos.forEach(function(video) {
			video.currentTime = 0.0;
		});
	});

	div.appendChild(playButton);
	div.appendChild(pauseButton);
	div.appendChild(rewindButton);
	return div;
}

function addEntry(filename) {
	var row = document.createElement('tr');
	var cellStock = document.createElement('td');
	var cellControls = document.createElement('td');
	var cellSvn = document.createElement('td');
	row.appendChild(cellStock);
	row.appendChild(cellControls);
	row.appendChild(cellSvn);

	cellStock.appendChild(addVideo(filename, 'stock'));
	cellSvn.appendChild(addVideo(filename, 'svn'));
	cellControls.appendChild(addControls(row));

	videoTable.appendChild(row);
}

files.forEach(function(filename, i) {
	addEntry(filename);
});

