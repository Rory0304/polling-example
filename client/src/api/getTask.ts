// https://nextjs.org/docs/api-routes/introduction
const END_POINT = "http://localhost:3030";

export const getTaskId = async () => {
  const taskId = await fetch(`${END_POINT}/api/task/new`, {
    method: "GET",
  });

  return taskId.json();
};

export const getTask = async () => {
  const taskStatus = await fetch(`${END_POINT}/api/task`, {
    method: "GET",
  });

  return taskStatus.json();
};
