require('dotenv').config()

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log(`Containers rule! Pipeline: ${process.env.PIPELINE}`);
    await sleep(5000);
  }
}

main();
