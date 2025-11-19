//your JS code here. If required.
document.getElementById('id-submit').addEventListener('click', function () {
      
      const title = document.getElementById('id-title').value;
      const author = document.getElementById('id-author').value;
      const isbn = document.getElementById('id-isbn').value;

      if(title === "" || author === "" || isbn === ""){
        alert("Please fill all the fields!");
        return;
      }

      // Create row
      const row = document.createElement('tr');

      row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">&times</button></td>
      `;

      document.getElementById('id-book-list').appendChild(row);

      // clear input fields
      document.getElementById('id-title').value = "";
      document.getElementById('id-author').value = "";
      document.getElementById('id-isbn').value = "";
    });

    // Delete row using event delegation
    document.getElementById('id-book-list').addEventListener('click', function(e){
      if(e.target.classList.contains('delete')){
        e.target.parentElement.parentElement.remove();
      }
    });