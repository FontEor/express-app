const request = require("supertest");
const app = require("../app");
const mongoose = require("mongoose");

describe("Users API", () => {
  beforeAll(async () => {
    // Connect to test database
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost:27017/test",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
  });

  afterAll(async () => {
    // Close database connection
    await mongoose.connection.close();
  });

  beforeEach(async () => {
    // Clear users collection before each test
    await mongoose.connection.db.collection("users").deleteMany({});
  });

  describe("GET /api/v1/users", () => {
    it("should return empty array when no users exist", async () => {
      const response = await request(app).get("/api/v1/users");
      expect(response.status).toBe(200);
      expect(response.body).toEqual([]);
    });
  });

  describe("POST /api/v1/users", () => {
    it("should create a new user", async () => {
      const userData = {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        password: "password123",
      };

      const response = await request(app).post("/api/v1/users").send(userData);

      expect(response.status).toBe(201);
      expect(response.body.name).toBe(userData.name);
      expect(response.body.email).toBe(userData.email);
    });
  });

  describe("GET /api/v1/users/:id", () => {
    it("should return a user by ID", async () => {
      const userData = {
        name: "Jane Doe",
        age: 25,
        email: "jane@example.com",
        password: "password123",
      };

      const createResponse = await request(app)
        .post("/api/v1/users")
        .send(userData);

      const userId = createResponse.body._id;

      const getResponse = await request(app).get(`/api/v1/users/${userId}`);
      expect(getResponse.status).toBe(200);
      expect(getResponse.body.name).toBe(userData.name);
    });

    it("should return 404 for non-existent user", async () => {
      const response = await request(app).get(
        "/api/v1/users/507f1f77bcf86cd799439011",
      );
      expect(response.status).toBe(404);
    });
  });

  describe("PUT /api/v1/users/:id", () => {
    it("should update a user", async () => {
      const userData = {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        password: "password123",
      };

      const createResponse = await request(app)
        .post("/api/v1/users")
        .send(userData);

      const userId = createResponse.body._id;
      const updateData = { name: "John Smith", age: 31 };

      const updateResponse = await request(app)
        .put(`/api/v1/users/${userId}`)
        .send(updateData);

      expect(updateResponse.status).toBe(200);
      expect(updateResponse.body.name).toBe(updateData.name);
      expect(updateResponse.body.age).toBe(updateData.age);
    });
  });

  describe("DELETE /api/v1/users/:id", () => {
    it("should delete a user", async () => {
      const userData = {
        name: "John Doe",
        age: 30,
        email: "john@example.com",
        password: "password123",
      };

      const createResponse = await request(app)
        .post("/api/v1/users")
        .send(userData);

      const userId = createResponse.body._id;

      const deleteResponse = await request(app).delete(
        `/api/v1/users/${userId}`,
      );
      expect(deleteResponse.status).toBe(200);

      const getResponse = await request(app).get(`/api/v1/users/${userId}`);
      expect(getResponse.status).toBe(404);
    });
  });
});
