export type JSONObject = { [key: string]: JSONValue };
export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONValue[];
