const supertest = require("supertest");
const express = require("express");
const style = require("./style");
const app = express();

app.use(style);

describe("validacoes de end-point", () => {
  it("deve validar o end-point:/nav/", async () => {
    const response = await supertest(app).get("/nav/");
    expect(response.status).toBe(200);
  });
  it("deve validar o end-point:/banner/", async () => {
    const response = await supertest(app).get("/banner/");
    expect(response.status).toBe(200);
  });
  it("deve validar o end-point: /footer/", async () => {
    const response = await supertest(app).get("/footer/");

    expect(response.status).toBe(200);
  });
  it("deve validar o end-point:/card/", async () => {
    const response = await supertest(app).get("/card/");
    expect(response.status).toBe(200);
  });
});
