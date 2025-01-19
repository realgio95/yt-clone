# yt-clone
This is a Youtube clone using multiple backend cloud services.

## Build and Run the Docker Image
To build your image, navigate to the directory that has your Dockerfile and run the following command:
`docker build -t video-processing-service .`

List Docker images
`docker images`

Now, to run the image, use the docker run command:
`docker run -p 3000:3000 -d video-processing-service`

The -p flag redirects a public port to a private port inside the container.
The -d flag runs the container in detached mode, leaving the container running in the background.

## Clean Up
To list the running containers run:
`docker ps`

To stop a running container run:

`docker stop <container-id-or-name>`

To list all containers, even those that have been stopped, run:
`docker ps -a`

To remove a container run:
`docker rm <container-id-or-name>`

## Copy file from local to docker container file system
docker cp ./intro.mov containername:/app/process-intro-vid.mov

## Copy file docker container file system to local file system
docker cp containername:/app/processed-intro-vid.mov ./
