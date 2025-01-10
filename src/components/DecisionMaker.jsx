import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, PlusCircle, Shuffle, Sparkles } from "lucide-react";
import { ScrollArea } from "./ui/scroll-area";
import ScratchCard from "react-scratchcard-v2";

const DecisionMaker = () => {
  const [options, setOptions] = useState(["yes", "no"]);
  const [currentOption, setCurrentOption] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [key, setKey] = useState(0);

  const handleAddOption = () => {
    if (currentOption.trim()) {
      setOptions([...options, currentOption]);
      setCurrentOption("");
    }
  };

  const handleRemoveOption = (index) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const getRandomOption = () => {
    if (options.length > 1) {
      const randomIndex = Math.floor(Math.random() * options.length);
      setSelectedOption(options[randomIndex]);
      setKey((prev) => prev + 1);
    }
  };

  const settings = {
    width: 320,
    height: 160,
    image: "/scratch-bg.png",
    finishPercent: 50,
    onComplete: () => console.log("Card complete!"),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 p-4 sm:p-6 lg:p-8">
      <Card className="max-w-[calc(24rem+2.2rem)] w-full mx-auto shadow-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
        <div className="p-4 sm:p-6 lg:p-8 space-y-8">
          {/* Header */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center gap-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Decision Maker
              </h2>
            </div>
          </div>

          {/* Input Section */}
          <div className="space-y-4">
            <div className="flex gap-2">
              <Input
                value={currentOption}
                onChange={(e) => setCurrentOption(e.target.value)}
                placeholder="Enter your option here..."
                className="h-12 text-lg bg-zinc-800/50 border-zinc-700 text-zinc-200 placeholder:text-zinc-500"
                onKeyPress={(e) => e.key === "Enter" && handleAddOption()}
              />
              <Button
                onClick={handleAddOption}
                className="h-12 px-6 font-medium"
                variant="secondary"
              >
                <PlusCircle className="h-5 w-5 mr-1" />
                Add
              </Button>
            </div>

            {/* Options List */}

            <ScrollArea className="h-[140px] w-full rounded-md [mask-image:linear-gradient(transparent,#000_10%,#000_90%,_transparent)]">
              {options.map(
                (option, index) =>
                  option && (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-zinc-800/50 p-3 rounded-lg border border-zinc-700/50 transition-all hover:border-purple-500/50 hover:bg-zinc-800 my-2 w-full"
                    >
                      <span className="flex-1 text-zinc-200">{option}</span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleRemoveOption(index)}
                        className="hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )
              )}
            </ScrollArea>
          </div>

          {/* Random Decision Button */}
          <Button
            onClick={getRandomOption}
            disabled={options.length < 2}
            className="w-full h-12 text-lg bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-zinc-700 disabled:to-zinc-700 disabled:opacity-50 transition-all duration-500"
          >
            <Shuffle className="h-5 w-5 mr-2" />
            Get Random Decision
          </Button>

          {/* Scratch Card Section */}
          {selectedOption && (
            <div className="flex flex-col items-center space-y-4">
              <div
                key={key}
                className="w-full flex justify-center bg-gradient-to-r from-zinc-800 via-zinc-900 to-zinc-800 rounded-lg p-4"
              >
                <div className="relative">
                  <ScratchCard {...settings} brushSize={30} customBrush={null}>
                    <div className="w-full h-40 bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center rounded-lg shadow-inner border border-zinc-700">
                      <p className="text-xl sm:text-2xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text px-4">
                        {selectedOption}
                      </p>
                    </div>
                  </ScratchCard>
                </div>
              </div>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default DecisionMaker;
