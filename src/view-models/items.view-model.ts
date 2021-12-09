import {
  itemsController,
  TPeopleResponse,
} from "../controllers/item.controller";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { AjaxError } from "rxjs/ajax";
import * as RD from "@devexperts/remote-data-ts";

const getAllPeople = itemsController.getAllPeopleRequest;

export type TItemsViewModel = {
  allPeopleDataStream$: Observable<RD.RemoteData<AjaxError, TPeopleResponse[]>>;
};

export const itemsViewModel = () => {
  const allPeopleDataStreamTrigger$ = new BehaviorSubject<
    RD.RemoteData<AjaxError, TPeopleResponse[]>
  >(RD.initial);

  const allPeopleDataStream$ = getAllPeople().pipe(
    tap((v) => allPeopleDataStreamTrigger$.next(v))
  );

  return { allPeopleDataStream$ };
};
