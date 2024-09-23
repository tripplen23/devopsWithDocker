## 1. Build Docker image:

```
docker build -t yt-dlp .
```

![1727106540713](image/README/1727106540713.png)

## 2. Run the container from the docker image with argument as another youtube URL

```
docker run --name yt-dlp-container yt-dlp https://www.youtube.com/watch?v=DptFY_MszQs
```

![1727106705731](image/README/1727106705731.png)

## 3. See container ls

```
docker container ls -a
```

![1727106772960](image/README/1727106772960.png)

## 4. inspect changes to the filesystem of a Docker container

```
docker diff yt-dlp-container
```

![1727106894720](image/README/1727106894720.png)
A: A file or directory was added.
D: A file or directory was deleted.
C: A file or directory was changed.

## 5. Copy the downloaded video to the local machine

```
docker cp "yt-dlp-container://mydir/Welcome to Kumpula campus! | University of Helsinki [DptFY_MszQs].mp4" .
```
