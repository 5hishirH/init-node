import { asyncHandler } from "../utils/async-handler";
// import { ApiError } from "../utils/api-error";

const testServer = asyncHandler((_, res) => {
  res.status(200).send("Server is running!");
});

export { testServer };
