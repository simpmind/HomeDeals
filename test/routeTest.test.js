let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../server");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {

    /**
     * Test the GET route
     */
    describe("GET /client", () => {
        it("It should GET the cline with id=1", (done) => {
            chai.request(server)
                .get("/client/1")
                .end((err, response) => {
                    response.should.have.status(200);
                    done();
                });
        });

        it("It should NOT GET the client with id=9", (done) => {
            chai.request(server)
                .get("/client/9")
                .end((err, response) => {
                    response.should.have.status(404);
                    done();
                });
        });

    });

});