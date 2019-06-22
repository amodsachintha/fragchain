## Build Docker Image first
run this command in the directory where the **Dockerfile** is located. 
*i.e: fragchain/Dockerfile*

    docker build -t fragchain .
    docker network create --subnet=172.16.0.0/24 vault

## Then spin up a container from the image

    docker run -it --name fragchain --net vault --ip 172.16.0.10 -v ~/github/fragchain:/fragchain -p 3000:3000 -p 4444:4444 vault

  
**Ctrl + C** to stop the container or `docker stop fragchain`  
  
## to start the container  

    docker start -i fragchain
    
##  use docker-compose to orchestrate multiple containers
install docker-compose, then

    docker-compose up
