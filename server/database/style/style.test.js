const supertest = require("supertest");
const express = require("express");
const style = require("./style");
const { default: axios } = require("axios");
const app = express();

app.use(style);

describe("validacoes de end-point", () => {
  const response = supertest(app);

  it("deve validar o end-point:servers/style/", () => {
    axios
      .get(`http://localhost:4000/servers`)
      .then((response) => response.data)
      .then((data) => {
        const value = [...data];
        for (let i = 0; i <= value.length; i++) {
          const { name } = value[i];
          const request = response.get("/" + name + "/");
          console.log(name);
        }
      });
  });

  axios
    .get(`http://localhost:4000/servers`)
    .then((response) => response.data)
    .then((data) => {
      const value = [...data];
      const obj = value[0];
      const { name } = obj;
      console.log(name);

      for (let i = 0; i <= value.length; i++) {
        const { name } = value[i];
        const request = response.get(`/${name}/`);

        console.log(name);
        // expect(request.status).toBe(200);
      }
    });

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
