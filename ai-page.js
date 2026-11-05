window.onLoad = ChangeImage;

let graphs = ["Images/graph1.png", "Images/graph2.webp", "Images/graph3.png"]
setInterval(ChangeImage, 5000);
let changes = 0;
function ChangeImage()
{
	console.log("changing image");
	let img = document.getElementById("changingImage");
	img.src = graphs[changes % graphs.length];
	changes++;
}