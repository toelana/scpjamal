require('colors');

const delay = async (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function displayHeader() {
    process.stdout.write('\x1Bc');
    console.log('========================================'.cyan);
    console.log('=              Grass BOT               ='.cyan);
    console.log('=           Nakamiel            ='.cyan);
    console.log('=            Tele: @nakamiel_id             ='.cyan);
    console.log('========================================'.cyan);
    console.log();
  }

module.exports = { delay, displayHeader };
