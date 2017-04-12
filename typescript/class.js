var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
/**
 * base adapter
 */
export default class {
    constructor() {
        this.list = [1, 2, 3];
    }
    printDelayed(elements) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const element of elements) {
                yield this.delay(200);
                console.log(element);
            }
        });
    }
    delay(milliseconds, ...args) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                setTimeout(resolve, milliseconds);
            });
        });
    }
}
//# sourceMappingURL=class.js.map