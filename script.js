function toggleNavbar() {
    const navbarLinks = document.getElementById('navbarLinks');
    navbarLinks.classList.toggle('active');
  }
  function toggleSearchBar() {
    const searchBar = document.querySelector('.search-bar');
    searchBar.classList.toggle('active');
    if (searchBar.classList.contains('active')) {
      searchBar.focus();
    }
  }

  function goBack() {
    window.history.back();
  }

  function handleSearch(event) {
    if (event.key === 'Enter') {
      window.location.href = '404.html'; // Navigate to the 404 error page
    }
  }

  const loginPopover = document.getElementById('login-popover1');
  function openLoginPopover() {
    console.log('Opening login popover'); // Debugging message
    loginPopover.style.display = 'block';
  }
    
  const profilePicture = document.querySelector('.profile-picture');
  
  function closeLoginPopover() {
      loginPopover.style.display = 'none';
    }
  
    // Close login popover when the user clicks outside of it
    window.onclick = function(event) {
      if (event.target === loginPopover) {
        closeLoginPopover();
      }
    };
  
    // Handle form submission
    const form = document.getElementById('login-form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission for demonstration purposes
      
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Dummy check (Replace with your actual login logic)
      if (username === 'user' && password === 'password') {
        alert('Login successful!');
        closeLoginPopover(); // Close the popover after successful login
        profilePicture.src = "./asset/1656.png"; // Update profile picture
      } else {
        alert('Invalid username or password. Please try again.');
      }
    });
  