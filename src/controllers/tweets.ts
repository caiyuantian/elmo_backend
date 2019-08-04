import config from '../config'
import { TwitterApi } from "./twitterApi";

interface ITweetsQuery {
    user_id: string;
    count?: number;
}

export class Tweet {

    private instanceOfITweetsQuery(toBeDetermined: object): toBeDetermined is ITweetsQuery {
        if ((toBeDetermined as ITweetsQuery).user_id) {
            return true
        }
        return false
    }

    public apiInstance = new TwitterApi();

    // Obtain last tweets by ID and count
    public getTweets = (tweetsQuery: ITweetsQuery) => {
        return new Promise((resolve, reject) => {
            if (!this.instanceOfITweetsQuery(tweetsQuery)) {
                reject({ success: false, result: "error parameter" })
            }
            let user_id = tweetsQuery.user_id,
                count = tweetsQuery.count,
                tweetsQueryStr = '';

            if (user_id) {
                tweetsQueryStr = "?user_id=" + user_id;
            } else {
                reject({ success: false, result: "error parameter" })
            }
            if (count) {
                tweetsQueryStr = tweetsQueryStr + "&count=" + count;
            }

            let url = config.GetTweetsURL + tweetsQueryStr
            this.apiInstance.api(url)
                .then(data => {
                    resolve({ success: true, result: data });
                })
                .catch(error => reject({ success: false, result: error }))

        });
    }
}