$(document).ready(function() {
  //$("#planView").toggle('hide');
})

$("#showPatient").click(function() {
	$("#pageTop").toggle('show');
	console.log("Show");
});

////////////////////////
/////////// Image Drag
var dropzone = document.querySelector('#droparea');
var draggedElements = document.querySelectorAll('div.node');
var elementDragged = null;

for (var i = 0; i < draggedElements.length; i++) {
	draggedElements[i].addEventListener('dragstart', function(e) {
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData("Text", e.target.innerText);
    elementDragged = this;
  });

  // Event Listener for when the drag interaction finishes.
  draggedElements[i].addEventListener('dragend', function(e) {
    elementDragged = null;
  });

};


droparea.addEventListener('dragover', function(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  e.dataTransfer.dropEffect = 'copy';

  return false;
});

// Event Listener for when the dragged element enters the drop zone.
droparea.addEventListener('dragenter', function(e) {
  this.className = "over";
});

// Event Listener for when the dragged element leaves the drop zone.
droparea.addEventListener('dragleave', function(e) {
  this.className = "";
});

// Event Listener for when the dragged element dropped in the drop zone.
droparea.addEventListener('drop', function(e) {
  if (e.preventDefault) e.preventDefault();
  if (e.stopPropagation) e.stopPropagation();
  console.log("dropped");
  this.className = "";
  //  this.innerHTML =  e.dataTransfer.getData('text');
  $(this).append('<h3><span class="label label-default">' + e.dataTransfer.getData('text') + '</span></h3>')
  // Remove the element from the list.
  //document.querySelector('#draggable').removeChild(elementDragged);

  return false;
});


$("#build").click(function() {
  $("#planDrag").toggleClass('show');
  $("#planView").toggleClass('hide');
});

$("#input").click(function() {
  $("#planDrag").toggleClass('hide');
  $("#planView").toggleClass('show');
});

$("#addtime").click(function() {
  var html = '<div class="col-xs-3 top25"><select class="form-control"><option>+1 m</option><option>+2 m</option></select></div>';
  $("#timeline1").append(html);
  console.log("test");
});


