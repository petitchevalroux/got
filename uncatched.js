const gotNpm = require("got"),
        http = require("http"),
        gotMaster = require("."),
        assert = require("assert");

http.request = () => {
    throw new TypeError("Request path contains unescaped characters");
};

gotMaster("http://example.com")
        .catch(err => {
            assert(err instanceof TypeError);
        });

gotNpm("http://example.com")
        .catch(err => {
            assert(err instanceof TypeError);
        });
