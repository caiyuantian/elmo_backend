import { Tweet } from "../src/controllers/tweets";

// **** test getTweets
it("Get Tweets - Normal - Return a tweets list", async () => {
    let tweets = new Tweet();
    let request = {
        "user_id": "221575638",
        "count": 5
    }
    expect.assertions(1);
    return tweets.getTweets(request).then((response: any) => {
        expect(response.success).toEqual(true);
    });
})

it("Get Tweets - Normal - count = 0", async () => {
    let tweets = new Tweet();
    let request = {
        "user_id": "221575638",
        "count": 0
    }
    expect.assertions(1);
    return tweets.getTweets(request).then((response: any) => {
        expect(response.success).toEqual(true);
    });
})

it("Get User List - Error during fetch data", async () => {
    let tweets = new Tweet();
    let request = {
        "user_id": "221575638",
        "count": 5
    }
    const spy = jest.spyOn(tweets.apiInstance, 'api');
    spy.mockImplementation(() => Promise.reject({ success: false, error: "test error" }));
    
    let result = tweets.getTweets(request).catch((response: any) => {
        expect(response.success).toEqual(false);
    });
    spy.mockRestore();
    return result;
})

it("Get User List - error - wrong query parameters", async () => {
    let tweets = new Tweet();
    let request = {
        "user_id": "",
        "count": 5
    }
    expect.assertions(1);
    return tweets.getTweets(request).catch((response: any) => {
        expect(response.success).toEqual(false);
    });
})