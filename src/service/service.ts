import { catchError, map, Observable, of, startWith, Subject } from "rxjs";
import { ajax, AjaxError, AjaxRequest } from "rxjs/ajax";
import * as RD from "@devexperts/remote-data-ts";

export enum RequestMethod {
  GET = "GET",
}

type TAjaxRequest = {
  url: string;
  method: RequestMethod;

  async: true;
  headers: {
    "Content-type": "application/json; charset=UTF-8";
  };
  timeout: 5000;
  crossDomain: false;
  withCredentials: false;
  responseType: "";
};

class StarWarsApiClient {
  readonly #errorSubj$ = new Subject<AjaxError>();

  readonly RequestMethod = RequestMethod;

  readonly request = <Response>(
    request: AjaxRequest
  ): Observable<RD.RemoteData<AjaxError, Response>> => {
    const xhr: AjaxRequest = {
      ...request,
      body: request.body && JSON.stringify(request.body),
    };

    return ajax(xhr).pipe(
      map((response: any) => RD.success(response.response)), //?
      catchError((response: AjaxError) => {
        this.#errorSubj$.next(response);
        return of(RD.failure(response));
      }),
      startWith(RD.pending)
    );
  };

  readonly get = <Response>(
    url: string
  ): Observable<RD.RemoteData<AjaxError, Response>> => {
    return this.request({
      url,
      method: this.RequestMethod.GET,
      async: true,
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      timeout: 5000,
      crossDomain: false,
      withCredentials: false,
      responseType: "",
    });
  };
}

export const Api = new StarWarsApiClient();
