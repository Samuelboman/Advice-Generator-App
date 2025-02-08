# Advice Generator App

This is a simple web application that fetches random pieces of advice using the [Advice Slip API](https://api.adviceslip.com/). Users can click a button to generate new advice.

## Features
- Fetches random advice from an external API
- Displays advice dynamically on the webpage
- Responsive design for mobile and desktop
- Simple and clean UI

## Technologies Used
- HTML
- CSS
- JavaScript (ES6+)
- Fetch API

## Getting Started

### Prerequisites
Ensure you have a web browser installed.

### Installation
1. Clone the repository or download the project files:
   ```sh
   git clone https://github.com/your-username/advice-generator-app.git
Navigate to the project folder and open index.html in a browser.
Usage
Open the webpage.
Click the dice button to generate a random piece of advice.
Enjoy the wisdom! ✨
Project Structure
bash
Copy
Edit
project-folder/
│── index.html       # Main HTML file
│── style.css        # Stylesheet
│── script.js        # JavaScript file
│── pattern-divider-desktop.svg  # Divider image
│── icon-dice.svg    # Button icon
│── images/          # Folder for other images
API Reference
The project uses the Advice Slip API:

Endpoint: https://api.adviceslip.com/advice
Method: GET
Response Format: JSON
json
Copy
Edit
{
  "slip": {
    "id": 117,
    "advice": "Your random advice goes here."
  }
}
License
This project is open-source and available for modification and distribution.

Author
SAMUEL BOMAN