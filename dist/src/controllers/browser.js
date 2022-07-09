"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWhatsappPage = exports.initBrowser = exports.injectApi = exports.initWhatsapp = void 0;
/*
NNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNNN
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mMMMMMMMMMNNNmmNNNMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNMMMMNNNNNmmmddhdddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mddNMMNy:/odNmmddmmNNmdhhddmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmdNMNd:--+dNmmddhhddmmhsyhhmdmmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNmdNmy:.-oyNmmmhmdhho+sososyhhhddNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmNdh+-`.:oyNNdmmdmmdo-://oysssyhhhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nmmmoyyyo+osdNmdmmddNNhs+/::/+osyssydyhdNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNmhsymMMNmmmmdmdNNddNmsso+++////ossssyyhdmNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mhhhmNNMNNNhssshhmmddmmssyooooso/::+oysshhhhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmdhdddNNdyoosyhdmddmmmsoooooyysyys/::/oyyhhhyMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdddhddmhsooshdmdmdhhyyyysso/ooo+syhhs/-/+shyhMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dyyhdmd+ososhdmdmyyhhhhhhhyo++o/+///+ohhso++sdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
dhdmNNdsossyhmdmsydhssssyhhs/++o/o+//:++yhhy+/hNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mdmNNNNmhysshddyshdyyy/oss+s::/:://++///++++/::hmNNNNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNMNNNmmNNdymNNhshdshdyhdysh+sy+-:++osssosss++yNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNNNmdNNmNmmmNmyyddyyhdhydyohys/-oo+osssysyyohNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNhdNmmNNmNMMNhyyhhhdhyyhmmyh+-/s+sysssyyhyydNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mNMMMhdNdmMNMMMMMNNmdhdddmhdmmNho/-osoyyo++oyddhhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NMMMNmhNdNMNMNMMNmNNNmmmdyoohmhoyo::hsooo++oooydhymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNhmNNMmmNMNNmmmmdmmdyhhoyddddoo++yoyysooossyhsmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMNNNmmNNNmdNdNmmddhhhdNNhsmNssdooo/dso++osyyysoymMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMNNNNmNNNNNmddmmNhshNmmmNmNMdhNsh/ohho++/:++MMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MNNNMMNNNNmmmhhhhdyosdNmdmMMhoNmhdmys+ooo++/+MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNMMNNNNmddmdoodmMMNmmNNhssdmNMMMNdNd/osomMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNdhMNmNNMNmdNddohmMMNNNmdmdddNMMMMMMMMmMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNhmMmmmmNNmdNyoNMNmNmdhyyyhdhoyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdmMmmddddNmmdys+hmMMMmmhysssyy++dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmdNMMdmdddmmNNyshmNNNNNNNdhhs+yy//dMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMMdmdddmmMNysdmNNMMMNhhNdhs+y+/:mMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNMMNhmmddNNNMdyydmMMMNdyshNhyoss+:/MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmNMMddmmmmNMNMNdsymNNmdhhdNMNdhsss+:yMMMMMMMMMMMMMMMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMdhmmmmmNMNNMmshNMMMmmMMMMMmNdyo+//NMMMMMMMMMMMMMMMhNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMmhmmmmmmNMMNNMyshdhhhyhNMMMMMMdhso+sMMMMMMMMMMMMMMMhmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMmdmmmmmmmNMMMmNm+ys++oyyNMMMMMMNmmyyoyNMMMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NmmmmmmmmmmmNMNNmNNyyo+/oohNMMMMMMMMdhhsshmMMMMMMMMMMMyNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
mmNNNNNNmmmmNMMNmmddNmmdhhdmMMMMMMMMMNddhssshmmNNNmmdhdMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
NNNNNNNNNNNNNNNNmNNNNMMMMMNomMMMMMMMMMNNmdhhyyyyyyyhdmMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
Nd+oNMMMMMMMmodo++++++++++m..yNMMMMMNo+mNMMmhssshdNMMNhNMMMMMMMMMMMddMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MN+ /NMMMMMm: d` -ssssss+`d. `+mMMMMN. dNm+:+syso//hNN--yNMMMMMMMd+`yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMN+ /NMMMm: oM` +NMMMMMNdN. /`.yNMMN. dh.omMMMMMNy.oM- `:hNMMMm+.  yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMN/ /NMm: oNy` :sssmMMMMN. dh-`/mMN. d-/NMMMMMMMMy`m- y/`/dmo..o: yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMN/ /m: +NNy. /yyyNMMMMN. dNNo`.yN- d.oNMMMMMMMMd d- mNh-`.`+mN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMN/ . +NMMN- oNMMMMMNdN. dMMMd:`/. ds.dNMMMMMMm::M- dMMNy/dMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMN/ +NMMMN- /yyyyyys d. dMMMMNo`  dNy-+ymmmho-+NN- dMMMMMMMMN/ yMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMNyNMMMMN+::::::::::m+/mMMMMMMd: dMMNho///+ymMMN+/mMMMMMMMMNs/hMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMNMMMMMMMMMMMMMMMMMMMMMMMMMMMMNsmMMMMMMMMMMMMMMNNNNMMNNNMMNNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNMMNMNMMMNMMNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNNNNMMNNNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
*/
const ChromeLauncher = require("chrome-launcher");
const fs = require("fs");
const path = require("path");
const puppeteer_extra_1 = require("puppeteer-extra");
const puppeteer_config_1 = require("../config/puppeteer.config");
const StealthPlugin = require("puppeteer-extra-plugin-stealth");
const auth_1 = require("./auth");
const WAuserAgente_1 = require("../config/WAuserAgente");
const chalk = require("chalk");
async function initWhatsapp(session, options, browser, token) {
    const waPage = await getWhatsappPage(browser);
    if (waPage != null) {
        try {
            await waPage.setUserAgent(WAuserAgente_1.useragentOverride);
            await waPage.setBypassCSP(true);
            if (typeof options.userPass === 'string' &&
                options.userPass.length &&
                typeof options.userProxy === 'string' &&
                options.userProxy.length &&
                Array.isArray(options.addProxy) &&
                options.addProxy.length) {
                await waPage.authenticate({
                    username: options.userProxy,
                    password: options.userPass
                });
            }
            await waPage.goto(puppeteer_config_1.puppeteerConfig.whatsappUrl, {
                waitUntil: 'domcontentloaded'
            });
            await browser.userAgent();
            // Auth with token
            await (0, auth_1.auth_InjectToken)(waPage, session, options, token);
            return waPage;
        }
        catch (_a) {
            waPage.close().catch(() => { });
            browser.close().catch(() => { });
            return false;
        }
    }
}
exports.initWhatsapp = initWhatsapp;
async function injectApi(page) {
    const injected = await page
        .evaluate(() => {
        // @ts-ignore
        return (typeof window.WAPI !== 'undefined' &&
            typeof window.Store !== 'undefined');
    })
        .catch(() => false);
    if (injected) {
        return;
    }
    await page.addScriptTag({
        path: require.resolve(path.join(__dirname, '../lib/wapi', 'wapi.js'))
    });
    await page.addScriptTag({
        path: require.resolve(path.join(__dirname, '../lib/middleware', 'middleware.js'))
    });
    // Make sure WAPI is initialized
    await page.waitForFunction(() => {
        // @ts-ignore
        return (typeof window.WAPI !== 'undefined' && typeof window.Store !== 'undefined');
    });
    return page;
}
exports.injectApi = injectApi;
/**
 * Initializes browser, will try to use chrome as default
 * @param session
 */
async function initBrowser(session, options, logger, extras = {}) {
    const chromePath = getChrome();
    if (chromePath && options.useChrome) {
        extras = Object.assign(Object.assign({}, extras), { executablePath: chromePath });
    }
    else {
        if (options.BrowserFetcher) {
            const browserFetcher = puppeteer_extra_1.default.createBrowserFetcher(undefined);
            logger.info(`${chalk.green('Check chromium....')}`, {
                session,
                type: 'browser'
            });
            logger.info(`${chalk.green('Checking the total bytes to download!')}`, {
                session,
                type: 'browser-total'
            });
            await browserFetcher
                .download(options.chromiumVersion, (downloadedByte, totalBytes) => {
                if (downloadedByte) {
                    logger.info(`${chalk.green(`wait... ${downloadedByte}`)}`, {
                        session,
                        type: 'browser'
                    });
                }
                if (totalBytes) {
                    logger.info(`${chalk.green(`Total Bytes ${totalBytes}`)}`, {
                        session,
                        type: 'browser-total'
                    });
                }
                if (downloadedByte === totalBytes) {
                    logger.info(`${chalk.green(`extract file....`)}`, {
                        session,
                        type: 'extract-file'
                    });
                }
            })
                .then((revisionInfo) => {
                logger.info(`${chalk.green(`Chromium Finished result`)}`, {
                    session,
                    type: 'browser'
                });
                logger.info(`${chalk.green(`Chromium completed result`)}`, {
                    session,
                    type: 'browser-total'
                });
                extras = Object.assign(Object.assign({}, extras), { executablePath: revisionInfo.executablePath });
                puppeteer_config_1.puppeteerConfig.chromiumArgs.push(`--single-process`);
            })
                .catch((e) => {
                logger.info(`${chalk.red(`Error chromium: ${e}`)}`, {
                    session
                });
                extras = {};
            });
        }
        else {
            logger.info(`${chalk.red('Chrome not found, using chromium')}`, {
                session
            });
            extras = {};
        }
    }
    if (options.multidevice) {
        const folderSession = path.join(path.resolve(process.cwd(), options.mkdirFolderToken, options.folderNameToken, session));
        const folderMulidevice = path.join(path.resolve(process.cwd(), options.mkdirFolderToken, options.folderNameToken));
        if (!fs.existsSync(folderMulidevice)) {
            fs.mkdirSync(folderMulidevice, {
                recursive: true
            });
        }
        fs.chmodSync(folderMulidevice, '777');
        options.puppeteerOptions = {
            userDataDir: folderSession
        };
        puppeteer_config_1.puppeteerConfig.chromiumArgs.push(`--user-data-dir=${folderSession}`);
    }
    // Use stealth plugin to avoid being detected as a bot
    puppeteer_extra_1.default.use(StealthPlugin());
    if (Array.isArray(options.addProxy) && options.addProxy.length) {
        const proxy = options.addProxy[Math.floor(Math.random() * options.addProxy.length)];
        options.browserArgs
            ? Object.assign(options.browserArgs, [`--proxy-server=${proxy}`])
            : Object.assign(puppeteer_config_1.puppeteerConfig.chromiumArgs, [
                `--proxy-server=${proxy}`
            ]);
        // console.log(puppeteerConfig.chromiumArgs);
    }
    if (Array.isArray(options === null || options === void 0 ? void 0 : options.addBrowserArgs) &&
        (options === null || options === void 0 ? void 0 : options.addBrowserArgs.length)) {
        for (let index = 0; index < (options === null || options === void 0 ? void 0 : options.addBrowserArgs.length); index++) {
            const element = options === null || options === void 0 ? void 0 : options.addBrowserArgs[index];
            if (!puppeteer_config_1.puppeteerConfig.chromiumArgs.includes(element)) {
                puppeteer_config_1.puppeteerConfig.chromiumArgs.push(element);
            }
        }
    }
    let browser = null;
    if (options.browserWS && options.browserWS != '') {
        await puppeteer_extra_1.default
            .connect({
            browserWSEndpoint: options.browserWS
        })
            .then((e) => {
            browser = e;
        })
            .catch((e) => {
            logger.info(`${chalk.red(`Error connect: ${e}`)}`, {
                session
            });
            browser = 'connect';
        });
    }
    else {
        await puppeteer_extra_1.default
            .launch(Object.assign(Object.assign({ headless: options.headless, devtools: options.devtools, args: Array.isArray(options.browserArgs) && options.browserArgs.length
                ? options.browserArgs
                : [...puppeteer_config_1.puppeteerConfig.chromiumArgs] }, options.puppeteerOptions), extras))
            .then((e) => {
            browser = e;
        })
            .catch((e) => {
            logger.info(`${chalk.red(`Error launch: ${e}`)}`, {
                session
            });
            browser = 'launch';
        });
    }
    return browser;
}
exports.initBrowser = initBrowser;
async function getWhatsappPage(browser) {
    const pages = await browser.pages().catch();
    if (pages.length) {
        return pages[0];
    }
    return await browser.newPage().catch();
}
exports.getWhatsappPage = getWhatsappPage;
/**
 * Retrieves chrome instance path
 */
function getChrome() {
    try {
        const chromeInstalations = ChromeLauncher.Launcher.getInstallations();
        return chromeInstalations[0];
    }
    catch (error) {
        return undefined;
    }
}
//# sourceMappingURL=browser.js.map