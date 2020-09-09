import subprocess

""" 
AUTHOR: SHAIKH AQUIB

THIS CLASS WILL BE USED TO EXECUTE THE REMOTE TERMINAL COMMANDS USING FLASK API
"""

class Terminal:
    def execute(self, command):
        
        script = command.split()
        process = None

        try:
            if len(script) >= 1:
                process = subprocess.run(script, shell=True, capture_output=True)
        except:
            pass

        output = process.stdout
        error = process.stderr
        
        if(output != b''):
            return output.decode()
        return error.decode() 