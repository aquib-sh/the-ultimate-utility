from remote_terminal import Terminal

shell = Terminal()
command = "cd backend && dir"
output = shell.execute(command)
print(output)

