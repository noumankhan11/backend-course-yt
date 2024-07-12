import { z } from "zod";

const messageValidator = z.object({
  username: z
    .string({ required_error: "username is required" })
    .trim()
    .min(5, { message: "username must be at least 5 characters" })
    .max(25, {
      message: "username must be not more than 25 characters",
    }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .min(5, { message: "email must be at least of 5 character" })
    .max(20, "email must be not more than 20 characters"),
  message: z
    .string({ required_error: "please write some message" })
    .min(2, "message must be at least 2 characters")
    .max(250, "message must not be more than 250 characters"),
});

export default messageValidator;
