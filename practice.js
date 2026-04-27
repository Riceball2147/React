const numbers = [1, 2, 3];

// 配列の1番目と2番目の要素を分割代入
const [item1, item2] = numbers;

console.log(item1);
console.log(item2);
console.log(numbers);

// 元の配列
const orgArray = [1, 2, 3];

// スプレッド構文を使わず、配列の参照をコピー（同じ配列を参照する）
const refArray = orgArray;

// 元の配列に要素「4」を追加
orgArray.push(4);

console.log("orgArray:", orgArray.toString());
console.log("refArray:", refArray.toString());


// 元の配列
const orgArray2 = [1, 2, 3];

// スプレッド構文で配列の値をコピー（新しい配列が作成される）
// さらに新しい配列に要素「5」を追加
const copyArray2 = [...orgArray2, 5];

// 元の配列に要素「4」を追加
orgArray2.push(4);

console.log("orgArray2:", orgArray2.toString());
console.log("copyArray2:", copyArray2.toString());

// objectの配合を行う
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// スプレッド構文でobj1とobj2を結合
const obj12 = { ...obj1, ...obj2 };

console.log(JSON.stringify(obj12));


// テンプレートリテラル
const name = "侍太郎";

// テンプレートリテラルで変数nameを埋め込む
const message = `こんにちは、${name}さん。`

console.log(message);

// アロー関数式
// 価格リスト
const prices = [1000, 2000, 3000];

// 価格に消費税を加算するアロー関数
const addTax = (price) => Math.floor(price * 1.1);

// 価格リストの各要素に対してaddTax()関数を順番に実行
const withTax = prices.map(addTax);

// 税込の価格リストを出力
console.log(withTax);

//オプショナルチェーン
const dog1 = { name: 'ポチ', age: 2 };
const dog2 = null;

// 要素が存在しない場合は「データがありません」と出力
console.log(dog1?.name ?? 'データがありません');
console.log(dog2?.name ?? 'データがありません');