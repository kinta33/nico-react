import { useCallback, useState } from "react";
import styled from "styled-components";
import { Button } from "../atoms/button/Button";
import { Explanation } from "../atoms/explanation/Explanation";
import { Indent } from "../atoms/layout/Indent";
import { DefaultRadio } from "../atoms/radio/DefaultRadio";
import { Select } from "../atoms/select/Select";
import { Textarea } from "../atoms/textarea/Textarea";
import { InputList } from "../molecures/InputList";
import { TitleInputButton } from "../molecures/TitleInputButton";

export const AdminArea = (props) => {
  const { data } = props;

  const [timer, setTimer] = useState(0);
  const [voteType, setVoteType] = useState("num");
  const [voteNum, setVoteNum] = useState(2);
  const [voteCsv, setVoteCsv] = useState("");
  const [voteListNum, setVoteListNum] = useState(3);
  const [voteList, setVoteList] = useState(["", "", ""]);
  const listState = {
    listNum: voteListNum,
    setListNum: setVoteListNum,
    list: voteList,
    setList: setVoteList
  };
  const title = []; //投票のテキスト入力のタイトル
  for (let i = 0; i < 9; i++) title.push(i + 1 + ".");
  const contents = []; //投票の数字入力のリストの内容
  for (let i = 2; i <= 9; i++) contents.push(i);

  const voteListClear = () => {
    const tmp = [];
    for (let i = 0; i < voteListNum; i++) tmp.push("");
    setVoteList(tmp);
  };
  const onChangeVoteType = useCallback((event) => {
    const value = event.target.value;
    setVoteType(value);
  }, []);

  return (
    <SContainer>
      <div id="kanriarea">
        ●タイマー
        <Indent>
          <TitleInputButton
            title="タイマー時間"
            size="5"
            setFunc={setTimer}
            para={"@Set:" + timer}
            data={data}
            history={"タイマーセット(" + timer + "分で設定)"}
            type="number"
          >
            タイマーセット
          </TitleInputButton>
          <Button para="@Start" data={data}>
            タイマースタート
          </Button>
          <Button para="@Stop" data={data}>
            タイマーストップ
          </Button>
        </Indent>
        ●投票
        <Indent>
          <Button para="@VStart" data={data}>
            投票スタート
          </Button>
          <Button para="@VStop" data={data}>
            投票ストップ
          </Button>
          <Button para="@VShow" data={data}>
            投票結果表示
          </Button>
          <Button para="@VHide" data={data}>
            投票結果隠す
          </Button>
          <Button para="@VReset" data={data}>
            投票リセット
          </Button>
          <Button
            para={
              voteType === "num"
                ? "@VSetN:" + voteNum
                : voteType === "csv"
                ? "@VSet:" + voteCsv
                : "@VSet:" + voteList.join(",")
            }
            history={
              voteType === "num"
                ? "投票の選択肢を更新する（選択肢数" + voteNum + ")"
                : voteType === "csv"
                ? "投票の選択肢を更新する（" + voteCsv + ")"
                : "投票の選択肢を更新する（" + voteList.join(",") + "）"
            }
            data={data}
          >
            投票選択肢更新
          </Button>
          <br />
          <Explanation>
            （数指定、CSV一括入力、個別入力のいずれかを選択し押下してください）
          </Explanation>
          <br />
          <DefaultRadio
            select={voteType}
            onChange={onChangeVoteType}
            value="num"
            text="数指定"
          />
          <Indent>
            <Select title="選択肢数" setFunc={setVoteNum} contents={contents} />
          </Indent>
          <DefaultRadio
            select={voteType}
            onChange={onChangeVoteType}
            value="csv"
            text="CSV指定"
          />
          <Indent>
            <Textarea
              cols="60"
              rows="4"
              placeholder="カンマ区切りで選択肢を入力してください"
              setFunc={setVoteCsv}
            />
          </Indent>
          <DefaultRadio
            select={voteType}
            onChange={onChangeVoteType}
            value="text"
            text="選択肢入力"
          />
          <Indent>
            <Button func={voteListClear} data={data}>
              選択肢クリア
            </Button>
            <InputList
              title={title}
              size="30"
              placeholder="選択肢を入力してください"
              listState={listState}
            />
            <Explanation>
              ※半角カンマは使用しないでください。空白行があるとそれ以降は無効となります。
            </Explanation>
          </Indent>
        </Indent>
      </div>
    </SContainer>
  );
};

const SContainer = styled.div`
  width: 100%;
  position: relative;
  margin: 0;
  padding: 0;
  border: none;
  background: #fff;
`;
