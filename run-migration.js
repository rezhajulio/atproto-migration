require("ts-node").register();

async function main() {
  try {
    await require("./migration.ts");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
