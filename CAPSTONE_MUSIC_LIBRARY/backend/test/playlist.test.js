const request = require("supertest");
const chai = require("chai");
const expect = chai.expect;

const app = require("../server");

describe("📂 Playlist API", () => {
  let token = "";
  let playlistId = "";

  before(async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({
        email: "testuser@gmail.com",
        password: "123456",
      });

    token = res.body.token;
  });

  
  it("Should create playlist", async () => {
    const res = await request(app)
      .post("/api/playlists")
      .set("Authorization", `Bearer ${token}`)
      .send({ name: "My Playlist" });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property("_id");

    playlistId = res.body._id;
  });

  
  it("Should get user playlists", async () => {
    const res = await request(app)
      .get("/api/playlists")
      .set("Authorization", `Bearer ${token}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.be.an("array");
  });
});