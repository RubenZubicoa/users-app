import { Injectable } from "@angular/core";

import { FuseMockApiService } from "../../../projects/mock-api/src/public-api";
import { ResponseStatus } from "../data";

import { users } from "./data";

@Injectable({
  providedIn: "root",
})
export class UsersMockApi {
  private static readonly BASE_URL = "/users";

  constructor(private readonly fuseMockApiService: FuseMockApiService) {
    this.registerHandlers();
  }

  private static getUrl(path: string): string {
    return path !== ""
      ? `${UsersMockApi.BASE_URL}/${path}`
      : `${UsersMockApi.BASE_URL}`;
  }

  private registerHandlers(): void {
    this.fuseMockApiService.onGet(UsersMockApi.getUrl("")).reply((req) => {
      const userId = req.request.params.get("userId");

      if (userId) {
        return [
          ResponseStatus.OK,
          users.find(
            (user) => user.id === parseInt(userId),
          ),
        ];
      }
      return [ResponseStatus.OK, users];
    });
    this.fuseMockApiService.onDelete(UsersMockApi.getUrl("")).reply((req) => {
      const userId = req.request.params.get("userId");

      if (userId){
        const index = users.findIndex((u) => u.id === parseInt(userId))
        users.splice(index, 1)
        return [ResponseStatus.OK, users]
      }
      return [ResponseStatus.NOT_FOUND, []]
    })
    this.fuseMockApiService.onPost(UsersMockApi.getUrl("")).reply((req) => {
      const user = req.request.body;

      if (user){
        users.push(user)
        return [ResponseStatus.OK, users]
      }
      return [ResponseStatus.BAD_REQUEST, []]
    })
    this.fuseMockApiService.onPut(UsersMockApi.getUrl("")).reply((req) => {
      const userId = req.request.params.get("userId");
      const user = req.request.body;

      if (userId){
        const index = users.findIndex((u) => u.id === parseInt(userId))
        users[index] = user
        return [ResponseStatus.OK, users]
      }
      return [ResponseStatus.NOT_FOUND, []]
    })
  }
}
