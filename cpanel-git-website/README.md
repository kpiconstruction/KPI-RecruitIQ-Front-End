# cPanel Git Website

This project is designed to facilitate the deployment of a website using Git with cPanel. Below are the details of the project structure and its components.

## Project Structure

```
cpanel-git-website
├── src
│   ├── index.html        # Main HTML document for the website
│   ├── about.html        # About page HTML
│   ├── css
│   │   └── styles.css    # CSS styles for the website
│   └── js
│       └── main.js       # JavaScript for interactivity
├── .cpanel.yml           # cPanel configuration file
├── .htaccess              # Web server configuration
├── .gitignore             # Git ignore file
├── deploy.sh              # Deployment script for cPanel
├── LICENSE                # Licensing information
└── README.md              # Project documentation
```

## Setup Instructions

1. **Clone the Repository**: 
   Clone this repository to your local machine using Git.

   ```bash
   git clone <repository-url>
   ```

2. **Navigate to the Project Directory**:
   Change into the project directory.

   ```bash
   cd cpanel-git-website
   ```

3. **Install Dependencies**:
   If there are any dependencies required for the project, install them as per the instructions provided in the respective files.

4. **Modify Configuration**:
   Update the `.cpanel.yml` file with your specific deployment settings.

5. **Deploy the Website**:
   Run the deployment script to push changes to cPanel.

   ```bash
   ./deploy.sh
   ```

## Usage Guidelines

- The `src/index.html` file serves as the entry point for the website.
- The `src/about.html` file contains information about the website or project.
- CSS styles are defined in `src/css/styles.css`, and JavaScript functionality is handled in `src/js/main.js`.

## License

This project is licensed under the terms specified in the LICENSE file. Please refer to it for more information on usage and distribution rights.