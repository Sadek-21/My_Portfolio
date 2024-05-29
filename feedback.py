from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)

@app.route('/send-feedback', methods=['POST'])
def send_feedback():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    
    # Construct email message
    msg = MIMEMultipart()
    msg['From'] = email
    msg['To'] = 'mohsade2000@gmail.com'
    msg['Subject'] = 'Feedback from Portfolio Website'
    msg.attach(MIMEText(message, 'plain'))
    
    # Send email
    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(os.getenv('EMAIL_USER'), os.getenv('EMAIL_PASS'))
        server.sendmail(email, 'mohsade2000@gmail.com', msg.as_string())
    
    return jsonify({'message': 'Thank you for your feedback!'})

if __name__ == '__main__':
    app.run(ssl_context='adhoc')

