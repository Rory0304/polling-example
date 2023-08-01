"use client";

import React from "react";
import Modal from "@/components/Modal";
import { getTaskId } from "@/api/getTask";
import useTaskGet from "@/hooks/useTaskGet";

const PollingExamplePage: React.FC<{ msg: string }> = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [taskId, setTaskId] = React.useState<string>("");

  const [openModal, setOpenModal] = React.useState(false);

  const reset = () => {
    console.log("reset");
    setIsLoading(false);
    setOpenModal(false);
    setTaskId("");
  };

  const handleTaskGetError = () => {
    console.log("error");
    reset();
    // show tooltip
  };

  const handleTaskGetSuccess = () => {
    console.log("success");
    reset();
    // show tooltip
  };

  const { taskStatus } = useTaskGet({
    taskId: taskId,
    onError: handleTaskGetError,
    onSuccess: handleTaskGetSuccess,
  });

  const handleModalSaveBtnClick = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await getTaskId().then((res) => {
        return setTaskId(res);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="h-screen container flex justify-center items-center">
      <section className="text-center">
        <h1 className="font-bold text-3xl mb-5 text-white">Polling Example</h1>
        <p>Step1. Open Modal</p>
        <p>Step2. Click Save button</p>
        <p>Step3. Check network tab in development tool</p>
        <button
          className="btn btn-primary mt-5"
          onClick={() => setOpenModal(true)}
        >
          open modal
        </button>
      </section>
      <Modal
        isLoading={isLoading}
        open={openModal}
        onSaveBtnClick={(e) => handleModalSaveBtnClick(e)}
        onModalClose={() => setOpenModal(false)}
      />
    </div>
  );
};

export default PollingExamplePage;
