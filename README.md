# wings-hackathon-5

- Phishing refers to an attempt to steal sensitive information, typically in the form of usernames, passwords, credit card numbers, bank account information.
- Phishing attacks have emerged as a significant and persistent threat
- Aim to trick unsuspecting users into divulging sensitive information, such as login credentials, financial details etc

## Approach

- Datasets containing phishing and legitimate websites is collected from the open-source platform PhishTank.
- Server is designed to extract the required features from the URLs scraped from the web pages and perform classification.
- Chrome extension to scrape and fetch URLs present on the webpage

## Installation

To run the project, follow these steps:

Clone the repository:

```bash
git clone https://github.com/pratikwayal01/Phishing_link_detection_extention-.git
```

Change to the project directory:

```bash
cd Phishing_link_detection_extention
```

Create a virtual environment:

```bash
python3 -m venv env
```

Activate the virtual environment:

```bash
source env/bin/activate
```

Install the required dependencies:

```bash
pip install -r requirements.txt
```

Run the main Python script:

```bash
python main.py
```
