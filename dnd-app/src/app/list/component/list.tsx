'use client';

import { useState } from "react";
import { ListInput } from "@/components/list_input";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const List = () => {
  const [list, setList] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");

  const onsubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // ページリロードを防ぐ
    if (inputValue.trim() === "") return; // 空の値は追加しない
    setList([...list, inputValue]); // 新しいアイテムを追加
    setInputValue(""); // 追加後に入力欄をクリア
  };

  const onchange = (index: number, text: string) => {
    const newlist = [...list];
    newlist[index] = text;
    setList(newlist);
  };

  const onremove = (num: number) => {
    const newlist = [...list];
    newlist.splice(num, 1);
    setList(newlist);
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4">
        <div className="flex mb-4">
          <form onSubmit={onsubmit} className="flex w-full space-x-2">
            <Input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)} // 入力値の更新
              className="flex-grow p-2 border rounded-md"
              placeholder="Enter item"
            />
            <Button type="submit" size={"lg"} variant={"secondary"} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Add
            </Button>
          </form>
        </div>

        <div className="space-y-2">
          {list.length > 0 ? (
            list.map((s, i) => (
              <div key={i} className="flex items-center justify-between p-2 border rounded-md shadow-sm bg-white">
                <ListInput
                  value={s}
                  onRemove={() => onremove(i)}
                  onChange={(e) => onchange(i, e.target.value)} // 変更時に値を更新
                  className="flex-grow"
                />
                <Button className="ml-2 bg-red-500 text-white rounded-md hover:bg-red-600" onClick={() => onremove(i)}>
                  Remove
                </Button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No items in the list</p>
          )}
        </div>
      </div>
    </>
  );
};
