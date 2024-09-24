# DevOps with Docker

This is an exercise submission for the course DevOps with Docker from University of Helsinki.

More information in this URL: https://devopswithdocker.com/

## Install Docker

[Windows](https://docs.docker.com/desktop/install/windows-install/)

[Ubuntu](https://docs.docker.com/engine/install/ubuntu/)

[MacOS](https://docs.docker.com/desktop/install/mac-install/)



Verify that Docker Engine is installed correctly by running an example image.

```
$ docker run hello-world
```

## Docker

Docker is a set of platform as a service (PaaS) products that use operating system level virtualization to deliver software in packages called containers.

**Docker daemon** takes care of images, containers and other resources.

Docker is a set of tools to deliver software in containers.

**Containers** are packages of software and containers are created from images.

A container includes the application and its dependencies. Container is isolated so that it doesn't interfere with other containers or the software running outside of the containers.

You can run a container with the following command, where the -i (interactive) flag instructs to pass the stdin to the container and to start Bash shell in the container.

```

$ docker run -it <IMAGE> bash

```

## Image

Docker image is an immutable file and you are not allowed to edit an existing file.

Creating new image happens by beginning from a base image and later adding new layers to the image.

You can list all your images with the following command.

```

$ docker image ls

```

We can search for images in the Docker Hub with docker search <IMAGE> command. 

## Dockerfile

Dockerfile is a file that contains the build instructions for an image and Dockerfile declares all of the required dependencies.

Each Docker command in a Dockerfile adds a layer to the image.

Dockerfile uses syntax like the following script for building the image.

```

FROM <IMAGE>:<TAG>

RUN npm install <PACKAGES>

CMD <COMMAND>

```
CMD in Dockerfile is executed when we call docker run command.

## Container

Containers contain required software to run an application on isolated environments in the host machine with the ability to interact with each other and the host machine itself by defined methods.

A container has a direct access to the kernel and resources.

The docker container run command instructs Docker daemon to create a container from the image where -d flag starts the container detached.

```

$ docker container run -d <IMAGE>

```
List all your containers with the folloing command.

```

$ docker container ls

```
### Remove Docker containers, images and network

```

$ docker stop $(docker ps -a -q)

$ docker rm $(docker ps -a -q)

$ docker rmi $(docker images -q)

$ docker network prune

```