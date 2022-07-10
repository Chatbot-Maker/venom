"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlsLayer = void 0;
const ui_layer_1 = require("./ui.layer");
const layers_interface_1 = require("../helpers/layers-interface");
let obj;
class ControlsLayer extends ui_layer_1.UILayer {
    constructor(page, session, options) {
        super(page, session, options);
        this.page = page;
    }
    /**
     * Check if there is chat
     * @param contactId {string} id '000000000000@c.us'
     * @returns object
     */
    async checkChat(contactId) {
        return new Promise(async (resolve, reject) => {
            const result = await this.page.evaluate(({ contactId }) => {
                return WAPI.checkChat(contactId);
            }, { contactId });
            if (result['erro'] == true) {
                return reject(result);
            }
            else {
                return resolve(result);
            }
        });
    }
    /**
     * Unblock contact
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    async unblockContact(contactId) {
        return this.page.evaluate((contactId) => WAPI.unblockContact(contactId), contactId);
    }
    /**
     * Block contact
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    async blockContact(contactId) {
        return this.page.evaluate((contactId) => WAPI.blockContact(contactId), contactId);
    }
    /**
     * puts the chat as unread
     * @param contactId {string} id '000000000000@c.us'
     * @returns boolean
     */
    async markUnseenMessage(contactId) {
        return this.page.evaluate((contactId) => WAPI.markUnseenMessage(contactId), contactId);
    }
    /**
     * Deletes the given chat
     * @param chatId {string} id '000000000000@c.us'
     * @returns boolean
     */
    async deleteChat(chatId) {
        return this.page.evaluate((chatId) => WAPI.deleteConversation(chatId), chatId);
    }
    /**
     * Archive and unarchive chat messages with true or false
     * @param chatId {string} id '000000000000@c.us'
     * @param option {boolean} true or false
     * @returns boolean
     */
    async archiveChat(chatId, option) {
        return this.page.evaluate(({ chatId, option }) => WAPI.archiveChat(chatId, option), { chatId, option });
    }
    /**
     * Pin and Unpin chat messages with true or false
     * @param chatId {string} id '000000000000@c.us'
     * @param option {boolean} true or false
     * @param nonExistent {boolean} Pin chat, non-existent (optional)
     * @returns object
     */
    async pinChat(chatId, option, nonExistent) {
        return new Promise(async (resolve, reject) => {
            const result = await this.page.evaluate(({ chatId, option, nonExistent }) => {
                return WAPI.pinChat(chatId, option, nonExistent);
            }, { chatId, option, nonExistent });
            if (result['erro'] == true) {
                reject(result);
            }
            else {
                resolve(result);
            }
        });
    }
    /**
     * Deletes all messages of given chat
     * @param chatId
     * @returns boolean
     */
    async clearChatMessages(chatId) {
        return this.page.evaluate((chatId) => WAPI.clearChatMessages(chatId), chatId);
    }
    /**
     * Deletes message all of given message id
     * @param chatId The chat id from which to delete the message.
     * @param messageId The specific message id of the message to be deleted
     * @param onlyLocal If it should only delete locally (message remains on the other recipienct's phone). Defaults to false.
     */
    async deleteMessageAll(chatId, messageId) {
        return new Promise(async (resolve, reject) => {
            const typeFunction = 'deleteMessageAll';
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
                    param: 'messageId',
                    type: 'object',
                    value: messageId,
                    function: typeFunction,
                    isUser: true
                }
            ];
            const validating = (0, layers_interface_1.checkValuesSender)(check);
            if (typeof validating === 'object') {
                return reject(validating);
            }
            const result = await this.page.evaluate(({ contactId, messageId }) => WAPI.deleteMessagesAll(contactId, messageId, false), { contactId: chatId, messageId });
            if (result['erro'] == true) {
                return reject(result);
            }
            else {
                return resolve(result);
            }
        });
    }
    /**
     * Deletes message me of given message id
     * @param chatId The chat id from which to delete the message.
     * @param messageId The specific message id of the message to be deleted
     * @param onlyLocal If it should only delete locally (message remains on the other recipienct's phone). Defaults to false.
     */
    async deleteMessageMe(chatId, messageId) {
        return new Promise(async (resolve, reject) => {
            const typeFunction = 'deleteMessageMe';
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
                    param: 'messageId',
                    type: 'object',
                    value: messageId,
                    function: typeFunction,
                    isUser: true
                }
            ];
            const validating = (0, layers_interface_1.checkValuesSender)(check);
            if (typeof validating === 'object') {
                return reject(validating);
            }
            const result = await this.page.evaluate(({ contactId, messageId }) => WAPI.deleteMessagesMe(contactId, messageId, true), { contactId: chatId, messageId });
            if (result['erro'] == true) {
                return reject(result);
            }
            else {
                return resolve(result);
            }
        });
    }
    /**
     * Archive and unarchive chat messages with true or false
     * @param chatId {string} id '000000000000@c.us'
     * @param option {boolean} true or false
     * @returns boolean
     */
    async setMessagesAdminsOnly(chatId, option) {
        return this.page.evaluate(({ chatId, option }) => WAPI.setMessagesAdminsOnly(chatId, option), { chatId, option });
    }
}
exports.ControlsLayer = ControlsLayer;
//# sourceMappingURL=controls.layer.js.map