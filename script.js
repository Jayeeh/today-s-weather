// Define the function showWeather with two parameters: high and low
function showWeather(high, low) {
    // Print the string "Today's Weather:" to the console
    console.log("Today's Weather:");
    
    // Print the high temperature to the console
    // The ${high} is a placeholder that gets replaced with the value of the high parameter
    console.log(`High: ${high}`);
    
    // Print the low temperature to the console
    // The ${low} is a placeholder that gets replaced with the value of the low parameter
    console.log(`Low: ${low}`);
  }
  
  // Call the showWeather function with the arguments 45 and 32
  // Inside the function, high will be 45 and low will be 32
  showWeather(45, 32);
  
  // Expected output:
  // Today's Weather:
  // High: 45
  // Low: 32
  