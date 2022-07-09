"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UILayer = void 0;
const group_layer_1 = require("./group.layer");
class UILayer extends group_layer_1.GroupLayer {
    constructor(page, session, options) {
        super(page, session, options);
        this.page = page;
    }
    /**
     * checks and returns whether a message and a reply
     * @param messages
     */
    async returnReply(messages) {
        return await this.page.evaluate(({ messages }) => WAPI.returnReply(messages), {
            messages
        });
    }
    /**
     * Opens given chat at last message (bottom)
     * Will fire natural workflow events of whatsapp web
     * @param chatId
     */
    async openChat(chatId) {
        return this.page.evaluate((chatId) => WAPI.openChat(chatId), chatId);
    }
    /**
     * Opens chat at given message position
     * @param chatId Chat id
     * @param messageId Message id (For example: '06D3AB3D0EEB9D077A3F9A3EFF4DD030')
     */
    async openChatAt(chatId, messageId) {
        return this.page.evaluate((chatId) => WAPI.openChatAt(chatId, messageId), chatId);
    }
}
exports.UILayer = UILayer;
//# sourceMappingURL=ui.layer.js.map