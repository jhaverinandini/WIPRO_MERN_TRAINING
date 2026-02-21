const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const app = require("../server");

describe("🎵 Song API", () => {
  let token = "";

  
  before(async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "testuser@gmail.com",
        password: "123456",
      });

    token = res.body.token;
  });

  
  it("Should create a new song", async () => {
    const res = await request(app)
      .post("/api/songs")
      .set("Authorization", `Bearer ${token}`)
      .field("name", "Test Song")
      .field("singer", "Singer Test");

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
  });


  it("Should fetch all songs", async () => {
    const res = await request(app).get("/api/songs");

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });
});