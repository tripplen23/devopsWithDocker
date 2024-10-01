## 1. Navigate to spring-example-project folder

```
cd spring-example-project
```

## 2. Build docker image and run the image as a docker container that trigger port 8080 inside the container:

```
$ docker build . -t java-project && docker run -p 8080:8080 java-project
```

## 3. Open the browser in url: http://localhost:8080/press

![1727785501304](image/README/1727785501304.png)
