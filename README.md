# Snowpack chokidar watcher repro

This repo starts a dev server with `startDevServer` and immediately closes it.
After the server is shut down, the node process remains open.

## Running the example

```
# Install depdendencies
pnpm install

# Run the script
pnpm start
```
