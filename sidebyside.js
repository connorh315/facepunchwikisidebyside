document.body.style.maxWidth = "none";
var timer = null;

var edit = document.getElementById("edit_value");
var display = document.getElementById("edit_display");
edit.style.maxWidth = display.style.maxWidth = "45%";

var container = document.createElement("div");
document.getElementsByTagName("form")[0].appendChild(container);
container.style.float = "right";

var previewButton = document.getElementById("previewbutton");
previewButton.click();

var preview = document.getElementById("preview");
preview.style.width = "50%";
preview.style.left = "unset";
container.appendChild(preview)

edit.addEventListener("input", (event) => {
	clearTimeout(timer);
	timer = setTimeout(function() {
		preview.classList.remove("shown");
		previewButton.click();
	}, 3000);
});