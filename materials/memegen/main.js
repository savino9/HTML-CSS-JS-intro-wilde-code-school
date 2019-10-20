function update_text() {
  // set a variable with the input field value by grabbing it's id
  var userText = document.getElementById("userText");
  // set a variable for the meme text div by grabbing it's id
  var memeText = document.getElementById("memeText");
  // set the example text to equal the form filed value text
  memeText.innerHTML = userText.value;
}

function update_image() {
  var img = document.querySelector('img');
  var file = document.querySelector('input[type=file]').files[0];
  img.src = window.URL.createObjectURL(file);
}

// Advanced step
document.getElementById('saveMeme').addEventListener('click', function() {
  // get the memePicture html block by id
  html2canvas(document.getElementById('memePicture'), {
    //allow html2canvas to see other images in a canvas
    allowTaint: true,
    logging: true,
    profile: true,
    useCORS: true
  })
    // generate HTML canvas 
    .then(function(canvas) {
      console.log(canvas);
    //choose image format for output and put img in canvas
    var data = canvas.toDataURL('image/jpeg', 1);
    var src = encodeURI(data);
    // put img in the src attribute to set the image
    document.getElementById('screenshot').src = src;
    
    // print out the size of the image
    //document.getElementById('size').innerHTML = src.length + ' bytes';
  });
  
});
