
//  * @name: Gunther
//  * @Course Code: SODV1201
//  * @class: Software Development Diploma program.
//  * @author: Gunther Santos.  
 


// Add an event listener to the form to handle the submit event
document.getElementById('registrationForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  try {
      // Get the values from the form fields and convert them to lowercase
      const username = document.getElementById('username').value.toLowerCase();
      const name = document.getElementById('name').value.toLowerCase();
      const email = document.getElementById('email').value.toLowerCase();
      const password = document.getElementById('password').value;

      // Validation checks
      if (!username || !name || !email || !password) {
          throw new Error('Please fill in all fields.'); // Check if any field is empty
      }
      if (username.length < 5) {
          throw new Error('Username must be at least 5 characters long.'); // Check username length
      }
      if (name.length < 3) {
          throw new Error('Name must be at least 3 characters long.'); // Check name length
      }
      const passwordPattern = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/;
      if (!passwordPattern.test(password)) {
          throw new Error('Password must contain alphanumeric and special characters.'); // Check password pattern
      }
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
          throw new Error('Please enter a valid email address.'); // Check email format
      }
      const numberPattern = /^\d+$/;
      if (numberPattern.test(username) || numberPattern.test(name)) {
          throw new Error('Username and Name cannot be only numbers.'); // Check if username or name is only numbers
      }

      // Get the student list element
      const studentList = document.getElementById('studentList');
      // Create a new list item for the student
      const listItem = document.createElement('li');
      listItem.textContent = `Username: ${username}, Name: ${name}, Email: ${email}`;

      // Create a delete button for the list item
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
          studentList.removeChild(listItem); // Remove the list item when the delete button is clicked
      });

      // Append the delete button to the list item
      listItem.appendChild(deleteButton);
      // Append the list item to the student list
      studentList.appendChild(listItem);

      // Reset the form fields
      document.getElementById('registrationForm').reset();
  } catch (error) {
      alert(error.message); // Display an error message if validation fails
  }
});
