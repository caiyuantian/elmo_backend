import config from '../config'
var OAuth = require('oauth');

export class TwitterApi {

    private twitterKey = config.CustomerKey;
    private twitterSecret = config.CustomerSecret;
    private token = config.Token;
    private secret = config.TokenSecret;

    public api = <T>(request: string): Promise<T> => {
        return new Promise((resolve, reject) => {
            let oauth = new OAuth.OAuth(
                'https://api.twitter.com/oauth/request_token',
                'https://api.twitter.com/oauth/access_token',
                this.twitterKey,
                this.twitterSecret,
                '1.0',
                null,
                'HMAC-SHA1'
            );

            oauth.get(
                request,
                this.token,
                this.secret,
                function (error: any, data: any) {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(JSON.parse(data));
                    }
                });
        });
    };
}