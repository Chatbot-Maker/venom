"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListenerLayer = void 0;
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
const events_1 = require("events");
const exposed_enum_1 = require("../helpers/exposed.enum");
const profile_layer_1 = require("./profile.layer");
const helpers_1 = require("../helpers");
const callonMessage = new helpers_1.callbackWile();
const callOnack = new helpers_1.callbackWile();
class ListenerLayer extends profile_layer_1.ProfileLayer {
    constructor(page, session, options) {
        super(page, session, options);
        this.page = page;
        this.listenerEmitter = new events_1.EventEmitter();
        this.page.on('load', async () => {
            try {
                await page.waitForSelector('canvas, #app .two, #startup', {
                    visible: true
                });
            }
            catch (_a) { }
            await this._initialize(this.page);
            await this.initialize();
        });
        this.page.on('close', () => {
            this.cancelAutoClose();
            this.spin('Page Closed', 'fail');
        });
    }
    async initialize() {
        const functions = [
            ...Object.values(exposed_enum_1.ExposedFn),
            'onAddedToGroup',
            'onIncomingCall'
        ];
        for (const func of functions) {
            const has = await this.page
                .evaluate((func) => typeof window[func] === 'function', func)
                .catch(() => false);
            if (!has) {
                await this.page
                    .exposeFunction(func, (...args) => this.listenerEmitter.emit(func, ...args))
                    .catch(() => { });
            }
        }
        await this.page
            .evaluate(() => {
            if (!window['onAnyMessage'].exposed) {
                window.WAPI.allNewMessagesListener(window['onAnyMessage']);
                window['onAnyMessage'].exposed = true;
            }
            if (!window['onStateChange'].exposed) {
                window.WAPI.onStateChange(window['onStateChange']);
                window['onStateChange'].exposed = true;
            }
            if (!window['onStreamChange'].exposed) {
                window.WAPI.onStreamChange(window['onStreamChange']);
                window['onStreamChange'].exposed = true;
            }
            if (!window['onAddedToGroup'].exposed) {
                window.WAPI.onAddedToGroup(window['onAddedToGroup']);
                window['onAddedToGroup'].exposed = true;
            }
            if (!window['onIncomingCall'].exposed) {
                window.WAPI.onIncomingCall(window['onIncomingCall']);
                window['onIncomingCall'].exposed = true;
            }
            if (!window['onInterfaceChange'].exposed) {
                window.WAPI.onInterfaceChange(window['onInterfaceChange']);
                window['onInterfaceChange'].exposed = true;
            }
            if (!window['onMessage'].exposed) {
                window.WAPI.waitNewMessages(false, (data) => {
                    data.forEach((message) => {
                        window['onMessage'](message);
                    });
                });
                window['onMessage'].exposed = true;
            }
            if (!window['onAck'].exposed) {
                window.WAPI.waitNewAcknowledgements(window['onAck']);
                window['onAck'].exposed = true;
            }
        })
            .catch(() => { });
    }
    /**
     * @returns Returns the current state of the connection
     */
    async onStreamChange(fn) {
        this.listenerEmitter.on(exposed_enum_1.ExposedFn.onStreamChange, (state) => {
            fn(state);
        });
        return {
            dispose: () => {
                this.listenerEmitter.off(exposed_enum_1.ExposedFn.onStreamChange, fn);
            }
        };
    }
    /**
     * @event Listens to messages received
     * @returns Observable stream of messages
     */
    async onMessage(fn) {
        this.listenerEmitter.on(exposed_enum_1.ExposedFn.OnMessage, (state) => {
            if (!callonMessage.checkObj(state.from, state.id)) {
                callonMessage.addObjects(state.from, state.id);
                fn(state);
            }
        });
        return {
            dispose: () => {
                this.listenerEmitter.off(exposed_enum_1.ExposedFn.OnMessage, (state) => {
                    if (!callonMessage.checkObj(state.from, state.id)) {
                        callonMessage.addObjects(state.from, state.id);
                        fn(state);
                    }
                });
            }
        };
    }
    /**
     * @event Listens to all new messages
     * @param to callback
     * @fires Message
     */
    async onAnyMessage(fn) {
        this.listenerEmitter.on(exposed_enum_1.ExposedFn.OnAnyMessage, fn);
        return {
            dispose: () => {
                this.listenerEmitter.off(exposed_enum_1.ExposedFn.OnAnyMessage, fn);
            }
        };
    }
    /**
     * @event Listens to messages received
     * @returns Observable stream of messages
     */
    async onStateChange(fn) {
        this.listenerEmitter.on(exposed_enum_1.ExposedFn.onStateChange, fn);
        return {
            dispose: () => {
                this.listenerEmitter.off(exposed_enum_1.ExposedFn.onStateChange, fn);
            }
        };
    }
    /**
     * @event Listens to interface mode change See {@link InterfaceState} and {@link InterfaceMode} for details
     * @returns A disposable object to cancel the event
     */
    onInterfaceChange(fn) {
        this.listenerEmitter.on(exposed_enum_1.ExposedFn.onInterfaceChange, fn);
        return {
            dispose: () => {
                this.listenerEmitter.off(exposed_enum_1.ExposedFn.onInterfaceChange, fn);
            }
        };
    }
    /**
     * @event Listens to messages acknowledgement Changes
     * @returns Observable stream of messages
     */
    async onAck(fn) {
        this.listenerEmitter.on(exposed_enum_1.ExposedFn.onAck, (e) => {
            if (!callOnack.checkObj(e.ack, e.id._serialized)) {
                let key = callOnack.getObjKey(e.id._serialized);
                if (key) {
                    callOnack.module[key].id = e.ack;
                    fn(e);
                }
                else {
                    callOnack.addObjects(e.ack, e.id._serialized);
                    fn(e);
                }
            }
        });
        return {
            dispose: () => {
                this.listenerEmitter.off(exposed_enum_1.ExposedFn.onAck, (e) => {
                    if (!callOnack.checkObj(e.ack, e.id._serialized)) {
                        let key = callOnack.getObjKey(e.id._serialized);
                        if (key) {
                            callOnack.module[key].id = e.ack;
                            fn(e);
                        }
                        else {
                            callOnack.addObjects(e.ack, e.id._serialized);
                            fn(e);
                        }
                    }
                });
            }
        };
    }
    /**
     * @event Listens to live locations from a chat that already has valid live locations
     * @param chatId the chat from which you want to subscribes to live location updates
     * @param fn callback that takes in a LiveLocation
     * @returns boolean, if returns false then there were no valid live locations in the chat of chatId
     * @emits <LiveLocation> LiveLocation
     */
    async onLiveLocation(chatId, fn) {
        const method = 'onLiveLocation_' + chatId.replace('_', '').replace('_', '');
        return this.page
            .exposeFunction(method, (liveLocationChangedEvent) => fn(liveLocationChangedEvent))
            .then((_) => this.page.evaluate(({ chatId, method }) => {
            //@ts-ignore
            return WAPI.onLiveLocation(chatId, window[method]);
        }, { chatId, method }));
    }
    /**
     * @event Listens to participants changed
     * @param to group id: xxxxx-yyyy@us.c
     * @param to callback
     * @returns Stream of ParticipantEvent
     */
    async onParticipantsChanged(groupId, fn) {
        const method = 'onParticipantsChanged_' + groupId.replace('_', '').replace('_', '');
        return this.page
            .exposeFunction(method, (participantChangedEvent) => fn(participantChangedEvent))
            .then((_) => this.page.evaluate(({ groupId, method }) => {
            //@ts-ignore
            WAPI.onParticipantsChanged(groupId, window[method]);
        }, { groupId, method }));
    }
    /**
     * @event Fires callback with Chat object every time the host phone is added to a group.
     * @param to callback
     * @returns Observable stream of Chats
     */
    async onAddedToGroup(fn) {
        this.listenerEmitter.on('onAddedToGroup', fn);
        return {
            dispose: () => {
                this.listenerEmitter.off('onAddedToGroup', fn);
            }
        };
    }
    /**
     * @event Listens to messages received
     * @returns Observable stream of messages
     */
    async onIncomingCall(fn) {
        this.listenerEmitter.on('onIncomingCall', fn);
        return {
            dispose: () => {
                this.listenerEmitter.off('onIncomingCall', fn);
            }
        };
    }
}
exports.ListenerLayer = ListenerLayer;
//# sourceMappingURL=listener.layer.js.map