import { useState } from "react"

const sortOptionList = [
  {value: "latest", name: "최신순"},
  {value: "oldest", name: "오래된순"},
]

const ControlMenu = ({ value, onChange, optionList }) => {
  return (
    <select
      value={value} 
      onChange={(e) => onChange(e.target.value)}
    >
      {optionList.map((it, idx) => <option>{it.name}</option>)}    
    </select>
  )
}

const DiaryList = ({ diaryList }) => {

  const [sortType, setSortType] = useState("latest")

  return (
    <div>
      <ControlMenu 
        value={sortType} 
        onChange={setSortType}
        optionList={sortOptionList} 
      />
      {diaryList.map((it) => (
        <div key={it.id}>{it.content}</div>
      ))}
    </div>
  )
}

export default DiaryList