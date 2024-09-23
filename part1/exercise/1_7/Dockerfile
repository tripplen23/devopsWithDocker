FROM ubuntu:22.04

WORKDIR /usr/src/app

# Update and install curl
RUN apt-get update && apt-get install -y curl

# Copy file script.sh from local machine to the container
COPY script.sh .

# Set run permissions for script.sh
RUN chmod +x script.sh

# Fix \r\n character error on Windows
RUN sed -i 's/\r$//' script.sh

# Run script when container starts
ENTRYPOINT [ "./script.sh" ] 