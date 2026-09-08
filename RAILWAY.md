# Optikom — Railway test deployment

This `railway-test` worktree contains the complete design from source commit `938f1ee533d12f3ada9ee06ae06f778aa4d5042b`, adapted to the Node.js runtime. It includes all product content and generated images. The original Sites checkout remains in `../site`.

Railway target:

- Project: `perfect-celebration` (`656d9a83-8dbb-408b-a279-53681c01996b`)
- Environment: `production` (`d445fb6d-3185-410f-bd09-7324fa0834f2`)
- Dedicated test service: `optikom-vision-test` (`e6bbc466-d542-4b69-a324-f9f69104ccc4`)
- Explicit service variable: `PORT=3000`

The existing `Optikom` service and its domains are separate from this test service. Pages in the test build carry `noindex, nofollow` metadata. Contact requests use the existing email flow.

## Local validation

```sh
pnpm install --frozen-lockfile
pnpm exec tsc --noEmit
pnpm build
PORT=3081 NODE_ENV=production pnpm start
```

The Docker build installs pinned dependencies, builds the site, and starts `vinext start` as a non-root user. The Node server binds to `0.0.0.0` and reads Railway's `PORT` variable. Railway verifies `/` before the deployment becomes healthy.

## Deploy this test service

```sh
railway up --project 656d9a83-8dbb-408b-a279-53681c01996b --environment d445fb6d-3185-410f-bd09-7324fa0834f2 --service e6bbc466-d542-4b69-a324-f9f69104ccc4 --detach
```

Use the explicit service ID for future uploads. `.railwayignore` and `.dockerignore` exclude local environment files, generated build directories, Git data, and Sites hosting metadata from the uploaded runtime.
