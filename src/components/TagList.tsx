import { MouseEvent, useState } from "react";
import TagButton from "./TagButton";

interface TagListProps<T extends string> {
  tagList: T[];
  onClickTag: (tag: T) => void;
}

export default function TagList<T extends string>({
  tagList,
  onClickTag,
}: TagListProps<T>) {
  const [selectedTag, setSelectedTag] = useState<T>(tagList[0]);

  const handleTagClick = (e: MouseEvent<HTMLDivElement>) => {
    const tag = (e.target as HTMLButtonElement).textContent as T;
    onClickTag(tag);
  };

  return (
    <div className="flex gap-x-4" onClick={handleTagClick}>
      {tagList.map((tag) => (
        <TagButton
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagButton>
      ))}
    </div>
  );
}
