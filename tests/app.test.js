const request = require("supertest");
const app = require("../src/app");

describe("Demo App API", () => {
  test("GET / should return welcome message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/demo app/i);
  });

  test("GET /api/hello should return greeting", async () => {
    const res = await request(app).get("/api/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body.data).toBe("Hello, Priyanshu!");
  });
});
