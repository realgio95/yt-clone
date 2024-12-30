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