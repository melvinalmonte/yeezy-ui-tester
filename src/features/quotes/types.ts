export type quoteSliceProps = {
  quote: string;
  status: "idle" | "pending" | "fulfilled" | "rejected";
  error: object;
};
