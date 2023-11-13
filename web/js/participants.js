"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchParticipants() {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield fetch("/api/v1/domains");
        const participants = yield result.json();
        return participants;
    });
}
function main() {
    const participants = fetchParticipants();
    participants.then((participants) => {
        const list = document.getElementsByClassName("_participants")[0];
        if (!list) {
            console.warn("Element with id 'participants' not found");
            return;
        }
        if (participants === null) {
            console.log("No participants found");
            return;
        }
        participants.forEach((participant) => {
            const item = document.createElement("a");
            item.setAttribute("href", `https://${participant.Name}`);
            item.innerText = participant.Name;
            list.appendChild(item);
        });
    });
}
main();
