import { useState } from "react";
import Count from './Count';

function TextBox(){
  const [char, setChar] = useState("");
  let spaceCount = 0;
  let wordCount = 0; 
  let sentenceCount = 0;
  for (let i=0;i<char.length;i++){
    if (char[i] === ' ') spaceCount++;
    if (char[i] !== ' ' && char[i] !== '\n' && wordCount == 0) wordCount=1;
    if (i>1 && char[i] !== ' ' && char[i-1] === ' ') wordCount++;
    if (i>1 && ['.', '?', '!'].includes(char[i]) && !['.', '?', '!'].includes(char[i-1])) sentenceCount++;
  }
  return(
    <>
      <div className="flex flex-col justify-around items-center h-screen gap-12 lg:flex-row p-8 bg-[#222831]">
        <textarea name="text" id="textBox" value={char} onChange={(e)=>setChar(e.target.value)} className="border border-2 border-[#EEEEEE] rounded-xl p-5 min-h-100 xl:min-h-60 w-full md:h-[600px] md:w-[600px] bg-[#31363F] text-[#EEEEEE]  focus:border-0 focus:outline-[#76ABAE] focus:outline-[3px] shadow-2xl" placeholder="Enter your text here..."></textarea>
        <div className="flex flex-col justify-around items-center gap-6 lg:gap-2 flex-wrap max-w-full md:h-[600px] md:max-w-[800px]">
          <Count description="Character Count" num={char.length}/>
          <Count description="Space Count" num={spaceCount}/>
          <Count description="Word Count" num={wordCount}/>
          <Count description="Sentence Count" num={sentenceCount}/>
        </div>
        
      </div>
    </>
  )
}

export default TextBox;