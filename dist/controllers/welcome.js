"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUpdates = exports.welcomeScreen = exports.BRAND = void 0;
const boxen = require("boxen");
const chalk = require("chalk");
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
exports.BRAND = process.env.NAME;
const latest_version_1 = require("latest-version");
const yoo_hoo_1 = require("yoo-hoo");
const logger_1 = require("../utils/logger");
const semver_1 = require("../utils/semver");
const { version } = require('../../package.json');
// Global
let welcomeShown = false;
let updatesChecked = false;
function welcomeScreen() {
    if (welcomeShown) {
        return;
    }
    welcomeShown = true;
    console.log('\n\n');
    (0, yoo_hoo_1.yo)(exports.BRAND, { color: 'rainbow' });
    console.log('\n\n');
}
exports.welcomeScreen = welcomeScreen;
async function checkUpdates() {
    // Check for updates if needed
    if (!updatesChecked) {
        updatesChecked = true;
        await checkVenomVersion();
    }
}
exports.checkUpdates = checkUpdates;
/**
 * Checs for a new versoin of venom and logs
 */
async function checkVenomVersion() {
    logger_1.defaultLogger.info('Checking for updates');
    await (0, latest_version_1.default)('venom-pro')
        .then((latest) => {
        if (!(0, semver_1.upToDate)(version, latest)) {
            logger_1.defaultLogger.info('There is a new version available');
            logUpdateAvailable(version, latest);
        }
    })
        .catch(() => {
        logger_1.defaultLogger.warn('Failed to check updates');
    });
}
/**
 * Logs a boxen of instructions to update
 * @param current
 * @param latest
 */
function logUpdateAvailable(current, latest) {
    // prettier-ignore
    const newVersionLog = `There is a new version of ${chalk.bold(`Venom`)} ${chalk.gray(current)} ➜  ${chalk.bold.green(latest)}\n` +
        `Update your package by running:\n\n` +
        `${chalk.bold('\>')} ${chalk.blueBright('npm update venom-pro')}`;
    logger_1.defaultLogger.info(boxen(newVersionLog, { padding: 1 }));
    logger_1.defaultLogger.info(`For more info visit: ${chalk.underline('https://github.com/orkestral/venom/blob/master/Update.md')}\n`);
}
//# sourceMappingURL=welcome.js.map