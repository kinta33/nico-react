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
  const { his } = props;

  const [timer, setTimer] = useState(0);
  const [voteType, setVoteType] = useState("num");
  const [voteNum, setVoteNum] = useState(2);
  const [voteCsv, setVoteCsv] = useState("");
  const [voteListNum, setVoteListNum] = useState(3);
  const [voteList, setVoteList] = useState(["a", "b", "c"]);
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
            his={his}
            history={"タイマーセット(" + timer + "分で設定)"}
          >
            タイマーセット
          </TitleInputButton>
          <Button para="@Start" his={his}>
            タイマースタート
          </Button>
          <Button para="@Stop" his={his}>
            タイマーストップ
          </Button>
        </Indent>
        ●投票
        <Indent>
          <Button para="@VStart" his={his}>
            投票スタート
          </Button>
          <Button para="@VStop" his={his}>
            投票ストップ
          </Button>
          <Button para="@VShow" his={his}>
            投票結果表示
          </Button>
          <Button para="@VHide" his={his}>
            投票結果隠す
          </Button>
          <Button para="@VReset" his={his}>
            投票リセット
          </Button>
          <Button para="@VSet:" his={his}>
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
            <Textarea cols={60} rows={4} setFunc={setVoteCsv} />
          </Indent>
          <DefaultRadio
            select={voteType}
            onChange={onChangeVoteType}
            value="text"
            text="選択肢入力"
          />
          <Indent>
            <Button func={voteListClear} his={his}>
              選択肢クリア
            </Button>
            <InputList title={title} size={30} listState={listState} />
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
