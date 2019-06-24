navigator.getUserMedia({video: true}, function(stream) {
  setTimeout("self.close()", 5000 ) 
    var video = document.getElementById("a");
    var canvas = document.getElementById("c");
    var canvas2 = document.getElementById("d");
    context = canvas2.getContext('2d')
    var button = document.getElementById("b");

    video.srcObject = stream;
  video.play();
    button.disabled =false;
    button.onclick = function() {
        canvas.getContext("2d").drawImage(video, 0, 0, 600, 600, 0, 0, 600, 600);
        var img = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
       context.drawImage(canvas,0,0,600,600);
       downloadImage(img);
     //  window.open(img)
       //window.location.href=img;
      //  download(img,"test","image/png");
        alert("Picture taken");
        //window.location.replace(img)
        window.close()
    };
}, function(err) { alert("there was an error " + err)});

function downloadImage(data, filename = 'untitled.png') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}