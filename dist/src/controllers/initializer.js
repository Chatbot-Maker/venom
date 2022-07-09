"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const chalk = require("chalk");
const fs_1 = require("fs");
const helpers_1 = require("../api/helpers");
const whatsapp_1 = require("../api/whatsapp");
const create_config_1 = require("../config/create-config");
const check_token_file_1 = require("../api/helpers/check-token-file");
const enum_1 = require("../api/model/enum");
const auth_1 = require("./auth");
const browser_1 = require("./browser");
const welcome_1 = require("./welcome");
const path = require('path');
async function create(sessionOrOption, catchQR, statusFind, options, browserSessionToken, browserInstance) {
    let session = 'session';
    if (typeof sessionOrOption === 'string' &&
        sessionOrOption.replace(/\s/g, '').length) {
        session = sessionOrOption.replace(/\s/g, '');
    }
    else if (typeof sessionOrOption === 'object') {
        session = sessionOrOption.session || session;
        catchQR = sessionOrOption.catchQR || catchQR;
        statusFind = sessionOrOption.statusFind || statusFind;
        browserSessionToken =
            sessionOrOption.browserSessionToken || browserSessionToken;
        browserInstance = sessionOrOption.browserInstance || browserInstance;
        options = sessionOrOption;
    }
    let browserToken;
    const mergedOptions = Object.assign(Object.assign({}, create_config_1.defaultOptions), options);
    const logger = mergedOptions.logger;
    if (!mergedOptions.disableWelcome) {
        (0, welcome_1.welcomeScreen)();
    }
    logger.info(`${chalk.underline('https://orkestral.io - official site!')}\n`);
    statusFind && statusFind('initBrowser', this.session);
    // Initialize whatsapp
    if (mergedOptions.browserWS) {
        logger.info(`Waiting... checking the wss server...`, { session });
    }
    else {
        logger.info('Waiting... checking the browser...', { session });
    }
    const browser = await (0, browser_1.initBrowser)(session, mergedOptions, logger);
    // Erro of connect wss
    if (typeof browser === 'string' && browser === 'connect') {
        logger.info('Error when try to connect ' + mergedOptions.browserWS, {
            session
        });
        statusFind && statusFind('serverWssNotConnected', this.session);
        throw `Error when try to connect ${mergedOptions.browserWS}`;
    }
    // Erro open browser
    if (typeof browser === 'string' && browser === 'launch') {
        logger.info('Error no open browser.... ', {
            session
        });
        statusFind && statusFind('noOpenBrowser', this.session);
        throw `Error no open browser....`;
    }
    if (mergedOptions.browserWS) {
        logger.info('Has been properly connected to the wss server', {
            session
        });
        statusFind && statusFind('connectBrowserWs', this.session);
    }
    else {
        statusFind && statusFind('openBrowser', this.session);
        logger.info('Browser successfully opened', {
            session
        });
    }
    if (!mergedOptions.browserWS) {
        logger.info('checking headless...', {
            session
        });
        if (mergedOptions.headless) {
            logger.info('headless option is active, browser hidden', {
                session
            });
        }
        else {
            logger.info('headless option is disabled, browser visible', {
                session
            });
        }
    }
    if (typeof browser === 'object') {
        if (!mergedOptions.browserWS && browser['_process']) {
            browser['_process'].once('close', () => {
                browser['isClose'] = true;
            });
        }
        (0, helpers_1.checkingCloses)(browser, mergedOptions, (result) => {
            statusFind && statusFind(result, session);
        }).catch(() => {
            throw 'The client has been closed';
        });
        if ((0, auth_1.SessionTokenCkeck)(browserSessionToken)) {
            browserToken = browserSessionToken;
        }
        logger.info('Checking page...', {
            session
        });
        statusFind && statusFind('initWhatsapp', this.session);
        // Initialize whatsapp
        const page = await (0, browser_1.initWhatsapp)(session, mergedOptions, browser, browserToken);
        if (browserInstance) {
            browserInstance(browser, page);
        }
        if (page === false) {
            logger.info('Error accessing the page: "https://web.whatsapp.com"', {
                session
            });
            statusFind && statusFind('erroPageWhatsapp', this.session);
            throw 'Error when trying to access the page: "https://web.whatsapp.com"';
        }
        statusFind && statusFind('successPageWhatsapp', this.session);
        logger.info(`${chalk.green('Page successfully accessed')}`, {
            session
        });
        const client = new whatsapp_1.Whatsapp(page, session, mergedOptions);
        client.onStreamChange(async (stateStream) => {
            if (stateStream === enum_1.SocketStream.CONNECTED) {
                statusFind && statusFind('chatsAvailable', session);
            }
            if (stateStream === enum_1.SocketStream.DISCONNECTED) {
                await page.waitForFunction(() => {
                    if (document.querySelector('canvas') &&
                        document.querySelectorAll('._2Nr6U').length == 0) {
                        return true;
                    }
                }, {
                    timeout: 0,
                    polling: 100
                });
                if ((0, check_token_file_1.checkFileJson)(mergedOptions, session)) {
                    if (statusFind) {
                        statusFind('desconnectedMobile', session);
                    }
                    (0, helpers_1.deleteFiles)(mergedOptions, session, logger);
                }
            }
        });
        client.onStateChange(async (state) => {
            if (state === enum_1.SocketState.PAIRING) {
                const device = await page
                    .evaluate(() => {
                    var _a, _b, _c, _d;
                    if (document.querySelector('[tabindex="-1"]') &&
                        ((_b = (_a = window === null || window === void 0 ? void 0 : window.Store) === null || _a === void 0 ? void 0 : _a.Stream) === null || _b === void 0 ? void 0 : _b.mode) == 'SYNCING' &&
                        ((_d = (_c = window === null || window === void 0 ? void 0 : window.Store) === null || _c === void 0 ? void 0 : _c.Stream) === null || _d === void 0 ? void 0 : _d.obscurity) == 'SHOW') {
                        return true;
                    }
                    return false;
                })
                    .catch(() => undefined);
                if (device) {
                    const ckeckVersion = await (0, auth_1.isBeta)(page);
                    if (ckeckVersion === false) {
                        await page.evaluate(async () => {
                            await window.Store.Login.triggerCriticalSyncLogout();
                        });
                    }
                    if (statusFind) {
                        statusFind('deviceNotConnected', session);
                    }
                }
            }
            if (mergedOptions.createPathFileToken) {
                if (state === enum_1.SocketState.CONNECTED) {
                    setTimeout(() => {
                        (0, auth_1.saveToken)(page, session, mergedOptions).catch((e) => {
                            logger.info(e, {
                                session
                            });
                        });
                    }, 1000);
                }
            }
        });
        page.on('dialog', async (dialog) => {
            await dialog.accept();
        });
        if (mergedOptions.waitForLogin) {
            if (mergedOptions.debug) {
                console.log(`\nDebug: Option waitForLogin it's true. waiting...`);
            }
            statusFind && statusFind('waitForLogin', this.session);
            const isLogged = await client.waitForLogin(catchQR, statusFind);
            if (!isLogged) {
                throw 'Not Logged';
            }
            let waitLoginPromise = null;
            client.onStateChange(async (state) => {
                if (state === enum_1.SocketState.UNPAIRED ||
                    state === enum_1.SocketState.UNPAIRED_IDLE) {
                    if (!waitLoginPromise) {
                        waitLoginPromise = client
                            .waitForLogin(catchQR, statusFind)
                            .catch(() => { })
                            .finally(() => {
                            waitLoginPromise = null;
                        });
                    }
                    await waitLoginPromise;
                }
            });
        }
        if (mergedOptions.debug) {
            const debugURL = `http://localhost:${(0, fs_1.readFileSync)(path.resolve(process.cwd() + mergedOptions.mkdirFolderToken, mergedOptions.folderNameToken, session, 'DevToolsActivePort')).slice(0, -54)}`;
            console.log(`\nDebug: \x1b[34m${debugURL}\x1b[0m`);
        }
        if (mergedOptions.debug) {
            console.log(`\nDebug: Init WP app... waitForFunction "Store" ... this might take a while`);
        }
        statusFind && statusFind('waitChat', this.session);
        await page.waitForSelector('#app .two', { visible: true }).catch(() => { });
        if (mergedOptions.debug) {
            console.log(`\nDebug: Loading wp app... waitForFunction "Store" ... this might take a while also`);
        }
        await page
            .waitForFunction(() => {
            if (mergedOptions.debug) {
                console.log(`\nDebug: Loading wp app....`);
            }
            const StoreKey = Object.keys(window).find((k) => !!Object.getOwnPropertyDescriptor(window[k], 'WidFactory') &&
                !!Object.getOwnPropertyDescriptor(window[k].WidFactory, 'createWid'));
            if (StoreKey) {
                window.Store = window[StoreKey];
                return true;
            }
            return false;
        }, {
            timeout: 0,
            polling: 100
        })
            .catch(() => { });
        if (mergedOptions.debug) {
            console.log(`\nDebug: injecting Api ...`);
        }
        await (0, browser_1.injectApi)(page);
        if (mergedOptions.debug) {
            console.log(`\nDebug: injecting Api done...`);
        }
        statusFind && statusFind('successChat', this.session);
        return client;
    }
}
exports.create = create;
//# sourceMappingURL=initializer.js.map