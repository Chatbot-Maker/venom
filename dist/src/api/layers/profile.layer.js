"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileLayer = void 0;
const host_layer_1 = require("./host.layer");
const helpers_1 = require("../helpers");
class ProfileLayer extends host_layer_1.HostLayer {
    constructor(page, session, options) {
        super(page, session, options);
        this.page = page;
    }
    /**
     * @param contactsId Example: 0000@c.us | [000@c.us, 1111@c.us]
     * @param time duration of silence
     * @param type kind of silence "hours" "minutes" "year"
     * To remove the silence, just enter the contact parameter
     */
    sendMute(id, time, type) {
        return new Promise(async (resolve, reject) => {
            const result = await this.page.evaluate((id, time, type) => WAPI.sendMute(id, time, type), id, time, type);
            if (result['erro'] == true) {
                reject(result);
            }
            else {
                resolve(result);
            }
        });
    }
    /**
     * Change the theme
     * @param string types "dark" or "light"
     */
    setTheme(type) {
        return this.page.evaluate((type) => WAPI.setTheme(type), type);
    }
    /**
     * Sets current user profile status
     * @param status
     */
    async setProfileStatus(status) {
        await this.page.evaluate(({ status }) => {
            WAPI.setMyStatus(status);
        }, { status });
        return 200;
    }
    /**
     * Sets the user's current profile photo
     * @param name
     */
    async setProfilePic(path, to) {
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
        if (b64) {
            const buff = Buffer.from(b64.replace(/^data:image\/(png|jpe?g|webp);base64,/, ''), 'base64');
            const mimeInfo = (0, helpers_1.base64MimeType)(b64);
            if (!mimeInfo || mimeInfo.includes('image')) {
                let _webb64_96 = await (0, helpers_1.resizeImg)(buff, { width: 96, height: 96 }), _webb64_640 = await (0, helpers_1.resizeImg)(buff, { width: 640, height: 640 });
                let obj = { a: _webb64_640, b: _webb64_96 };
                return await this.page.evaluate(({ obj, to }) => WAPI.setProfilePic(obj, to), {
                    obj,
                    to
                });
            }
            else {
                console.log('Not an image, allowed formats png, jpeg and webp');
                return false;
            }
        }
    }
    /**
     * Sets current user profile name
     * @param name
     */
    async setProfileName(name) {
        this.page.evaluate(({ name }) => {
            WAPI.setMyName(name);
        }, { name });
        return 200;
    }
}
exports.ProfileLayer = ProfileLayer;
//# sourceMappingURL=profile.layer.js.map