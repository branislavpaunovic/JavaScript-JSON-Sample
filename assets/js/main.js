

fetch('assets/json/main.json') // Adjust the path to your JSON file as needed
  .then(response => response.json()) // Parse the JSON response
  .then(data => { // Use the data to populate the HTML elements
    document.getElementById('ime').textContent = data.ime; // Set the name
    document.getElementById('godine').textContent = data.godine; // Set the age
    document.getElementById('indeks').textContent = data.indeks; // Set the index
    document.getElementById('godina_upisa').textContent = data.godina_upisa; // Set the year of enrollment
    document.getElementById('freelancer').textContent = data.freelancer ? 'Da' : 'Ne'; // Set freelancer status

    const vestineLista = document.getElementById('vestine'); // Get the skills list element
    data.vestine.forEach(vestina => { // Iterate over each skill and create a list item
      const li = document.createElement('li'); // Create a new list item
      li.textContent = vestina; // Set the text content of the list item
      vestineLista.appendChild(li); // Append the list item to the skills list
    }); // Populate the skills list

    const tabela = document.getElementById('ocene'); // Get the table body element for grades
    data.ocene.forEach(o => { // Iterate over each grade object
      const tr = document.createElement('tr'); // Create a new table row
      tr.innerHTML = `<td>${o.predmet}</td><td>${o.ocena}</td>`; // Set the inner HTML of the row with subject and grade
      tabela.appendChild(tr); // Append the row to the table body
    }); // Populate the grades table
  }) // Handle any errors that occur during the fetch operation
  .catch(error => { // Log the error to the console
    console.error('Greška pri učitavanju JSON-a:', error);  // Log the error to the console
  });   // End of error handling

