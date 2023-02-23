let button = document.querySelector(".b");
button.addEventListener("click", () => {
    let cont = document.getElementById('content').value;
    const data = {
      cont
    }
    axios.post('https://firebasestorage.googleapis.com/v0/b/anything-3ff36.appspot.com/o/data.json', data);
})