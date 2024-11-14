# 角度クラスmodule
## 更新履歴
2024/11/14 0.9.0 プロパティ:anglemode 追加
2024/11/13 0.8.0 作成&公開
## ライセンス
CC-BY 4.0にて配布しています。  
https://creativecommons.org/licenses/by/4.0/  
(このライセンスは他のモジュールに適用されない可能性があります)
## 使用方法
任意のディレクトリにdegree.jsを配置し、  
``import {*module*} as *name* from *filepath*``
を記述します。
## docs
``degree`` ``radian`` ``grade``の3つの角度クラスが定義されています。
``import``を使用することで利用することができます。
### 角度モードについて
degree(度)は一周を0°~360°で、  
radian(ラジアン)は一周を0~2πで、  
grade(グレード)は一周を0~400で表します。
### 角度の範囲について
次の表のように定義されています。  
|     | degree | radian | grade |  
| --- | --- | --- | --- |
|基本範囲| 0 ~ 360 | 0 ~ 2π | 0 ~ 400|
|修正範囲| -180 ~ 180 | -π ~ π | -200 ~ 200 |  

(最小値を含み、最大値を含まない)  
この範囲を出る値は、同じ動径を示す範囲内の値になるように修正されます。
### constructor (All)
``new degree(number)``  
*number*: 値  
それぞれの角度モードの基本範囲に変換されます。
```var foo = new degree(90)```  
```let bar = new radian(0.7)```  
```const foobar = new grade(350)```
### プロパティ
`foo.property`の形式で参照します。
#### value (All)
`foo.value` -> *number* (any)  
モード指定せず、単純に角度の値を返します。  
degreeクラスの場合はdegree(度)で、  
radianクラスの場合はラジアンで、  
gradeクラスの場合はグレードで返ります。
#### anglemode (All)
`foo.anglemode` -> "degree"|"radian"|"grade"
自らの角度モードを返します。
#### degree (All)
`foo.degree` -> *number* (degree)  
自らの角度モードに関わらず、degree(度)で返します。
#### radian (All)
`foo.radian` -> *number* (radian)  
自らの角度モードに関わらず、ラジアンで返します。
#### grade (All)
`foo.grade` -> *number* (grade)  
自らの角度モードに関わらず、グレードで返します。
#### degreefixed (degree)
`foo.degreefixed` -> *number* (degree/fixed)  
自らの角度(degree)を修正範囲に合わせて返します。
#### radianfixed (radian)
`foo.radianfixed` -> *number* (radian/fixed)  
自らの角度(radian)を修正範囲に合わせて返します。
#### gradefixed (grade)
`foo.gradefixed` -> *number* (grade/fixed)  
自らの角度(grade)を修正範囲に合わせて返します。
#### coefficient (radian)
`foo.coefficient` -> *number*  
自らの角度(radian)をπとその係数で表したときの係数を返します。
### メゾッド (オブジェクトから参照)
`foo.method()`の形式で参照します。
#### sin() (All)
`foo.sin()` -> *number*  
自らの角度のサイン(正弦)を返します。  
内部的には`Math.sin()`に自身の`radian`プロパティを渡しています。
#### cos() (All)
`foo.cos()` -> *number*  
自らの角度のコサイン(余弦)を返します。  
内部的には`Math.cos()`に自身の`radian`プロパティを渡しています。
#### tan() (All)
`foo.tan()` -> *number*  
自らの角度のタンジェント(正接)を返します。  
内部的には`Math.tan()`に自身の`radian`プロパティを渡しています。
#### cdegree() (radian,grade)
`foo.cdegree()` -> *Object class degree*  
自らの角度と一致するdegreeクラスのオブジェクトを返します。  
内部的には`degree`プロパティをコンストラクタに渡しています。
#### cradian() (degree,grade)
`foo.cradian()` -> *Object class radian*  
自らの角度と一致するradianクラスのオブジェクトを返します。  
内部的には`radian`プロパティをコンストラクタに渡しています。
#### cgrade() (degree,radian)
`foo.cgrade()` -> *Object class grade*  
自らの角度と一致するgradeクラスのオブジェクトを返します。  
内部的には`grade`プロパティをコンストラクタに渡しています。
#### add(*number*) (All)
`foo.add(number)` -> *number* (any)  
自らの角度に渡された引数の角度を加算します。  
これが実行された後、元のオブジェクトの値は変更されます。  
*number*は自らの角度モードとして解釈され、返り値も同じモードで返ります。
#### adddegree(*degree*) (degree)
`foo.add(bar)` -> *number* (degree)  
自らの角度に渡された引数の角度を加算します。  
これが実行された後、元のオブジェクトの値は変更されます。  
引数はdegreeクラスのオブジェクトとして渡されるべきです。  
返り値も同じモードで返ります。
#### addradian(*radian*) (radian)
`foo.add(bar)` -> *number* (radian)  
自らの角度に渡された引数の角度を加算します。  
これが実行された後、元のオブジェクトの値は変更されます。  
引数はradianクラスのオブジェクトとして渡されるべきです。  
返り値も同じモードで返ります。
#### addgrade(*grade*) (grade)
`foo.add(bar)` -> *number* (grade)  
自らの角度に渡された引数の角度を加算します。  
これが実行された後、元のオブジェクトの値は変更されます。  
引数はgradeクラスのオブジェクトとして渡されるべきです。  
返り値も同じモードで返ります。
#### destruct() (All)
`foo.destruct()` -> *Object*{value:*number* (any)}  
自らのvalueプロパティのみを持つオブジェクトを返します。
#### destructfixed() (All)
`foo.destructfixed()` -> *Object*{value:*number* (any/fixed)}  
自らのvalueプロパティのみを持つオブジェクトを返します。  
値は修正範囲に合わせられます。  
### メゾッド (クラスから参照)
`degree.method()`のように、クラスそのものから参照します。
#### *class*.sin(*Object matched class* | *number*) (All)
`degree/radian/grade.sin(Object)` -> *number*  
`degree.sin(90)`,`grade.sin(foo)`のように使用します。  
与えられた引数の角度のサイン(正弦)を返します。  
引数は参照元クラスの角度モードとして扱います。
#### *class*.cos(*Object matched class* | *number*) (All)
`degree/radian/grade.cos(Object)` -> *number*  
`radian.cos(3.14)`,`degree.cos(foo)`のように使用します。  
与えられた引数の角度のコサイン(余弦)を返します。  
引数は参照元クラスの角度モードとして扱います。
#### *class*.tan(*Object matched class* | *number*) (All)
`degree/radian/grade.tan(Object)` -> *number*  
`grade.tan(150)`,`radian.tan(foo)`のように使用します。  
与えられた引数の角度のタンジェント(正接)を返します。  
引数は参照元クラスの角度モードとして扱います。
#### *class*.asin(*number*) (All)
`degree/radian/grade.asin(number)` -> *number* (degree/radian/grade)  
`degree.asin(0.25)`のように使用します。  
与えられた引数の角度のアークサインを返します。  
結果は参照元クラスの角度モードで返されます。  
また、角度は動径が第一象限と第四象限にあたるものが返されます。
#### *class*.acos(*number*) (All)
`degree/radian/grade.acos(number)` -> *number* (degree/radian/grade)    
`radian.acos(0.25)`のように使用します。  
与えられた引数の角度のアークコサインを返します。  
結果は参照元クラスの角度モードで返されます。  
また、角度は動径が第一象限と第四象限にあたるものが返されます。
#### *class*.atan(*number*) (All)
`degree/radian/grade.atan(number)` -> *number* (degree/radian/grade)    
`grade.atan(1)`のように使用します。  
与えられた引数の角度のアークタンジェントを返します。  
結果は参照元クラスの角度モードで返されます。  
また、角度は動径が第一象限と第四象限にあたるものが返されます。
#### radian.acoefficient(*number*) {radian}
`radian.acoefficient(number)` -> *Object class radian*  
`radian.acoefficient(0.5)`のように使用します。  
引数×πの角度を持ったradianクラスのオブジェクトを返します。