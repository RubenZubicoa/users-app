export const error400: Error = {
  code: 21,
  message: "bad request",
};

export const error401: Error = {
  code: 23,
  message: "session token expired",
};

export const error403: Error = {
  code: 56,
  message: "cannot access selected resource",
};

export const error404: Error = {
  code: 10,
  message: "project does not exist",
};

export interface Error {
  code: number;
  message: string;
}

export enum ResponseStatus {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  OK = 200,
  NO_CONTENT = 204,
}
