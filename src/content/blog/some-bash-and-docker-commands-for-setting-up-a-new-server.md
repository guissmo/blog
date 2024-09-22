---
title: "Bash and Docker Cheat Sheet for New Servers"
layout: "/src/layouts/PostLayout.astro"
category: Code
date: 2023-08-13T22:51:12+02:00
draft: false
toc: true
slug: bash-and-docker-commands-for-setting-up-a-new-server
tags:
  - bash
  - script
  - docker
  - devops
---

## Bash

### Make a new user

- `adduser username`

### Add to sudoers file

- `usermod -aG sudo username`

### Install ssh public key

- `cat ~/.ssh/id_rsa.pub | ssh user@IP_ADDRESS "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"`

### Change hostname

```
sudo nano /etc/hostname
sudo nano /etc/hosts
```

## Syncthing

[Link to install syncthing](../bash-and-docker-commands-for-setting-up-a-new-server)

## Docker

### Installation

- https://docs.docker.com/engine/install/ubuntu/#install-using-the-repository

```
sudo apt-get update
sudo apt-get install ca-certificates curl gnupg
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg
echo   "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" |   sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
```

### Make usable for non-root users

- https://phoenixnap.com/kb/docker-permission-denied

```bash
sudo groupadd -f docker
sudo usermod -aG docker $USER
newgrp docker
groups
```

### Hello World

- `docker run hello-world`

### Some docker commands

- docker compose up, build images with detached flag
  `docker compose up --build -d`
- docker compose using custom config filename
  `docker compose --config='FILENAME.yaml' up --build -d`
- create volume
  `docker volume create VOLUME_NAME`

#### Container

- logs
  `docker logs CONTAINER_NAME`
- restart
  `docker container restart CONTAINER_NAME`
- stop
  `docker stop CONTAINER_NAME`

#### Pruning

- delete stopped containers
  `docker container prune`
- delete unused images
  `docker image prune`
