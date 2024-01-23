# Rumo ao IME


## Summary

- [Development Environment](#development-environment)


## Development Environment

### Building and running the containers

To build the containers via the ```docker-compose.dev.yml``` file, use the command:

```
docker compose -f docker-compose.dev.yml build
```

After building, you can start and run the containers with the command:

```
docker-compose -f docker-compose.dev.yml up
```

> This Development Environment allows for hot reloading on the frontend.

### Installing new React dependencies

First, build and let the frontend container run with the previous steps.

After that, manually execute the installation of the dependency inside the frontend container with the command:


```
docker exec -it <container_name_or_id> npm install <name_of_dependence>
```

> Note that it will be needed the name or id of the container, which can be consulted with the command ```docker ps```

> Also note that, by the volumes configuration in the `docker-compose` file, the ```package.json``` and ```package-lock.json``` got updated inside the container and in the host.


# Run MongoDB Container

Start a MongoDB container and connect it to the network you created. You'll also want to configure volume storage to persist your database:

```
docker run --name my-mongo -d -v my-mongo-volume:/data/db --network my-network mongo

```

*   `--name my-mongo`: Names your container as `my-mongo`.
*   `-d`: Runs the container in detached mode.
*   `-v my-mongo-volume:/data/db`: Mounts a volume named `my-mongo-volume` at `/data/db` in the container for data persistence.
*   `--network my-network`: Connects the container to `my-network`.

# Run Flask and React Containers
When running your Flask and React containers, ensure they're also connected to the same Docker network:

```
docker run --name my-flask-app -d --network my-network my-flask-image
docker run --name my-react-app -d --network my-network -p 3000:3000 my-react-image
```
> To make it work, it is possible to omit the `my-react-image` part.

*   `--network my-network` ensures these containers can communicate with the MongoDB container.
*   `-p 3000:3000` for React exposes port 3000 on your host, mapping it to port 3000 in the container (adjust as necessary for your setup).

# Data Persistence

The volume `my-mongo-volume` will store your MongoDB data. Even if the container stops or is removed, the data will persist. To manage this data, you can use Docker volume commands.

# Accessing MongoDB

For development purposes, you might want to access MongoDB directly:

*   **MongoDB Shell**: Run `docker exec -it my-mongo mongo` to access the MongoDB shell within the container.
*   **GUI Tools**: Connect GUI tools like MongoDB Compass to `localhost:27017` for local development.