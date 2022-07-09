"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isBeta = exports.saveToken = exports.auth_InjectToken = exports.SessionTokenCkeck = exports.retrieveQR = exports.asciiQr = exports.isConnectingToPhone = exports.isInsideChats = exports.needsToScan = exports.isAuthenticated = exports.getInterfaceStatus = void 0;
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
const fs = require("fs");
const path = require("path");
const qrcode = require("qrcode-terminal");
const fs_1 = require("fs");
const getInterfaceStatus = async (waPage) => {
    return await waPage
        .waitForFunction(() => {
        const erroHTTP = document.querySelector('.error-code');
        if (erroHTTP && erroHTTP[0].innerText.includes('HTTP ERROR 429')) {
            return { type: erroHTTP[0].innerText };
        }
        const elLoginWrapper = document.querySelector('body > div > div > .landing-wrapper');
        const elQRCodeCanvas = document.querySelector('canvas');
        if (elLoginWrapper && elQRCodeCanvas) {
            return 'UNPAIRED';
        }
        const streamStatus = window['Store'] &&
            window['Store'].Stream &&
            window['Store'].Stream.displayInfo;
        if (['PAIRING', 'RESUMING', 'SYNCING'].includes(streamStatus)) {
            return 'PAIRING';
        }
        const chat = document.querySelector('.app, .two');
        if (chat && chat.attributes && chat.tabIndex) {
            return 'CONNECTED';
        }
        return false;
    }, {
        timeout: 0,
        polling: 100
    })
        .then(async (element) => {
        return await element.evaluate((a) => {
            return a;
        });
    })
        .catch((e) => e);
};
exports.getInterfaceStatus = getInterfaceStatus;
/**
 * Validates if client is authenticated
 * @returns true if is authenticated, false otherwise
 * @param waPage
 */
const isAuthenticated = async (waPage) => {
    const status = await (0, exports.getInterfaceStatus)(waPage);
    if (typeof status === 'object') {
        return status;
    }
    if (typeof status !== 'string') {
        return null;
    }
    return ['CONNECTED', 'PAIRING'].includes(status);
};
exports.isAuthenticated = isAuthenticated;
const needsToScan = async (waPage) => {
    const status = await (0, exports.getInterfaceStatus)(waPage);
    if (typeof status !== 'string') {
        return null;
    }
    return status === 'UNPAIRED';
};
exports.needsToScan = needsToScan;
const isInsideChats = async (waPage) => {
    const status = await (0, exports.getInterfaceStatus)(waPage);
    if (typeof status !== 'string') {
        return null;
    }
    return status === 'CONNECTED';
};
exports.isInsideChats = isInsideChats;
const isConnectingToPhone = async (waPage) => {
    const status = await (0, exports.getInterfaceStatus)(waPage);
    if (typeof status !== 'string') {
        return null;
    }
    return status === 'PAIRING';
};
exports.isConnectingToPhone = isConnectingToPhone;
async function asciiQr(code) {
    return new Promise((resolve) => {
        qrcode.generate(code, { small: true }, (qrcode) => {
            resolve(qrcode);
        });
    });
}
exports.asciiQr = asciiQr;
async function retrieveQR(page) {
    const hasCanvas = await page.evaluate(() => document.querySelector('canvas') !== null);
    if (!hasCanvas) {
        return undefined;
    }
    await page.addScriptTag({
        path: require.resolve(path.join(__dirname, '../lib/jsQR', 'jsQR.js'))
    });
    return await page
        .evaluate(() => {
        const canvas = document.querySelector('canvas') || null;
        if (canvas !== null) {
            const context = canvas.getContext('2d') || null;
            if (context !== null) {
                // @ts-ignore
                const code = jsQR(context.getImageData(0, 0, canvas.width, canvas.height).data, canvas.width, canvas.height);
                return { urlCode: code.data, base64Image: canvas.toDataURL() };
            }
        }
        return undefined;
    })
        .catch(() => undefined);
}
exports.retrieveQR = retrieveQR;
function SessionTokenCkeck(token) {
    if (token &&
        token['WABrowserId'] &&
        token['WASecretBundle'] &&
        token['WAToken1'] &&
        token['WAToken2']) {
        return true;
    }
    else {
        return false;
    }
}
exports.SessionTokenCkeck = SessionTokenCkeck;
async function auth_InjectToken(page, session, options, token) {
    if (!token) {
        const pathToken = path.join(path.resolve(process.cwd() + options.mkdirFolderToken, options.folderNameToken), `${session}.data.json`);
        if ((0, fs_1.existsSync)(pathToken)) {
            token = JSON.parse((0, fs_1.readFileSync)(pathToken).toString());
        }
    }
    if (!token || !SessionTokenCkeck(token)) {
        return false;
    }
    //Auth with token ->start<-
    await page.evaluate((session) => {
        localStorage.clear();
        Object.keys(session).forEach((key) => {
            localStorage.setItem(key, session[key]);
        });
    }, token);
    //End Auth with token
}
exports.auth_InjectToken = auth_InjectToken;
async function saveToken(page, session, options) {
    const token = (await page
        .evaluate(() => {
        if (window.localStorage) {
            return {
                WABrowserId: window.localStorage.getItem('WABrowserId'),
                WASecretBundle: window.localStorage.getItem('WASecretBundle'),
                WAToken1: window.localStorage.getItem('WAToken1'),
                WAToken2: window.localStorage.getItem('WAToken2')
            };
        }
        return undefined;
    })
        .catch(() => undefined));
    if (!token || !SessionTokenCkeck(token)) {
        return false;
    }
    const folder = path.join(path.resolve(process.cwd() + options.mkdirFolderToken, options.folderNameToken));
    try {
        fs.mkdirSync(folder, { recursive: true });
    }
    catch (error) {
        throw 'Failed to create folder tokens...';
    }
    try {
        fs.writeFileSync(path.join(folder, `${session}.data.json`), JSON.stringify(token));
        fs.chmodSync(folder, '777');
        fs.chmodSync(folder + '/' + session + '.data.json', '777');
    }
    catch (error) {
        throw 'Failed to save token...';
    }
    return token;
}
exports.saveToken = saveToken;
async function isBeta(page) {
    return await page.evaluate(() => {
        if (window.localStorage.getItem('WASecretBundle') &&
            window.localStorage.getItem('WAToken1') &&
            window.localStorage.getItem('WAToken2')) {
            return true;
        }
        return false;
    });
}
exports.isBeta = isBeta;
//# sourceMappingURL=auth.js.map