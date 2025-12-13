import { useEffect, useState, type DependencyList } from "react"; // Add DependencyList

function shuffleArray<T>(array: T[]): T[] {
  const newArray = array.slice();
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

interface Option {
  text: string;
  correct: boolean;
  explanation?: string;
}

export const useShuffledOptions = (options: Option[], dependencies: DependencyList) => { // Changed any[] to DependencyList
  const [shuffledOptions, setShuffledOptions] = useState<Option[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks, react-hooks/exhaustive-deps
    setShuffledOptions(shuffleArray(options));
  }, [options, ...dependencies]);

  return shuffledOptions;
};
