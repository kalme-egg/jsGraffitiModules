# arrayExtends
## 更新履歴
2025/5/17 0.1.0 作成&公開 (beta)
## ライセンス
CC-BY 4.0にて配布しています。  
https://creativecommons.org/licenses/by/4.0/  
(このライセンスは他のモジュールに適用されない可能性があります)
## 使用方法
任意のディレクトリにarrayExtends.jsを配置しimportして使用するか、
使用するコード内にクラス定義を直接配置して使用できます。  
コード内に配置したものを公開、再配布する場合、ライセンス表記をファイル内か別の場所に書き残す必要があります。  
## docs
``Arrayshift`` クラスが定義されています。  
### class Arrayshift
`Array` クラスを継承しています。  
1から始まる配列を作成します。  
*Arrayshift*[0]は参照した場合は空の要素か、あるいはundefinedとして扱われ、代入を試みた場合はTypeErrorを発生させます。
#### constructor()
新しい*Arrayshift*オブジェクトを作成します。
- 構文  
`new Arrayshift()`  
`new Arrayshift(element1, element2, /* ..., */ elementN)`  
`new Arrayshift(arrayLength)`  
- 引数  
`element1`, ..., `elementN`  
`Array.constructor(element1, element2, /* ..., */ elementN)`と同じく、配列を与えられた要素で初期化します。ただし、引数が1つだけで数値の場合は例外です。  
これによって初期化するとき、1つめの引数は*Arrayshift*[1]になります。常に0つ目の要素は空であろうとします。  
`arrayLength`  
`Array.constructor(arrayLength)`と同じく、配列を与えられた長さの空のスロットで初期化します。  
このときの実際の長さ(*Arrayshift*.length)は引数+1になります。  
この挙動により、arrayLengthには2の32乗-1(通常は許可されます)を指定した場合でもRangeErrorが発生します。
- 返値  
新しい*Arrayshift*オブジェクトを返します。
- 挙動  
0番を開けた状態になるように補正しながら`Array.constructor()`を呼び出します。  
何らかの方法でそれが上書きされている場合、これも併せて変更されます。
#### prototype.shiftLength()
配列の人間的な長さ、つまり、*Arrayshift*[0]を除いた配列の長さを取得あるいは設定します。
- 構文  
`shiftLength()`  
`shiftLength(number)`  
- 引数  
`number` 省略可  
人間的な長さに対し設定する数値です。正の整数のみが想定されています。
- 返値  
配列の人間的な長さ(*number*)を返します。これは`this.length - 1`と等しいです。  
値を設定する場合、設定後の長さを返します。
- 挙動  
引数が設定されている場合、`this.length`にその引数+1の代入を試みます。  
そのため配列自体の長さは引数より1大きくなります。  
`shiftLength()`は通常、配列の最後の要素のインデックスに等しくなります。
#### prototype.destruct()
対応する通常の*Array*オブジェクトを返します。
- 構文  
`destruct()`
- 引数  
なし
- 返値  
0番目の要素が抜かれた通常の*Array*オブジェクトを返します。
- 挙動  
1番目の要素から最後の要素までを`Array.prototype.push()`を用いて新しい配列に登録し、それを返します。