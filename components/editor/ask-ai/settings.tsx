import classNames from "classnames";
import { PiGearSixFill } from "react-icons/pi";
import { RiCheckboxCircleFill } from "react-icons/ri";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { PROVIDERS, MODELS } from "@/lib/providers";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useUpdateEffect } from "react-use";
import Image from "next/image";

export function Settings({
  open,
  onClose,
  model,
  error,
  isFollowUp = false,
  onModelChange,
}: {
  open: boolean;
  model: string;
  error?: string;
  isFollowUp?: boolean;
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  onModelChange: (model: string) => void;
}) {
  const [ollamaModels, setOllamaModels] = useState<{ value: string; label: string; }[]>([]);

  useEffect(() => {
    const fetchOllamaModels = async () => {
      try {
        const response = await fetch("/api/ollama/models");
        if (response.ok) {
          const data = await response.json();
          setOllamaModels(data.models);
        } else {
          console.error("Failed to fetch Ollama models");
        }
      } catch (error) {
        console.error("Error fetching Ollama models:", error);
      }
    };

    fetchOllamaModels();
  }, []);
  

  return (
    <div className="">
      <Popover open={open} onOpenChange={onClose}>
        <PopoverTrigger asChild>
          <Button variant="black" size="sm">
            <PiGearSixFill className="size-4" />
            Settings
          </Button>
        </PopoverTrigger>
        <PopoverContent
          className="!rounded-2xl p-0 !w-96 overflow-hidden !bg-neutral-900"
          align="center"
        >
          <header className="flex items-center justify-center text-sm px-4 py-3 border-b gap-2 bg-neutral-950 border-neutral-800 font-semibold text-neutral-200">
            Modified by jacknavodari
          </header>
          <main className="px-4 pt-5 pb-6 space-y-5">
            {error !== "" && (
              <p className="text-red-500 text-sm font-medium mb-2 flex items-center justify-between bg-red-500/10 p-2 rounded-md">
                {error}
              </p>
            )}
            <label className="block">
              <p className="text-neutral-300 text-sm mb-2.5">
                Choose a Ollama model
              </p>
              <Select defaultValue={model} onValueChange={onModelChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a Ollama model" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Ollama models</SelectLabel>
                    {ollamaModels.map(
                      ({
                        value,
                        label,
                      }: {
                        value: string;
                        label: string;
                      }) => (
                        <SelectItem
                          key={value}
                          value={value}
                          className=""
                        >
                          {label}
                        </SelectItem>
                      )
                    )}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </label>
            {isFollowUp && (
              <div className="bg-amber-500/10 border-amber-500/10 p-3 text-xs text-amber-500 border rounded-lg">
                Note: You can&apos;t use a Thinker model for follow-up requests.
                We automatically switch to the default model for you.
              </div>
            )}
          </main>
        </PopoverContent>
      </Popover>
    </div>
  );
}
