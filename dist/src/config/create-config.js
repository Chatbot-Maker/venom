"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultOptions = void 0;
const logger_1 = require("../utils/logger");
const puppeteer_config_1 = require("./puppeteer.config");
exports.defaultOptions = {
    multidevice: true,
    folderNameToken: 'tokens',
    mkdirFolderToken: '',
    headless: true,
    devtools: false,
    useChrome: true,
    debug: false,
    logQR: true,
    browserWS: '',
    browserArgs: puppeteer_config_1.puppeteerConfig.chromiumArgs,
    addBrowserArgs: [],
    puppeteerOptions: {},
    disableSpins: false,
    disableWelcome: false,
    updatesLog: true,
    autoClose: 120000,
    createPathFileToken: true,
    waitForLogin: true,
    BrowserFetcher: true,
    chromiumVersion: '818858',
    userDataDir: '',
    logger: logger_1.defaultLogger
};
//# sourceMappingURL=create-config.js.map