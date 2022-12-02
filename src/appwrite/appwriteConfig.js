import { Client, Account, ID } from "appwrite";

const client = new Client()
  .setEndpoint("http://localhost/v1") // Your API Endpoint
  .setProject("6389c630a6744832ae02"); // Your project ID

export const account = new Account(client);
