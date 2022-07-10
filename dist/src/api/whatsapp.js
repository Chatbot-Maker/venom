"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Whatsapp = void 0;
const controls_layer_1 = require("./layers/controls.layer");
const decrypt_1 = require("./helpers/decrypt");
const WAuserAgente_1 = require("../config/WAuserAgente");
const axios_1 = require("axios");
class Whatsapp extends controls_layer_1.ControlsLayer {
    constructor(page, session, options) {
        super(page, session, options);
        this.page = page;
    }
    /**
     * Decrypts message file
     * @param data Message object
     * @returns Decrypted file buffer (null otherwise)
     */
    async downloadFile(data) {
        return await this.page.evaluate((data) => WAPI.downloadFile(data), data);
    }
    /**
     * Download and returns the media content in base64 format
     * @param messageId Message ou id
     * @returns Base64 of media
     */
    async downloadMedia(messageId) {
        if (typeof messageId !== 'string') {
            messageId = messageId.id;
        }
        const result = await this.page.evaluate((messageId) => WAPI.downloadMedia(messageId).catch((e) => ({
            __error: e
        })), messageId);
        if (typeof result === 'object' && result.__error) {
            throw result.__error;
        }
        return result;
    }
    /**
     * Get the puppeteer page instance
     * @returns The Whatsapp page
     */
    get waPage() {
        return this.page;
    }
    /**
     * Clicks on 'use here' button (When it get unlaunched)
     * This method tracks the class of the button
     * Whatsapp web might change this class name over the time
     * Dont rely on this method
     */
    async useHere() {
        return await this.page.evaluate(() => WAPI.takeOver());
    }
    /**
     * Logout whastapp
     * @returns boolean
     */
    async logout() {
        return await this.page.evaluate(() => WAPI.logout());
    }
    /**
     * Closes page and browser
     * @internal
     */
    async close() {
        try {
            if (!this.page.isClosed()) {
                await this.page.close();
                return true;
            }
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Get message by id
     * @param messageId string
     * @returns Message object
     */
    async getMessageById(messageId) {
        return (await this.page.evaluate((messageId) => WAPI.getMessageById(messageId), messageId));
    }
    /**
     * Decrypts message file
     * @param message Message object
     * @returns Decrypted file buffer (null otherwise)
     */
    async decryptFile(message) {
        const options = (0, decrypt_1.makeOptions)(WAuserAgente_1.useragentOverride);
        message.clientUrl =
            message.clientUrl !== undefined
                ? message.clientUrl
                : message.deprecatedMms3Url;
        if (!message.clientUrl) {
            throw new Error('message is missing critical data needed to download the file.');
        }
        let haventGottenImageYet = true, res;
        try {
            while (haventGottenImageYet) {
                res = await axios_1.default.get(message.clientUrl.trim(), options);
                if (res.status == 200) {
                    haventGottenImageYet = false;
                }
                else {
                    await (0, decrypt_1.timeout)(2000);
                }
            }
        }
        catch (error) {
            console.error(error);
            throw 'Error trying to download the file.';
        }
        const buff = Buffer.from(res.data, 'binary');
        return (0, decrypt_1.magix)(buff, message.mediaKey, message.type, message.size);
    }
}
exports.Whatsapp = Whatsapp;
//# sourceMappingURL=whatsapp.js.map