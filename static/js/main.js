window.onload = () => {
  console.log('Clientside script loaded');
  const btn = document.querySelector('#load');
  btn.onclick = (e) => {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("output").innerHTML = this.responseText;
      }
    };
    xhr.open("GET", "/find?userName=moczka");
    xhr.send();
  };
};