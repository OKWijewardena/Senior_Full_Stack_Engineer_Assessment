const request = require("supertest");
const app = require("../src/app");

describe("Task API Endpoints", () => {
  it("should create a new task", async () => {
    const res = await request(app).post("/api/tasks").send({
      title: "Test Task",
      description: "This is a test task",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("id");
  });

  it("should retrieve latest 5 tasks", async () => {
    const res = await request(app).get("/api/tasks");
    expect(res.statusCode).toEqual(200);
    expect(res.body.length).toBeLessThanOrEqual(5);
  });

  it("should mark a task as completed", async () => {
    const taskRes = await request(app).post("/api/tasks").send({
      title: "Task to Complete",
      description: "Mark this as done",
    });

    const taskId = taskRes.body.id;
    const res = await request(app).put(`/api/tasks/${taskId}/done`);
    expect(res.statusCode).toEqual(200);
  });
});
