const request = require("supertest");
const api = require("../../api");

describe("/health", () => {
  describe("GET", () => {
    it("returns a 200 response", async () => {
      const res = await request(api).get("/health");

      expect(res.statusCode).toBe(200);
    });

    it("returns a JSON response with a single boolean property called ok", async () => {
      const res = await request(api).get("/health");

      expect(res.body).toMatchObject({
        ok: true,
      });
    });
  });
});
