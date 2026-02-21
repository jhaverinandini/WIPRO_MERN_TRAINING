const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const app = require("../server");

describe("🌍 End-to-End Testing", () => {
  let token = "";
  let playlistId = "";

  //step1 reg
  it("E2E → Register User", async () => {
    const res = await request(app)
      .post("/api/auth/register")
      .send({
        name: "E2E User",
        email: "parvathi@gmail.com",
        password: "123456",
      });

    expect(res.status).to.equal(201);
  });

  //step2 login
  it("E2E → Login User", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "e2e@gmail.com",
        password: "123456",
      });

    expect(res.status).to.equal(200);
    token = res.body.token;
  });

  //step3 create playlist
  it("E2E → Create Playlist", async () => {
    const res = await request(app)
      .post("/api/playlists")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "E2E Playlist" });

    expect(res.status).to.equal(201);
    playlistId = res.body._id;
  });

  //get noti
  it("E2E → Get Notifications", async () => {
    const res = await request(app)
      .get("/api/notifications")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).to.equal(200);
  });
});