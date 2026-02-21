const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const app = require("../server");

describe("🔐 Auth API", () => {
  let token = "";

  //register
  it("Should register a new user", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "Test User",
        email: "shivaya@gmail.com",
        phone: "9999999999",
        password: "123456",
        role: "admin",
      });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");
  });

  //login
  it("Should login user & return token", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "testuser@gmail.com",
        password: "123456",
      });

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property("token");

    token = res.body.token;
  });
});