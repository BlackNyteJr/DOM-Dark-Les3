function toggleDarkMode() {
    const body = document.getElementById('body');
    const date = new Date();
    const currentHour = date.getHours();
    const currentTime = date.toLocaleTimeString(); // Get current time in readable format
  
    // Check if the toggle is already manually changed
    const isToggleChecked = document.getElementById('themeToggle').checked;
  
    // Variables to store dark mode status
    let isDarkMode = false;
  
    // Debugging: Log the current hour and toggle status
    console.log(`Current Time: ${currentTime}`);
    console.log(`Current Hour: ${currentHour}`);
    console.log(`Toggle Checked: ${isToggleChecked}`);
  
    // If manually toggled, use the switch value instead of time
    if (isToggleChecked) {
      body.classList.add('dark');
      isDarkMode = true;
    } else {
      // Time-based dark mode (if not manually toggled)
      if (currentHour >= 19 || currentHour < 7) {
        body.classList.add('dark');
        isDarkMode = true;
      } else {
        body.classList.remove('dark');
        isDarkMode = false;
      }
    }
  
    // Update the debug info (time and dark mode status)
    document.getElementById('currentTime').innerText = currentTime;
    document.getElementById('darkModeStatus').innerText = isDarkMode ? 'True' : 'False';
  
    // Debugging: Log the dark mode status
    console.log(`Dark Mode Enabled: ${isDarkMode}`);
  }
  
  // Toggle dark mode on switch change
  document.getElementById('themeToggle').addEventListener('change', function() {
    const body = document.getElementById('body');
    if (this.checked) {
      body.classList.add('dark');
    } else {
      body.classList.remove('dark');
    }
    // Update immediately when manually toggled
    toggleDarkMode();
  });
  
  // Call the function when the page loads
  document.addEventListener('DOMContentLoaded', function() {
    toggleDarkMode();
  });
  
  // Optional: Check periodically (e.g., every second for testing) in case the user leaves the page open
  // Change back to 60000 (1 minute) after verifying functionality
  setInterval(toggleDarkMode, 1000);