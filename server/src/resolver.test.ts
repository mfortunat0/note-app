import { gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import { PrismaClient } from "@prisma/client";
import server from "./index";

const prisma = new PrismaClient();

const CREATE_NOTE = gql`
  mutation {
    createNote(note: { title: "title", content: "content" }) {
      title
      content
    }
  }
`;

const UPDATE_NOTE = gql`
  mutation {
    updateNote(id: 1, note: { title: "title 2", content: "content 2" }) {
      title
      content
    }
  }
`;

const GET_NOTES = gql`
  query {
    notes {
      title
      content
    }
  }
`;

const DELETE_NOTE = gql`
  mutation {
    deleteNote(id: 1) {
      title
      content
    }
  }
`;

describe("starting graphql queries", () => {
  it("should be create new user", async () => {
    const { query } = createTestClient(server);
    const res = await query({ query: CREATE_NOTE });
    expect(res.data.createNote).toEqual({
      title: "title",
      content: "content",
    });
  });

  it("must update a user", async () => {
    const { query } = createTestClient(server);
    const res = await query({ query: UPDATE_NOTE });
    expect(res.data.updateNote).toEqual({
      title: "title 2",
      content: "content 2",
    });
  });
  it("should show all users", async () => {
    const { query } = createTestClient(server);
    const res = await query({ query: GET_NOTES });
    expect(res.data.notes).toEqual([
      {
        title: "title 2",
        content: "content 2",
      },
    ]);
  });
  it("should delete user", async () => {
    const { query } = createTestClient(server);
    const res = await query({ query: DELETE_NOTE });
    expect(res.data.deleteNote).toEqual({
      title: "title 2",
      content: "content 2",
    });
  });
});

beforeAll(async () => {
  await prisma.$queryRaw("TRUNCATE TABLE notes RESTART IDENTITY");
});

afterAll(async () => {
  await prisma.$disconnect();
  server.stop();
});
