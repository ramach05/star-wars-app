import { runOnMount } from "./../utils/react.util";
import {
  ItemsComponent,
  TPropsItemsComponent,
} from "./../components/items.component";
import { withRX } from "@devexperts/react-kit/dist/utils/with-rx2";
import { merge } from "rxjs";
import { ask, combineContext } from "@devexperts/rx-utils/dist/context.utils";
import { constUndefined } from "fp-ts/lib/function";
import {
  itemsViewModel,
  TItemsViewModel,
} from "../view-models/items.view-model";
import { Sink } from "@devexperts/rx-utils/dist/sink.utils";
import * as RD from "@devexperts/remote-data-ts";

export type TItemsContainerContext = {
  itemsViewModel: TItemsViewModel;
};

const Container = combineContext(
  ask<TItemsContainerContext>(),
  (e) =>
    withRX<TPropsItemsComponent>(ItemsComponent)(() => {
      const {
        itemsViewModel: { allPeopleDataStream$ },
      } = e;

      return {
        props: {
          getAllPeopleData: allPeopleDataStream$,
        },
        defaultProps: {
          getAllPeopleData: RD.initial, //?
          // getAllPeopleData: constUndefined,
        },
        effects$: merge(allPeopleDataStream$),
      };
    }) //?
);

export const ItemsContainer = runOnMount(
  Container,
  () =>
    new Sink({
      itemsViewModel: itemsViewModel(),
    })
); //?
