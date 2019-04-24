## Hacker Story.

chessLang is a simple FEN rendering chess board, which take input of the FEN string and renders it to the board. 


### Frontend.
Make sure you have node and npm isntalled.
Open an other terminal and cd into the frontend directory inside the project root directory.

#### Install dependencies and start the server.

npm install

npm start

open browser and fire localhost:3000 to see your react-app running.

### Production setup.

In production nginx will be pointing to build folder in frontend directory.
cmd: npm build
In the server frontend directory for getting the build.

the nginx configuration is as follows
```

server {
        listen 80;
        listen [::]:80;
        location = /favicon.ico { access_log off; log_not_found off; }
        root /path/to/your/build/folder;
        server_name ['domain name /ip'];
        index index.html index.htm index.nginx-debian.html;


        location / {
                # First attempt to serve request as file, then
                # as directory, then fall back to displaying a 404.
                try_files $uri /index.html;
        }
}
```
### Built With

* React (using create-react-app setup)
* chessgroundJS (library for rendering the chess board)

### License
This project is licensed under the MIT License - see the LICENSE.md file for details


