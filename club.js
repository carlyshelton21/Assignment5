function c() { // Declared a function
  document.getElementById("c");
}
 function c(){
  // create div
  var c = document.createElement("div");
  //class to div
  c.classList.add("c");
  // insert div into the document
  var container = document.getElementById("container");
  container.appendChild(c);
} // Calling the function

for (i = 0; i < c.length; i++) {
    c[i].classList.add('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(c){
            this.style.backgroundColor = 'blue';
            }
        );
    }
