function llogarit(){
    let emri = document.getElementById("emri").value;
    let mbiemri = document.getElementById("mbiemri").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let cpass = document.getElementById("cpass").value;
    let tel = document.getElementById("tel").value;
    let mosha = document.getElementById("mosha").value; 
    
    var fnamepatt = /^[A-Z]{1}[a-z]{1,}$/;
    if(fnamepatt.test(emri) == false){
        document.getElementById("emri").value = "";   
    }
    
    var lnamepatt = /^[A-Z]{1}[a-z]{1,}$/;
    if(lnamepatt.test(mbiemri) === false){
        document.getElementById("mbiemri").value = "";
    }
    
    var emailpatt = /^[a-z]{1,}\w*@[a-z]{1,}\.[a-z]{2,}$/i
    if(emailpatt.test(email) === false){
        document.getElementById("email").value = "";
    }
    
    if(pass.length < 8){
        document.getElementById("pass").value = "";
    }
    
    if(document.getElementById("cpass").value !== document.getElementById("pass").value){
        document.getElementById("cpass").value = "";
    }
    
    var telpatt = /^06[789]\-\d{7}$/;
    if(telpatt.test(tel) === false){
        document.getElementById("tel").value = "";
    }
    
    
    
    
    
    
    
    
    if(fnamepatt.test(emri) && lnamepatt.test(mbiemri) && emailpatt.test(email) && telpatt.test(tel) && pass.length > 7 && document.getElementById("pass").value === document.getElementById("cpass").value && document.getElementById("mosha").value > 17 && (document.getElementById("lux").checked || document.getElementById("sport").checked) && (document.getElementById("male").checked || document.getElementById("female").checked || document.getElementById("other").checked) && (document.getElementById("car").value === 'a4' || document.getElementById("car").value === 'a6' || document.getElementById("car").value === 'a8' || document.getElementById("car").value === '3series' || document.getElementById("car").value === '5series' || document.getElementById("car").value === '7series' || document.getElementById("car").value === 'c' || document.getElementById("car").value === 'e' || document.getElementById("car").value === 's')){
      play();
      popUp();
      document.getElementsByTagName("a")[0].innerHTML = "Click me to find your car suggestion";
    
    
    
      if(document.getElementById("mosha").value < 30 && document.getElementById("lux").checked && document.getElementById("sport").checked==false){
        document.getElementById("linku").setAttribute("href", "c.html")
        }
        else if(document.getElementById("mosha").value < 50 && document.getElementById("mosha").value >= 30 && document.getElementById("lux").checked && document.getElementById("sport").checked==false){
        document.getElementById("linku").setAttribute("href", "e.html")
        }
        else if(document.getElementById("mosha").value > 50 && document.getElementById("lux").checked && document.getElementById("sport").checked==false){
        document.getElementById("linku").setAttribute("href", "s.html")
        }
        else if(document.getElementById("mosha").value < 30 && document.getElementById("sport").checked && document.getElementById("lux").checked==false){
        document.getElementById("linku").setAttribute("href", "3series.html")
        }
        else if(document.getElementById("mosha").value < 50 && document.getElementById("mosha").value >= 30 && document.getElementById("sport").checked && document.getElementById("lux").checked==false){
        document.getElementById("linku").setAttribute("href", "5series.html")
        }
        else if(document.getElementById("mosha").value > 50 && document.getElementById("sport").checked && document.getElementById("lux").checked==false){
        document.getElementById("linku").setAttribute("href", "7series.html")
        }
        else {
         if(document.getElementById("mosha").value < 30){
        document.getElementById("linku").setAttribute("href", "a4.html")
        }
          else if(document.getElementById("mosha").value < 50 && document.getElementById("mosha").value >= 30){
        document.getElementById("linku").setAttribute("href", "a6.html")
        }
          else if(document.getElementById("mosha").value > 50){
        document.getElementById("linku").setAttribute("href", "a8.html")
        }}
    
    
    
    }
    }
    
    
    
    
    
    
    
    
    
    
    
    function checkboxes(){
    var checkboxes = document.getElementsByName("njohuri[]");
    var isChecked = false;
    for(let i = 0; i < checkboxes.length; i++ ){
        if(checkboxes[i].checked){
            isChecked = true;
            break;
        }
    }
    if(isChecked === false){
        alert("Enter your car preference");
        return false;
    }
    return true;
    }
    
    function radios(){
    
    var radios = document.getElementsByName("gjinia[]");
    var ischecked = false;
    for(let i = 0; i < radios.length; i++ ){
        if(radios[i].checked){
            ischecked = true;
            break;
        }
    }
    if(ischecked === false){
        alert("Enter your gender");
        return false;
    }
    return true;
    }
    function play(){
        const audioElement = document.querySelector('#audio');
        audioElement.play();
    }
    
    
    function nr(e){
        event.preventDefault();
    }
    
    
    
    
    
    
    
    
    
    
    var worker = new Worker('fileupload.js');
     worker.onmessage = function(e) {
     alert(e.data);
    }
    worker.onerror =werror;
    function werror(e) {
      console.log('ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message);
     }
    function handleFileSelect(evt) {
     evt.stopPropagation();
     evt.preventDefault();
    
     var files = evt.dataTransfer.files||evt.target.files;
     // FileList object.
     
     worker.postMessage({
     'files' : files
     });
     //Sending File list to worker
     // files is a FileList of File objects. List some properties.
     var output = [];
     for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ', f.size, ' bytes, last modified: ', f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a', '</li>');
     }
     document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
    }
    
    function handleDragOver(evt) {
     evt.stopPropagation();
     evt.preventDefault();
     evt.dataTransfer.dropEffect = 'copy';
     // Explicitly show this is a copy.
    }
    
    // Setup the dnd listeners.
    var dropZone = document.getElementById('drop_zone');
    dropZone.addEventListener('dragover', handleDragOver, false);
    dropZone.addEventListener('drop', handleFileSelect, false);
     document.getElementById('files').addEventListener('change', handleFileSelect, false);
    
    
    
    
    
    
    
    
    
    
    
    
    
     var file = [], p = true;
    function upload(blobOrFile) {
     var xhr = new XMLHttpRequest();
     xhr.open('POST', '/server', false);
     xhr.onload = function(e) {
     };
     xhr.send(blobOrFile);
    }
    
    function process() {
     for (var j = 0; j <file.length; j++) {
      var blob = file[j];
    
      const BYTES_PER_CHUNK = 1024 * 1024;
    //   1MB chunk sizes.
      const SIZE = blob.size;
    
      var start = 0;
      var end = BYTES_PER_CHUNK;
    
      while (start < SIZE) {
    
       if ('mozSlice' in blob) {
        var chunk = blob.mozSlice(start, end);
       } else {
        var chunk = blob.webkitSlice(start, end);
       }
    
       upload(chunk);
    
       start = end;
       end = start + BYTES_PER_CHUNK;
      }
      p = ( j = file.length - 1) ? true : false;
      self.postMessage(blob.name + " Uploaded Succesfully");
     }
    }
    
    
    self.onmessage = function(e) {
    
    for (var j = 0; j < e.data.length; j++)
      files.push(e.data[j]);
    
     if (p) {
      process()
     }
    
    }
    
    function hiq(){
        const modal = document.getElementsByClassName('modal')[0];
        modal.style.display = 'none';
    }
    
    function popUp(){
        const modal = document.getElementsByClassName('modal')[0];
        modal.style.display = 'block' 
    }