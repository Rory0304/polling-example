import React from "react";
import { getTask } from "@/api/getTask";
import {
  Subject,
  interval,
  take,
  from,
  first,
  takeUntil,
  switchMap,
} from "rxjs";
import { useUnmount } from "react-use";

interface useTaskGetProps {
  taskId: string;
  onSuccess: () => void;
  onError: () => void;
}

const useTaskGet = ({ taskId, onSuccess, onError }: useTaskGetProps) => {
  const [taskStatus, setTaskStatus] = React.useState<string | null>(null);
  const unsubscribeTask = React.useRef(new Subject());

  const pollingStatus = () => {
    interval(1000)
      .pipe(
        take(5),
        takeUntil(unsubscribeTask.current),
        switchMap(() => from(getTask())),
        first((task) => Boolean(task.result), null)
      )
      .toPromise()
      .then((res) => {
        setTaskStatus(res.result || null);

        // polling 이 모두 끝난 후, result 값이 없으면 catch 로 이동함
        if (res.result === "done") {
          console.log("done");
          onSuccess();
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        onError();
        return;
      });
  };

  if (!!taskId) {
    pollingStatus();
  }

  useUnmount(() => {
    console.log("unmount");
    unsubscribeTask.current.complete();
  });

  return { taskStatus };
};

export default useTaskGet;
