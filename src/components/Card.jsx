import React, { useContext } from "react";
import { Paper, Radio, Badge, Group, Center } from "@mantine/core";
import { QuizContext } from "../context/QuizContext";
import data from "../../data.json";
import CreateButton from "./CreateButton";


const Card = () => {
  const {
    indexCounter,
    questionCounter,
    value,
    setValue,
    setCheckAnswer,
    answerIsTrue,
    answerValue,
    setAnswerValue,
    setValueArr,
    finishedFunc,
    quizText,
    text,
    valueArr
  } = useContext(QuizContext);

  return (
    <>
      <Paper shadow="md" p={20}>
        {data.slice(questionCounter, indexCounter).map((title) => (
          <div style={{ display: "flex", flexDirection: "row-reverse" }}>
            <Badge
              variant="gradient"
              gradient={
                title.quiz.type === "Hard"
                  ? { from: "orange", to: "red", deg: 105 }
                  : title.quiz.type === "Medium"
                  ? { from: "yellow", to: "orange", deg: 105 }
                  : title.quiz.type === "Easy"
                  ? { from: "teal", to: "lime", deg: 105 }
                  : null
              }
            >
              {title.quiz.type}
            </Badge>

            <Radio.Group
              value={value}
              onChange={setValue}
              name="favoriteFramework"
              label={title.quiz.question}
            >
              {data.slice(questionCounter, indexCounter).map((val) => {
                return val.quiz.answers.map((answer) => (
                  <Radio
                    value={answer.name}
                    name={answer.type}
                    label={answer.name}
                    checked
                    onClick={(e) => {
                      setCheckAnswer(e.target.checked === answer.value);
                      indexCounter !== data.length
                        ? setAnswerValue(answer.value)
                        : null;
                    }}
                  />
                ));
              })}
            </Radio.Group>
            <Badge>
              {indexCounter} from {data.length}
            </Badge>
          </div>
        ))}
        <Center p={20}>
          <Group>
            <CreateButton
              title={indexCounter === data.length ? "finish" : "next"}
              disabled={value === "" || text === true ? true : false}
              color="green"
              onClick={() => {
                setValueArr([...valueArr, answerValue]);
                indexCounter === data.length ? finishedFunc() : answerIsTrue();
              }}
            />
          </Group>
        </Center>
        {text ? quizText : ""}
      </Paper>
    </>
  );
};

export default Card;
