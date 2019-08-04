import { User } from "../src/controllers/users";

// **** test getOneByID
it("Get User by ID - Normal - Return a users list", async () => {

    let users = new User();
    expect.assertions(1);
    return users.getOneByID("17006157").then((response: any) => {
        expect(response.success).toEqual(true);
    });
})

it("Get User by ID - Error during fetch data", async () => {
    let users = new User();
    const spy = jest.spyOn(users.apiInstance, 'api');
    spy.mockImplementation(() => Promise.reject({ error: "test error" }));
    
    let result = users.getOneByID("1").catch((response: any) => {
        expect(response.success).toEqual(false);
    });
    spy.mockRestore();
    return result;
})

it("Get User by ID - Error ID", async () => {
    let users = new User();
    let result = users.getOneByID("-1").catch((response: any) => {
        expect(response.success).toEqual(false);
    });
    return result;
})

it("Get User by ID - Error ID", async () => {
    let users = new User();
    let result = users.getOneByID("").catch((response: any) => {
        expect(response.success).toEqual(false);
    });
    return result;
})

// **** test getAllByParams
it("Get User List - Normal - Return a users list", async () => {
    let users = new User();
    let request = {
        "q": "robin",
        "page": 1,
        "count": 1
    }
    expect.assertions(1);
    return users.getAllByParams(request).then((response: any) => {
        expect(response.success).toEqual(true);
    });
})

it("Get User List - Error during fetch data", async () => {
    let users = new User();
    let request = {
        "q": "robin",
        "page": 1,
        "count": 1
    }
    const spy = jest.spyOn(users.apiInstance, 'api');
    spy.mockImplementation(() => Promise.reject({ success: false, error: "test error" }));
    
    let result = users.getAllByParams(request).catch((response: any) => {
        expect(response.success).toEqual(false);
    });
    spy.mockRestore();
    return result;
})

it("Get User List - error - page too large", async () => {
    let users = new User();
    let request = {
        "q": "robin",
        "page": 10000,
        "count": 1
    }
    expect.assertions(1);
    return users.getAllByParams(request).catch((response: any) => {
        expect(response.success).toEqual(false);
    });
})

it("Get User List - error - wrong query parameters", async () => {
    let users = new User();
    let request = {
        "q": "",
        "page": 0,
        "count": 0
    }
    expect.assertions(1);
    return users.getAllByParams(request).catch((response: any) => {
        expect(response.success).toEqual(false);
    });
})