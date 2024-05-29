from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/send-feedback', methods=['POST'])
def send_feedback():
    name = request.form['name']
    email = request.form['email']
    message = request.form['message']
    
    # Here you can add the code to handle the form data
    # For example, save the data to a database or send an email
    
    return jsonify({'message': 'Thank you for your feedback!'})

if __name__ == '__main__':
    app.run(ssl_context='adhoc')
