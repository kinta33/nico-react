import { useState, memo } from "react";
import styled from "styled-components";

import { TitleInput } from "../molecures/TitleInput";
import { DefaultArea } from "../organisms/DefaultArea";
import { Button } from "../atoms/button/Button";
import { AdminArea } from "../organisms/AdminArea";
import { TitleInputButton } from "../molecures/TitleInputButton";
import { Explanation } from "../atoms/explanation/Explanation";

//画像
import picAdmin from "./pictures/admin_siro.png";
import picComment from "./pictures/coment_siro.png";
import picHistory from "./pictures/history_siro.png";
import picVote from "./pictures/vote_siro.png";
import picNice from "./pictures/like_siro.png";
import picGroup from "./pictures/group_siro.png";
import { Select } from "../atoms/select/Select";

export const Main = memo(() => {
  const [group, setGroup] = useState("");
  const [comment, setComment] = useState("");
  const [password, setPassword] = useState("");
  const [historyList, setHistoryList] = useState([]);
  const [admin, setAdmin] = useState(false);
  const [size, setSize] = useState("普通");
  const [color, setColor] = useState("黒");
  const [speed, setSpeed] = useState("普通");

  const colorList = ["黒", "赤", "青"];
  const sizeList = ["大", "普通", "小"];
  const speedList = ["早い", "普通", "遅い"];

  const his = {
    historyList: historyList,
    setHistoryList: setHistoryList
  };

  const data = {
    his: his,
    group: group,
    size: size,
    color: color,
    speed: speed
  };
  const checkPassword = () => {
    if (password === "kanri22") setAdmin(true);
  };

  return (
    <SContainer>
      <DefaultArea pic={picGroup}>
        <TitleInput title="グループ" size="15" setFunc={setGroup} />
        <Explanation>
          ※開催者から提示されたグループ名を入力することで情報を送信できます。必ず入力してください。
        </Explanation>
      </DefaultArea>

      <DefaultArea pic={picComment}>
        <Select
          title="色"
          setFunc={setColor}
          value={color}
          contents={colorList}
        />
        <Select
          title="大きさ"
          setFunc={setSize}
          value={size}
          contents={sizeList}
        />
        <Select
          title="速さ"
          setFunc={setSpeed}
          value={speed}
          contents={speedList}
        />

        <TitleInput
          title="コメント"
          placeholder="送信したい文字列を入力してください"
          size="50"
          setFunc={setComment}
        />
        <Button para={comment} data={data} history={"「" + comment + "」"}>
          コメント送信
        </Button>
        <Button
          para={"@Q:" + comment}
          data={data}
          history={"「" + comment + "」を質問で送信"}
        >
          質問として送信
        </Button>
      </DefaultArea>

      <DefaultArea pic={picNice}>
        <Button para={"@Nice"} nice={true} data={data} history={"いいね!"}>
          いいね
        </Button>
      </DefaultArea>

      <DefaultArea pic={picVote}>
        {[...Array(9).keys()].map((index) => {
          return (
            <Button
              para={`@V:${index + 1}`}
              key={index}
              data={data}
              vote={true}
              history={index + 1 + "に投票"}
            >
              {index + 1}
            </Button>
          );
        })}
      </DefaultArea>

      <DefaultArea pic={picAdmin}>
        <TitleInputButton
          title="パスワード"
          size="10"
          setFunc={setPassword}
          data={data}
          func={checkPassword}
        >
          管理画面解放
        </TitleInputButton>
        {admin && <AdminArea data={data} />}
      </DefaultArea>

      <DefaultArea pic={picHistory}>
        {historyList.map((history, index) => {
          return <li key={index}>{history}</li>;
        })}
      </DefaultArea>
    </SContainer>
  );
});

const SContainer = styled.div`
  flex-direction: column;
  padding: 1%;
`;
