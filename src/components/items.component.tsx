import React from "react";
import * as RD from "@devexperts/remote-data-ts";
import { AjaxError } from "rxjs/ajax";
import { TPeopleResponse } from "../controllers/item.controller";

export type TPropsItemsComponent = {
  // getAllPeopleData: () => void;
  getAllPeopleData: RD.RemoteData<AjaxError, TPeopleResponse[]>;
};

export const ItemsComponent = (props: TPropsItemsComponent) => {
  const showAllPeople = () => {};

  return (
    <section>
      <div>asdasd</div>
      <button type="button" onClick={showAllPeople}>
        All People
      </button>
    </section>
  );
};
