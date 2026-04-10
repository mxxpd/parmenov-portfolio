# Docker and Timeweb Deploy

## Local development

Start the Nuxt dev server in Docker:

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

Stop the dev environment:

```bash
npm run dev:down
```

Local non-Docker startup is kept only as a fallback:

```bash
npm run dev:local
```

## Local production check

Build and run the production container:

```bash
npm run docker:prod
```

Stop it with:

```bash
npm run docker:prod:down
```

## Notes about the Docker setup

- Both dev and production images use `node:22-alpine`, which matches the current Nuxt 4 dependency requirements much better than Node 20.
- The dev compose file keeps `node_modules` and `.nuxt` in named Docker volumes, so the bind mount does not overwrite container dependencies.
- Nuxt is explicitly bound to `0.0.0.0`, which makes the dev server reachable from outside the container.
- The production container runs the built Nitro output directly and includes a healthcheck on port `3000`.

## Deploy to Timeweb App Platform

This repository is prepared for deployment through Docker Compose.

Important points for Timeweb:

1. Keep `Dockerfile` and `docker-compose.yml` in the repository root.
2. The web service is exposed on port `3000`, which is the internal app port expected by the containerized runtime here.
3. The production compose file does not use bind mounts, which keeps it compatible with managed platform restrictions.
4. The primary HTTP service is the first service in `docker-compose.yml`, here it is `app`.

Deployment steps:

1. Push the repository to GitHub, GitLab, or Bitbucket.
2. Open Timeweb Cloud App Platform.
3. Choose the `Docker Compose` deployment type.
4. Connect the repository and target branch.
5. Confirm that Timeweb reads the root `docker-compose.yml`.
6. Add environment variables in the Timeweb UI if the project later needs them.
7. Start the deploy.
