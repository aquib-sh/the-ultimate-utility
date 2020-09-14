from flask import Flask, request, send_file
from flask_restful import fields, Resource, reqparse, marshal_with, Api
from remote_terminal import Terminal
from qr import QR
from lookup import IPLookup, NSLookup
from flask_cors import CORS

app = Flask(__name__)
app.config['ENV'] = 'production'

api = Api(app)

cors = CORS(app, resources={r"/*": {"origins": "*"}})


#@app.after_request
#
#def after_request(response):
#  response.headers.add('Access-Control-Allow-Origin', '*')
#  response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization,command')
#  response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
#  return response

# Remote-terminal POST request arguments
terminal_args = reqparse.RequestParser()
terminal_args.add_argument('command',type=str,help="Enter the commands",required=True)

# QRCode-generator POST request arguments
qr_args = reqparse.RequestParser()
qr_args.add_argument('data',type=str,help="Enter data for generation",required=True)

# Lookup POST requests arguments
lookup_args = reqparse.RequestParser()
lookup_args.add_argument('target',type=str,help="Enter target ip or host",required=True)

class RemoteTerminal(Resource):
    def __init__(self):
        self.terminal = Terminal()

    def post(self):
        args = terminal_args.parse_args()
        output =  self.terminal.execute(args['command'])
        return output, 201,{'Access-Control-Allow-Origin': '*'}

class QRCode(Resource):
    def __init__(self):
        self.qr = QR()

    def post(self):
        args = qr_args.parse_args()
        image_path = self.qr.create(args['data'])
        return send_file(image_path) 

class Lookup(Resource):
    def __init__(self):
        self.ip_lookup = IPLookup()
        self.ns_lookup = NSLookup()

    def post(self, type_):
        args = lookup_args.parse_args()
        output = ""
        if type_ == "iplookup":
            output = self.ip_lookup.look(args['target'])
        elif type_ == "nslookup":
            output = self.ns_lookup.look(args['target'])
        return output

api.add_resource(RemoteTerminal,"/terminal")
api.add_resource(QRCode,"/qr")
api.add_resource(Lookup,"/lookup/<string:type_>")

if __name__ == "__main__":
    app.run(host="0.0.0.0")
