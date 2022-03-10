import styled from "styled-components";

export const Button = (props) => {
  const register = () => {
    if (data.group === "") {
      alert("グループを入力してください。");
      return;
    }
    //alert(history + "," + para + "," + data.group + "," + data.color + "," + data.size + "," +  data.speed);

    //送信
    ajax(
      {
        group: data.group, //グループ
        color: data.color, //色
        size: data.size, //大きさ
        comment: para, //コメント
        pitch: data.speed //速さ
      },
      //送信先
      "https://n2ws06j1hg.execute-api.ap-northeast-1.amazonaws.com/prod/NicoRegister2",
      (param) => {
        if (param.error) {
          alert(param.message);
        } else {
          if (history !== "") {
            data.his.setHistoryList([...data.his.historyList, history]);
          }
        }
      }
    );
  };

  //■ajax送信汎用テンプレート（data:送信データ、url:送信先URL、successFunction:送信成功時に実行する関数）
  function ajax(data, url, successFunction) {
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      async: false,
      dataType: "json",
      headers: new Headers({ "Content-type": "application/json" })
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // リストの更新
        successFunction(data);
      })
      .catch((reason) => {
        // エラー
        alert(reason);
      });
  }

  const {
    children,
    func = () => register(para),
    para,
    data,
    history = children,
    vote,
    nice
  } = props;
  if (nice) {
    return <NiceButton onClick={() => func(para)}>{children}</NiceButton>;
  } else if (vote) {
    return <VoteButton onClick={() => func(para)}>{children}</VoteButton>;
  } else {
    return <SButton onClick={() => func(para)}>{children}</SButton>;
  }
};

//voteだけスタイルを変えたい時はvote=trueになっているので、それを使って変更する。(どうするかは要調査^^;)
const SButton = styled.button`
  margin: 5px;
  padding: 5px 15px;

  font-size: 18px;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  text-decoration: none;

  border: 2px solid #192f60;
  border-radius: 10px;
  background: #19448e;
  width: auto;
  cursor: pointer;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  &:active {
    color: #ffffff;
    background: #192f60;
    opacity: 0.8;
  }

  @media screen and (max-width: 568px) {
    height: 2em;
    width: 98%;
    font-size: 0.9em;
    margin: 0.3em;
    padding: 0.3em;
    line-height: 0;
    letter-spacing: 0em;
    margin-top: 0.3em; /*段落と段落の間*/
    margin-bottom: 0em;
  }
`;

const NiceButton = styled(SButton)`
  background: #00afcc;
  border: 2px solid #008db7;
  &:active {
    background: #008db7;
  }
`;
const VoteButton = styled(SButton)`
  @media screen and (max-width: 568px) {
    margin: 5px;
    border-radius: 0.3em;
    height: 50px;
    width: 50px;
  }
`;
