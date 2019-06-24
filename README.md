## Build Docker Image first
run this command in the directory where the **Dockerfile** is located. 
*i.e: fragchain/Dockerfile*

    docker build -t fragchain .
    docker network create --subnet=172.16.0.0/24 vault

## Then spin up a container from the image

    docker run -it --name node-1 --net vault --ip 172.16.0.10 -v ~/github/fragchain:/fragchain -p 3000 -p 4444 fragchain

  
**Ctrl + C** to stop the container or `docker stop node-1`  
  
## to start the container  

    docker start -i node-1
    
##  use docker-compose to orchestrate multiple containers
install docker-compose, then

    docker-compose up


## Runtime Log with 4 nodes
<html>
<pre><font color="#8AE234"><b>amod@amod-dev</b></font>:<font color="#729FCF"><b>~/github/fragchain</b></font>$ docker-compose up
Starting node-3 ... <font color="#4E9A06">done</font>
Starting node-4 ... <font color="#4E9A06">done</font>
Starting node-1 ... <font color="#4E9A06">done</font>
Starting node-2 ... <font color="#4E9A06">done</font>
Attaching to node-3, node-2, node-4, node-1
<font color="#06989A">node-3    |</font> <font color="#C4A000">[nodemon] 1.19.1</font>
<font color="#C4A000">node-2    |</font> <font color="#C4A000">[nodemon] 1.19.1</font>
<font color="#06989A">node-3    |</font> <font color="#C4A000">[nodemon] to restart at any time, enter `rs`</font>
<font color="#06989A">node-3    |</font> <font color="#C4A000">[nodemon] watching: *.*</font>
<font color="#06989A">node-3    |</font> <font color="#4E9A06">[nodemon] starting `node .`</font>
<font color="#06989A">node-3    |</font> Node Address: 172.16.0.30
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Initializing....</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Generating Genesis Block!</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Genesis block generated successfully!</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Local chain is at idx: 1</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">SocketIO Server started. Listening on 4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.10:4444/messenger</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.20:4444/messenger</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.40:4444/messenger</font>
<font color="#C4A000">node-2    |</font> <font color="#C4A000">[nodemon] to restart at any time, enter `rs`</font>
<font color="#C4A000">node-2    |</font> <font color="#C4A000">[nodemon] watching: *.*</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">App listening on port 3000!</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#C4A000">warn</font>: <font color="#C4A000">connect_error to server at: 172.16.0.20:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#3465A4">debug</font>: <font color="#3465A4">Error: xhr poll error</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.20</font>
<font color="#C4A000">node-2    |</font> <font color="#4E9A06">[nodemon] starting `node .`</font>
<font color="#C4A000">node-2    |</font> Node Address: 172.16.0.20
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Initializing....</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">SocketIO Server started. Listening on 4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.10:4444/messenger</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.20</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.30:4444/messenger</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.20</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.40</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.40:4444/messenger</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">App listening on port 3000!</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.20</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.20</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.40:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.10:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.20:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.40:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.40</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.40</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.40:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.40</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.30:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.10:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.40</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.20:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.10:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.20:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.40:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.20:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.20:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.40:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#4E9A06">node-4    |</font> <font color="#C4A000">[nodemon] 1.19.1</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.30:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.40:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.30:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#4E9A06">node-4    |</font> <font color="#C4A000">[nodemon] to restart at any time, enter `rs`</font>
<font color="#4E9A06">node-4    |</font> <font color="#C4A000">[nodemon] watching: *.*</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.40</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.40:4444</font>
<font color="#4E9A06">node-4    |</font> <font color="#4E9A06">[nodemon] starting `node .`</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.10:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.30:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.40:4444</font>
<font color="#4E9A06">node-4    |</font> Node Address: 172.16.0.40
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Initializing....</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">SocketIO Server started. Listening on 4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.30:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.40</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.10:4444/messenger</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.20:4444/messenger</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.40</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.40:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.30:4444/messenger</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.40</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">App listening on port 3000!</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.40</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.20</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:49 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.30</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.30:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.40:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.10:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.20:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.30</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.30</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.30:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.20:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.30</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.30</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.30</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.10:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.20:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.30:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.30:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.30</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.30</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.20</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.20</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.20:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.20</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.20</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.30:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.20:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.30</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.30</font>
<font color="#75507B">node-1    |</font> <font color="#C4A000">[nodemon] 1.19.1</font>
<font color="#75507B">node-1    |</font> <font color="#C4A000">[nodemon] to restart at any time, enter `rs`</font>
<font color="#75507B">node-1    |</font> <font color="#C4A000">[nodemon] watching: *.*</font>
<font color="#75507B">node-1    |</font> <font color="#4E9A06">[nodemon] starting `node .`</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:50 <font color="#C4A000">warn</font>: <font color="#C4A000">connect_error to server at: 172.16.0.10:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#3465A4">debug</font>: <font color="#3465A4">Error: xhr poll error</font>
<font color="#75507B">node-1    |</font> Node Address: 172.16.0.10
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Initializing....</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Generating Genesis Block!</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Genesis block generated successfully!</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Local chain is at idx: 1</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">SocketIO Server started. Listening on 4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.20:4444/messenger</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.30:4444/messenger</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">connect: http://172.16.0.40:4444/messenger</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">App listening on port 3000!</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.10</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.20:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.10</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.10</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.20:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.30:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.40:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.10:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.10:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.20</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.20</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.10:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.10:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.20:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.40:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.20:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.40:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.20</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.20</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.30</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.30</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.20</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.30</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.30:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.20:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.30:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.40:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.30:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.40:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.30:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.40:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.30</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.30</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.40:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.20:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.30:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.40:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.10</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.10</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.20:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.10</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.10</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.10</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.20</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.20</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.10</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.10:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.10:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.30</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.30</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.30:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.40:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.10</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.10</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.10</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.10</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.20:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.20:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.10:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.10</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.10</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.10</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.10</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.10</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.10</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.10</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.10</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.10:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.20</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.20</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.20</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.20</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.30</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.30</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.30</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.30</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.10:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.10:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.30:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.30:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.40:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.40:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Client connected: 172.16.0.40</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">Connected to server at: 172.16.0.10:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.10:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.20:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION to: 172.16.0.30:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.20:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 11</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.40</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.30:4444</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.40</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.40</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.40</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.40</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.40</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.10:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.40</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.40</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION from: 172.16.0.40</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_VERSION_RESPONSE to: 172.16.0.40</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.10:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_VERSION_RESPONSE from: 172.16.0.10:4444</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:52:51 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: chain_version: 1</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:59 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:52:59 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:53:00 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN from: 172.16.0.30</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:53:00 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:53:00 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:53:00 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_RESPONSE to: 172.16.0.30</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:53:00 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:53:00 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:53:00 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_RESPONSE from: 172.16.0.40:4444</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:53:00 <font color="#4E9A06">info</font>: <font color="#4E9A06">LENGTH_OF_RECEIVED_CHAIN: 11</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:53:00 <font color="#C4A000">warn</font>: <font color="#C4A000">******** LOCAL CHAIN REPLACED *****</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:53:00 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN from: 172.16.0.10</font>
<font color="#C4A000">node-2    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">send: SYNC_CHAIN_RESPONSE to: 172.16.0.10</font>
<font color="#06989A">node-3    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">recv: SYNC_CHAIN_RESPONSE from: 172.16.0.20:4444</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">LENGTH_OF_RECEIVED_CHAIN: 11</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:53:01 <font color="#C4A000">warn</font>: <font color="#C4A000">******** LOCAL CHAIN REPLACED *****</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#75507B">node-1    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>
<font color="#4E9A06">node-4    |</font> 2019-06-24 06:53:01 <font color="#4E9A06">info</font>: <font color="#4E9A06">Sync Chain Loop complete!</font>

</pre></html>