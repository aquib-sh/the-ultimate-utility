from ipwhois import IPWhois
from remote_terminal import Terminal

""" 
AUTHOR: SHAIKH AQUIB
THIS CLASS WILL LOOP UP IP AND DOMAIN NAMES FOR INFORMATION

"""

class IPLookup():
    def look(self, ip):
        obj = IPWhois(ip)
        return obj.lookup_whois()

class NSLookup():
    def look(self, host):
        shell = Terminal()
        output = shell.execute('nslookup '+host)
        return output