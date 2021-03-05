import { profileName, profileJob } from "../utils/constants.js";

export default class UserInfo {
    constructor({ profile, job }) {
        this._profile = profile;
        this._job = job;
    }

    getUserInfo() {
        return {
            profile: this._profile,
            job: this._job
        };
    }

    setUserInfo() {
        profileName.textContent = this._profile;
        profileJob.textContent = this._job;
    }
}