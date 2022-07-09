"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SenderLayer = void 0;
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
const path = require("path");
const helpers_1 = require("../helpers");
const filename_from_mimetype_1 = require("../helpers/filename-from-mimetype");
const listener_layer_1 = require("./listener.layer");
const layers_interface_1 = require("../helpers/layers-interface");
let obj;
class SenderLayer extends listener_layer_1.ListenerLayer {
    constructor(page, session, options) {
        super(page, session, options);
        this.page = page;
    }
    /**
     * Send List menu
     * @param to the numberid xxx@c.us
     * @param title the titulo
     * @param subtitle the subtitle
     * @param description the description
     * @param buttonText the name button
     * @param menu List menu
     */
    async sendListMenu(to, title, subTitle, description, buttonText, menu) {
        return new Promise(async (resolve, reject) => {
            const result = await this.page.evaluate(({ to, title, subTitle, description, buttonText, menu }) => {
                return WAPI.sendListMenu(to, title, subTitle, description, buttonText, menu);
            }, { to, title, subTitle, description, buttonText, menu });
            if (result['erro'] == true) {
                return reject(result);
            }
            else {
                return resolve(result);
            }
        });
    }
    /**
     * Sends a text message to given chat
     * @param to chat id: xxxxx@us.c
     * @param content text message
     */
    async sendText(to, content) {
        return new Promise(async (resolve, reject) => {
            const typeFunction = 'sendText';
            const type = 'string';
            const check = [
                {
                    param: 'to',
                    type: type,
                    value: to,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'content',
                    type: type,
                    value: content,
                    function: typeFunction,
                    isUser: true
                }
            ];
            const validating = (0, layers_interface_1.checkValuesSender)(check);
            if (typeof validating === 'object') {
                return reject(validating);
            }
            const result = await this.page.evaluate(({ to, content }) => {
                return WAPI.sendMessage(to, content);
            }, { to, content });
            if (result['erro'] == true) {
                return reject(result);
            }
            else {
                return resolve(result);
            }
        });
    }
    /**
     * Automatically sends a link with the auto generated link preview. You can also add a custom message to be added.
     * @param chatId chat id: xxxxx@us.c
     * @param url string A link, for example for youtube. e.g https://www.youtube.com/watch?v=Zi_XLOBDo_Y&list=RDEMe12_MlgO8mGFdeeftZ2nOQ&start_radio=1
     * @param title custom text as the message body, this includes the link or will be attached after the link
     */
    async sendLinkPreview(chatId, url, title) {
        return new Promise(async (resolve, reject) => {
            const typeFunction = 'sendLinkPreview';
            const type = 'string';
            const check = [
                {
                    param: 'chatId',
                    type: type,
                    value: chatId,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'url',
                    type: type,
                    value: url,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'title',
                    type: type,
                    value: title,
                    function: typeFunction,
                    isUser: false
                }
            ];
            const validating = (0, layers_interface_1.checkValuesSender)(check);
            if (typeof validating === 'object') {
                return reject(validating);
            }
            const result = await this.page.evaluate(({ chatId, url, title }) => {
                return WAPI.sendLinkPreview(chatId, url, title);
            }, { chatId, url, title });
            if (result['erro'] == true) {
                return reject(result);
            }
            else {
                return resolve(result);
            }
        });
    }
    /**
     * Sends image message base64
     * @param to Chat id
     * @param base64 File path, http link or base64Encoded. base64 MUST start with "data:(yourMimeType);base64,"
     * @param filename
     * @param caption
     */
    async sendImageFromBase64(to, base64, filename, caption) {
        return new Promise(async (resolve, reject) => {
            const typeFunction = 'sendImageFromBase64';
            const type = 'string';
            const check = [
                {
                    param: 'to',
                    type: type,
                    value: to,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'base64',
                    type: type,
                    value: base64,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'filename',
                    type: type,
                    value: filename,
                    function: typeFunction,
                    isUser: false
                }
            ];
            const validating = (0, layers_interface_1.checkValuesSender)(check);
            if (typeof validating === 'object') {
                return reject(validating);
            }
            let mimeType = (0, helpers_1.base64MimeType)(base64);
            if (!mimeType) {
                obj = {
                    erro: true,
                    to: to,
                    text: 'Invalid base64 or missing MimeType!'
                };
                return reject(obj);
            }
            if (!mimeType.includes('image')) {
                const obj = {
                    erro: true,
                    to: to,
                    text: 'Not an image, allowed formats png, jpeg and webp'
                };
                return reject(obj);
            }
            filename = (0, filename_from_mimetype_1.filenameFromMimeType)(filename, mimeType);
            const result = await this.page.evaluate(({ to, base64, filename, caption }) => {
                return WAPI.sendImage(base64, to, filename, caption);
            }, { to, base64, filename, caption });
            if (result['erro'] == true) {
                return reject(result);
            }
            else {
                return resolve(result);
            }
        });
    }
    /**
     * Sends messages with options
     * @param to Chat id
     * @param content text string
     * @param options object
     */
    async sendMessageOptions(to, content, options) {
        return new Promise(async (resolve, reject) => {
            try {
                const messageId = await this.page.evaluate(({ to, content, options }) => {
                    return WAPI.sendMessageOptions(to, content, options);
                }, { to, content, options });
                const result = (await this.page.evaluate((messageId) => WAPI.getMessageById(messageId), messageId));
                resolve(result);
            }
            catch (error) {
                reject(error);
            }
        });
    }
    /**
     * Send buttons reply
     * @param {string} to the numberid xxx@c.us
     * @param {string} title the titulo
     * @param {string} subtitle the subtitle
     * @param {array} buttons arrays
     */
    async sendButtons(to, title, buttons, subtitle) {
        return new Promise(async (resolve, reject) => {
            const typeFunction = 'sendButtons';
            const type = 'string';
            const obj = 'object';
            const check = [
                {
                    param: 'to',
                    type: type,
                    value: to,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'title',
                    type: type,
                    value: title,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'subtitle',
                    type: type,
                    value: subtitle,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'buttons',
                    type: obj,
                    value: buttons,
                    function: typeFunction,
                    isUser: true
                }
            ];
            const validating = (0, layers_interface_1.checkValuesSender)(check);
            if (typeof validating === 'object') {
                return reject(validating);
            }
            const result = await this.page.evaluate(({ to, title, buttons, subtitle }) => {
                return WAPI.sendButtons(to, title, buttons, subtitle);
            }, { to, title, buttons, subtitle });
            if (result['erro'] == true) {
                return reject(result);
            }
            else {
                return resolve(result);
            }
        });
    }
    /**
     * Sends image message
     * @param to Chat id
     * @param filePath File path or http link
     * @param filename
     * @param caption
     */
    async sendImage(to, filePath, filename, caption) {
        return new Promise(async (resolve, reject) => {
            let base64 = await (0, helpers_1.downloadFileToBase64)(filePath, [
                'image/gif',
                'image/png',
                'image/jpg',
                'image/jpeg',
                'image/webp'
            ]);
            if (!base64) {
                base64 = await (0, helpers_1.fileToBase64)(filePath);
            }
            if (!base64) {
                const obj = {
                    erro: true,
                    to: to,
                    text: 'No such file or directory, open "' + filePath + '"'
                };
                return reject(obj);
            }
            if (!filename) {
                filename = path.basename(filePath);
            }
            this.sendImageFromBase64(to, base64, filename, caption)
                .then(resolve)
                .catch(reject);
        });
    }
    /**
     * Sends message with thumbnail
     * @param thumb
     * @param url
     * @param title
     * @param description
     * @param text
     * @param chatId
     */
    async sendMessageWithThumb(thumb, url, title, description, text, chatId) {
        return this.page.evaluate(({ thumb, url, title, description, chatId, text }) => {
            WAPI.sendMessageWithThumb(thumb, url, title, description, text, chatId);
        }, {
            thumb,
            url,
            title,
            description,
            text,
            chatId
        });
    }
    /**
     * Replies to given mesage id of given chat id
     * @param to Chat id
     * @param content Message body
     * @param quotedMsg Message id to reply to.
     */
    async reply(to, content, quotedMsg) {
        return new Promise(async (resolve, reject) => {
            const typeFunction = 'reply';
            const type = 'string';
            const check = [
                {
                    param: 'to',
                    type: type,
                    value: to,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'content',
                    type: type,
                    value: content,
                    function: typeFunction,
                    isUser: true
                },
                {
                    param: 'quotedMsg',
                    type: type,
                    value: quotedMsg,
                    function: typeFunction,
                    isUser: false
                }
            ];
            const validating = (0, layers_interface_1.checkValuesSender)(check);
            if (typeof validating === 'object') {
                return reject(validating);
            }
            const result = await this.page.evaluate(({ to, content, quotedMsg }) => {
                return WAPI.reply(to, content, quotedMsg);
            }, { to, content, quotedMsg });
            if (result['erro'] == true) {
                reject(result);
            }
            else {
                resolve(result);
            }
        });
    }
    /**
     * Send audio base64
     * @param to Chat id
     * @param base64 base64 data. MUST start with "data:(yourMimeType);base64,"
     */
    async sendVoiceBase64(to, base64) {
        return new Promise(async (resolve, reject) => {
            const mimeType = (0, helpers_1.base64MimeType)(base64);
            if (!mimeType) {
                obj = {
                    erro: true,
                    to: to,
                    text: 'Invalid base64 or missing MimeType!'
                };
                return reject(obj);
            }
            if (!mimeType || mimeType.includes('audio/mpeg')) {
                const result = await this.page.evaluate(({ to, base64 }) => {
                    return WAPI.sendPtt(base64, to);
                }, { to, base64 });
                if (result['erro'] == true) {
                    reject(result);
                }
                else {
                    resolve(result);
                }
            }
            else {
                obj = {
                    erro: true,
                    to: to,
                    text: 'Use the MP3 format to be able to send an audio!'
                };
                return reject(obj);
            }
        });
    }
    /**
     * Send audio file
     * @param to Chat id
     * @param filePath Path file
     */
    async sendVoice(to, filePath) {
        return new Promise(async (resolve, reject) => {
            let base64 = await (0, helpers_1.downloadFileToBase64)(filePath, [
                'audio/mpeg'
            ]);
            if (!base64) {
                base64 = await (0, helpers_1.fileToBase64)(filePath);
            }
            if (!base64) {
                obj = {
                    erro: true,
                    to: to,
                    text: 'No such file or directory, open "' + filePath + '"'
                };
                return reject(obj);
            }
            const mimeInfo = (0, helpers_1.base64MimeType)(base64);
            if (!mimeInfo || mimeInfo.includes('audio/mpeg')) {
                const result = await this.page.evaluate(({ to, base64 }) => {
                    return WAPI.sendPtt(base64, to);
                }, { to, base64 });
                if (result['erro'] == true) {
                    reject(result);
                }
                else {
                    resolve(result);
                }
            }
            else {
                obj = {
                    erro: true,
                    to: to,
                    text: 'Use the MP3 format to be able to send an audio!'
                };
                return reject(obj);
            }
        });
    }
    /**
     * Sends file
     * base64 parameter should have mime type already defined
     * @param to Chat id
     * @param base64 base64 data. MUST start with "data:(yourMimeType);base64,"
     * @param filename
     * @param caption
     */
    async sendFileFromBase64(to, base64, filename, caption) {
        return new Promise(async (resolve, reject) => {
            let mimeType = (0, helpers_1.base64MimeType)(base64);
            if (!mimeType) {
                obj = {
                    erro: true,
                    to: to,
                    text: 'Invalid base64 or missing MimeType!'
                };
                return reject(obj);
            }
            filename = (0, filename_from_mimetype_1.filenameFromMimeType)(filename, mimeType);
            const type = 'FileFromBase64';
            const result = await this.page.evaluate(({ to, base64, filename, caption, type }) => {
                return WAPI.sendFile(base64, to, filename, caption, type);
            }, { to, base64, filename, caption, type });
            if (result['erro'] == true) {
                reject(result);
            }
            else {
                resolve(result);
            }
        });
    }
    /**
     * Sends file from path
     * @param to Chat id
     * @param filePath File path
     * @param filename
     * @param caption
     */
    async sendFile(to, filePath, filename, caption) {
        return new Promise(async (resolve, reject) => {
            let base64 = await (0, helpers_1.downloadFileToBase64)(filePath), obj;
            if (!base64) {
                base64 = await (0, helpers_1.fileToBase64)(filePath);
            }
            if (!base64) {
                obj = {
                    erro: true,
                    to: to,
                    text: 'No such file or directory, open "' + filePath + '"'
                };
                return reject(obj);
            }
            if (!filename) {
                filename = path.basename(filePath);
            }
            this.sendFileFromBase64(to, base64, filename, caption)
                .then(resolve)
                .catch(reject);
        });
    }
    /**
     * Sends a video to given chat as a gif, with caption or not, using base64
     * @param to chat id xxxxx@us.c
     * @param base64 base64 data:video/xxx;base64,xxx
     * @param filename string xxxxx
     * @param caption string xxxxx
     */
    async sendVideoAsGif(to, path, filename, caption) {
        const base64 = await (0, helpers_1.fileToBase64)(path);
        if (base64) {
            return this.sendVideoAsGifFromBase64(to, base64, filename, caption);
        }
    }
    /**
     * Sends a video to given chat as a gif, with caption or not, using base64
     * @param to chat id xxxxx@us.c
     * @param base64 base64 data:video/xxx;base64,xxx
     * @param filename string xxxxx
     * @param caption string xxxxx
     */
    async sendVideoAsGifFromBase64(to, base64, filename, caption) {
        return await this.page.evaluate(({ to, base64, filename, caption }) => {
            WAPI.sendVideoAsGif(base64, to, filename, caption);
        }, { to, base64, filename, caption });
    }
    /**
     * Sends contact card to iven chat id
     * @param to Chat id
     * @param contactsId Example: 0000@c.us | [000@c.us, 1111@c.us]
     */
    async sendContactVcard(to, contactsId, name) {
        return new Promise(async (resolve, reject) => {
            const result = await this.page.evaluate(({ to, contactsId, name }) => {
                return WAPI.sendContactVcard(to, contactsId, name);
            }, { to, contactsId, name });
            if (result['erro'] == true) {
                reject(result);
            }
            else {
                resolve(result);
            }
        });
    }
    /**
     * Send a list of contact cards
     * @param to Chat id
     * @param contacts Example: | [000@c.us, 1111@c.us]
     */
    async sendContactVcardList(to, contacts) {
        return new Promise(async (resolve, reject) => {
            const result = await this.page.evaluate(({ to, contacts }) => {
                return WAPI.sendContactVcardList(to, contacts);
            }, { to, contacts });
            if (result['erro'] == true) {
                reject(result);
            }
            else {
                resolve(result);
            }
        });
    }
    /**
     * Forwards array of messages (could be ids or message objects)
     * @param to Chat id
     * @param messages Array of messages ids to be forwarded
     * @param skipMyMessages
     */
    async forwardMessages(to, messages, skipMyMessages) {
        return new Promise(async (resolve, reject) => {
            const result = await this.page.evaluate(({ to, messages, skipMyMessages }) => {
                return WAPI.forwardMessages(to, messages, skipMyMessages).catch((e) => e);
            }, { to, messages, skipMyMessages });
            if (typeof result['erro'] !== 'undefined' && result['erro'] == true) {
                reject(result);
            }
            else {
                resolve(result);
            }
        });
    }
    /**
     * Generates sticker from the provided animated gif image and sends it (Send image as animated sticker)
     *  @param path image path imageBase64 A valid gif image is required. You can also send via http/https (http://www.website.com/img.gif)
     *  @param to chatId '000000000000@c.us'
     */
    async sendImageAsStickerGif(to, path) {
        let b64 = await (0, helpers_1.downloadFileToBase64)(path, ['image/gif', 'image/webp']);
        if (!b64) {
            b64 = await (0, helpers_1.fileToBase64)(path);
        }
        if (b64) {
            const buff = Buffer.from(b64.replace(/^data:image\/(gif|webp);base64,/, ''), 'base64');
            const mimeInfo = (0, helpers_1.base64MimeType)(b64);
            if (!mimeInfo || mimeInfo.includes('image')) {
                let obj = await (0, helpers_1.stickerSelect)(buff, 1);
                if (typeof obj == 'object') {
                    let _webb64 = obj['webpBase64'];
                    let _met = obj['metadata'];
                    return new Promise(async (resolve, reject) => {
                        const result = await this.page.evaluate(({ _webb64, to, _met }) => {
                            return WAPI.sendImageAsSticker(_webb64, to, _met, 'StickerGif');
                        }, { _webb64, to, _met });
                        if (result['erro'] == true) {
                            reject(result);
                        }
                        else {
                            resolve(result);
                        }
                    });
                }
                else {
                    throw {
                        error: true,
                        message: 'Error with sharp library, check the console log'
                    };
                }
            }
            else {
                console.log('Not an image, allowed format gif');
                return false;
            }
        }
    }
    /**
     * Generates sticker from given image and sends it (Send Image As Sticker)
     * @param path image path imageBase64 A valid png, jpg and webp image is required. You can also send via http/https or row base64 (http://www.website.com/img.gif)
     * @param to chatId '000000000000@c.us'
     */
    async sendImageAsSticker(to, path) {
        let b64 = await (0, helpers_1.downloadFileToBase64)(path, [
            'image/gif',
            'image/png',
            'image/jpg',
            'image/jpeg',
            'image/webp'
        ]);
        if (!b64) {
            b64 = await (0, helpers_1.fileToBase64)(path);
        }
        if (!b64) {
            //accept path as base64 directly
            b64 = path;
        }
        if (b64) {
            const buff = Buffer.from(b64.replace(/^data:image\/(png|jpe?g|webp|gif);base64,/, ''), 'base64');
            const mimeInfo = (0, helpers_1.base64MimeType)(b64);
            if (!mimeInfo || mimeInfo.includes('image')) {
                let obj = await (0, helpers_1.stickerSelect)(buff, 0);
                if (typeof obj == 'object') {
                    let _webb64 = obj['webpBase64'];
                    let _met = obj['metadata'];
                    return new Promise(async (resolve, reject) => {
                        const result = await this.page.evaluate(({ _webb64, to, _met }) => {
                            return WAPI.sendImageAsSticker(_webb64, to, _met, 'Sticker');
                        }, { _webb64, to, _met });
                        if (result['erro'] == true) {
                            reject(result);
                        }
                        else {
                            resolve(result);
                        }
                    });
                }
                else {
                    throw {
                        error: true,
                        message: 'Error with sharp library, check the console log'
                    };
                }
            }
            else {
                console.log('Not an image, allowed formats png, jpeg and webp');
                return false;
            }
        }
    }
    /**
     * TODO: Fix message not being delivered
     * Sends location to given chat id
     * @param to Chat id
     * @param latitude Latitude
     * @param longitude Longitude
     * @param title Text caption
     */
    async sendLocation(to, latitude, longitude, title) {
        return new Promise(async (resolve, reject) => {
            const result = await this.page.evaluate(({ to, latitude, longitude, title }) => {
                return WAPI.sendLocation(to, latitude, longitude, title);
            }, { to, latitude, longitude, title });
            if (result['erro'] == true) {
                reject(result);
            }
            else {
                resolve(result);
            }
        });
    }
    /**
     * Sets a chat status to seen. Marks all messages as ack: 3
     * @param chatId chat id: xxxxx@us.c
     */
    async sendSeen(chatId) {
        return this.page.evaluate((chatId) => WAPI.sendSeen(chatId), chatId);
    }
    /**
     * Starts typing ('Typing...' state)
     * @param chatId
     */
    async startTyping(to) {
        return this.page.evaluate(({ to }) => WAPI.startTyping(to), { to });
    }
    /**
     * Stops typing
     * @param to Chat id
     */
    async stopTyping(to) {
        return this.page.evaluate(({ to }) => WAPI.stopTyping(to), { to });
    }
    /**
     * Sends text with tags
     *
     */
    async sendMentioned(to, message, mentioned) {
        return await this.page.evaluate(({ to, message, mentioned }) => {
            WAPI.sendMessageMentioned(to, message, mentioned);
        }, { to, message, mentioned });
    }
    /**
     * Sets the chat state
     * @param chatState
     * @param chatId
     */
    async setChatState(chatId, chatState) {
        return await this.page.evaluate(({ chatState, chatId }) => {
            WAPI.sendChatstate(chatState, chatId);
        }, { chatState, chatId });
    }
}
exports.SenderLayer = SenderLayer;
//# sourceMappingURL=sender.layer.js.map