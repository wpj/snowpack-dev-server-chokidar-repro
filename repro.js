import { createConfiguration, startDevServer } from "snowpack";

async function main() {
  let [errs, config] = createConfiguration({
    devOptions: {
      open: "none",
      output: "stream",
      port: 5000,
    },
    mount: {
      src: "/src",
    },
  });

  let snowpack = await startDevServer({
    config,
    cwd: process.cwd(),
    lockfile: null,
  });

  await snowpack.shutdown();
}

main();
