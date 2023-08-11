const supertest = require("supertest");
const express = require("express");
const app = express();
const exercises = require("./exercises");

app.use(exercises);

describe("validando os end-points", () => {
  it("dever validar o end-point: /exercises/", async () => {
    const response = await supertest(app).get("/exercises/");
    expect(response.status).toBe(200);
  });
});
