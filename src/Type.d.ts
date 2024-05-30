interface DataContextType {
  group: string[];
  setGroup: React.Dispatch<React.SetStateAction<string[]>>;
  nowSelect: number;
  setNowSelect: (index: number) => void;
}

interface EditButtonContextType {
  size: number;
}
