"use client";

import { deleteTodo, editTodo } from "@/actions/todoActions";
import UIButton from "@/shared/ui/UIButton";
import UIForm from "@/shared/ui/UIForm";
import UIInput from "@/shared/ui/UIInput";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "@/shared/ui/shadcn/ui/dialog";
import { useState } from "react";

export default function TodosActions({
  id,
  title,
}: {
  id: number;
  title: string;
}) {
  const [showEdit, setShowEdit] = useState(false);

  const handleSubmit = () => {
    setShowEdit(false);
  };

  return (
    <div className="flex gap-2">
      <UIForm action={deleteTodo}>
        <input
          name="inputId"
          value={id}
          className="border-gray-700 border"
          type="hidden"
        />
        <button className="hover:before:opacity-10 before:content[''] peer relative flex justify-center text-sm items-center text-white bg-red-500 rounded w-5 h-5">
          &#10006;
        </button>
      </UIForm>

      <button
        onClick={() => setShowEdit(true)}
        className="flex justify-center text-sm items-center text-white bg-orange-500 rounded w-5 h-5"
      >
        ✎
      </button>

      <Dialog open={showEdit} onOpenChange={() => setShowEdit(false)}>
        <DialogContent className="max-w-[340px]">
          <DialogHeader>
            <DialogTitle>Edit Todo</DialogTitle>
          </DialogHeader>
          <UIForm
            action={editTodo}
            onSubmit={handleSubmit}
            className="flex flex-col gap-2"
          >
            <input
              name="inputId"
              value={id}
              className="border-gray-700 border"
              type="hidden"
            />

            <UIInput
              defaultValue={title}
              placeholder="Add a new todo"
              name="input"
            />
            <DialogFooter>
              <UIButton
                onClick={handleSubmit}
                className=" w-full"
                text="Save"
              />
            </DialogFooter>
          </UIForm>
        </DialogContent>
      </Dialog>
    </div>
  );
}
