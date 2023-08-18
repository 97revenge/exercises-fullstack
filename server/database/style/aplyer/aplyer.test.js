const supertest = require("supertest");
const express = require("express");
const app = express();
const route = require("./aplyer");

app.use(route);

describe("validacoes de end-point", () => {
  const response = supertest(app);
  it("deve validar o end-point:/aplyer/", async () => {
    const request = await response.get("/aplyer/");
    expect(request.status).toBe(200);
  });
  it("deve validar o end-point: /aplyer/:ïd", async () => {
    const request = await response.get("/aplyer/");
    expect(request.status).toBe(200);
  });
});
