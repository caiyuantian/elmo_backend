import config from '../config'
import { TwitterApi } from "./twitterApi";

interface IUserQuery {
    q: string;
    page?: number;
    count?: number;
}

export class User {

    public apiInstance = new TwitterApi();

    // obtain one user detail by inputting ID
    public getOneByID = (id: string) => {
        return new Promise((resolve, reject) => {

            if (!id) {
                reject({ success: false, result: "error parameter" })
            }
            let url: string = config.UserShowURL + "?user_id=" + id;

            console.log("request url:"+url)
            this.apiInstance.api(url)
                .then(data => {
                    //console.log(JSON.stringify(data));
                    return resolve({ success: true, result: data });
                })
                .catch(error => reject({ success: false, result: error }))
        });
    }

    private instanceOfQueries(toBeDetermined: object): toBeDetermined is IUserQuery {
        if ((toBeDetermined as IUserQuery).q) {
            return true
        }
        return false
    }

    // obtain one user detail by inputting ID
    public getAllByParams = (query: IUserQuery) => {
        return new Promise((resolve, reject) => {
            if (!this.instanceOfQueries(query)) {
                reject({ success: false, result: "error parameter" })
            }
            let q = query["q"],
                page = query.page,
                count = query.count,
                queryStr = '';

            if (q) {
                queryStr = "?q=" + q;
            } else {
                reject({ success: false, result: "error parameter" })
            }
            if (page) {
                queryStr = queryStr + "&page=" + page;
            }
            if (count) {
                queryStr = queryStr + "&count=" + count;
            }

            let url = config.UserSearchURL + queryStr
            this.apiInstance.api(url)
                .then(data => {
                    resolve({ success: true, result: data });
                })
                .catch(error => reject({ success: false, result: error }))
        });
    }
}