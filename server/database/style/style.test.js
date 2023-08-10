const supertest = require("supertest");
const express = require("express");
const style = require("./style");
const app = express();

app.use(style);

describe("validacoes de end-point", () => {
  it("deve validar o end-point  /nav/", async () => {
    const response = await supertest(app).get("/nav/");
    expect(response.status).toBe(200);
  });
});
