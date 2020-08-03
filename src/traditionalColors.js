;(function(window, undefined){
  "use strict";

  class TraditionalColors {
    constructor() {
      console.log("TraditionalColors is roaded !!!");
      this.colors = [{"name":"桜色","ruby":"さくらいろ","rgb":{"r":254,"g":244,"b":244},"hex":"#fef4f4"},{"name":"小豆色","ruby":"あずきいろ","rgb":{"r":150,"g":81,"b":77},"hex":"#96514d"},{"name":"萌葱色","ruby":"もえぎいろ","rgb":{"r":0,"g":110,"b":84},"hex":"#006e54"},{"name":"古代紫","ruby":"こだいむらさき","rgb":{"r":137,"g":91,"b":138},"hex":"#895b8a"},{"name":"枯茶","ruby":"からちゃ","rgb":{"r":141,"g":100,"b":73},"hex":"#8d6449"},{"name":"芥子色","ruby":"からしいろ","rgb":{"r":208,"g":175,"b":76},"hex":"#d0af4c"},{"name":"水浅葱","ruby":"みずあさぎ","rgb":{"r":128,"g":171,"b":169},"hex":"#80aba9"},{"name":"珊瑚色","ruby":"さんごいろ","rgb":{"r":245,"g":177,"b":170},"hex":"#f5b1aa"},{"name":"黄橡","ruby":"きつるばみ","rgb":{"r":182,"g":141,"b":76},"hex":"#b68d4c"},{"name":"利休鼠","ruby":"りきゅうねずみ","rgb":{"r":136,"g":142,"b":126},"hex":"#888e7e"},{"name":"海松茶","ruby":"みるちゃ","rgb":{"r":90,"g":84,"b":75},"hex":"#5a544b"},{"name":"浅紫","ruby":"あさむらさき","rgb":{"r":196,"g":163,"b":191},"hex":"#c4a3bf"},{"name":"鴇色","ruby":"ときいろ","rgb":{"r":244,"g":179,"b":194},"hex":"#f4b3c2"},{"name":"藍鼠","ruby":"あいねず","rgb":{"r":108,"g":132,"b":141},"hex":"#6c848d"},{"name":"胡桃色","ruby":"くるみいろ","rgb":{"r":168,"g":111,"b":76},"hex":"#a86f4c"},{"name":"舛花色","ruby":"ますはないろ","rgb":{"r":91,"g":126,"b":145},"hex":"#5b7e91"},{"name":"朽葉色","ruby":"くちばいろ","rgb":{"r":145,"g":115,"b":71},"hex":"#917347"},{"name":"石竹色","ruby":"せきちくいろ","rgb":{"r":229,"g":171,"b":190},"hex":"#e5abbe"},{"name":"伽羅色","ruby":"きゃらいろ","rgb":{"r":216,"g":163,"b":115},"hex":"#d8a373"},{"name":"鳩羽鼠","ruby":"はとばねずみ","rgb":{"r":158,"g":139,"b":142},"hex":"#9e8b8e"},{"name":"江戸茶","ruby":"えどちゃ","rgb":{"r":205,"g":140,"b":92},"hex":"#cd8c5c"},{"name":"媚茶","ruby":"こびちゃ","rgb":{"r":113,"g":98,"b":70},"hex":"#716246"},{"name":"亜麻色","ruby":"あまいろ","rgb":{"r":214,"g":198,"b":175},"hex":"#d6c6af"},{"name":"梅鼠","ruby":"うめねず","rgb":{"r":192,"g":153,"b":160},"hex":"#c099a0"},{"name":"狐色","ruby":"きつねいろ","rgb":{"r":195,"g":135,"b":67},"hex":"#c38743"},{"name":"灰汁色","ruby":"あくいろ","rgb":{"r":158,"g":148,"b":120},"hex":"#9e9478"},{"name":"利休茶","ruby":"りきゅうちゃ","rgb":{"r":165,"g":149,"b":100},"hex":"#a59564"},{"name":"水色","ruby":"みずいろ","rgb":{"r":188,"g":226,"b":232},"hex":"#bce2e8"},{"name":"瓶覗","ruby":"かめのぞき","rgb":{"r":162,"g":215,"b":221},"hex":"#a2d7dd"},{"name":"雀茶","ruby":"すずめちゃ","rgb":{"r":170,"g":79,"b":55},"hex":"#aa4f37"},{"name":"梅幸茶","ruby":"ばいこうちゃ","rgb":{"r":136,"g":121,"b":56},"hex":"#887938"},{"name":"空色","ruby":"そらいろ","rgb":{"r":160,"g":216,"b":239},"hex":"#a0d8ef"},{"name":"柿渋色","ruby":"かきしぶいろ","rgb":{"r":159,"g":86,"b":58},"hex":"#9f563a"},{"name":"勿忘草色","ruby":"わすれなぐさいろ","rgb":{"r":137,"g":195,"b":235},"hex":"#89c3eb"},{"name":"今様色","ruby":"いまよういろ","rgb":{"r":208,"g":87,"b":107},"hex":"#d0576b"},{"name":"浅縹","ruby":"あさはなだ","rgb":{"r":132,"g":185,"b":203},"hex":"#84b9cb"},{"name":"鳶色","ruby":"とびいろ","rgb":{"r":149,"g":72,"b":63},"hex":"#95483f"},{"name":"納戸色","ruby":"なんどいろ","rgb":{"r":0,"g":136,"b":153},"hex":"#008899"},{"name":"浅葱色","ruby":"あさぎいろ","rgb":{"r":0,"g":163,"b":175},"hex":"#00a3af"},{"name":"海松色","ruby":"みるいろ","rgb":{"r":114,"g":109,"b":64},"hex":"#726d40"},{"name":"鶯色","ruby":"うぐいすいろ","rgb":{"r":146,"g":140,"b":54},"hex":"#928c36"},{"name":"新橋色","ruby":"しんばしいろ","rgb":{"r":89,"g":185,"b":198},"hex":"#59b9c6"},{"name":"褐色","ruby":"かっしょく","rgb":{"r":138,"g":59,"b":0},"hex":"#8a3b00"},{"name":"天色","ruby":"あまいろ","rgb":{"r":44,"g":169,"b":225},"hex":"#2ca9e1"},{"name":"紅","ruby":"くれない","rgb":{"r":215,"g":0,"b":58},"hex":"#d7003a"},{"name":"鶸色","ruby":"ひわいろ","rgb":{"r":215,"g":207,"b":58},"hex":"#d7cf3a"},{"name":"若草色","ruby":"わかくさいろ","rgb":{"r":195,"g":216,"b":37},"hex":"#c3d825"},{"name":"唐茶","ruby":"からちゃ","rgb":{"r":120,"g":60,"b":29},"hex":"#783c1d"},{"name":"縹色","ruby":"はなだいろ","rgb":{"r":39,"g":146,"b":195},"hex":"#2792c3"},{"name":"煎茶色","ruby":"せんちゃいろ","rgb":{"r":140,"g":100,"b":80},"hex":"#8c6450"},{"name":"栗色","ruby":"くりいろ","rgb":{"r":118,"g":47,"b":7},"hex":"#762f07"},{"name":"若菜色","ruby":"わかないろ","rgb":{"r":216,"g":230,"b":152},"hex":"#d8e698"},{"name":"錆色","ruby":"さびいろ","rgb":{"r":108,"g":53,"b":36},"hex":"#6c3524"},{"name":"若苗色","ruby":"わかなえいろ","rgb":{"r":199,"g":220,"b":104},"hex":"#c7dc68"},{"name":"煤竹色","ruby":"すすたけいろ","rgb":{"r":111,"g":81,"b":76},"hex":"#6f514c"},{"name":"茜色","ruby":"あかねいろ","rgb":{"r":183,"g":40,"b":46},"hex":"#b7282e"},{"name":"焦茶","ruby":"こげちゃ","rgb":{"r":111,"g":75,"b":62},"hex":"#6f4b3e"},{"name":"苔色","ruby":"こけいろ","rgb":{"r":105,"g":130,"b":27},"hex":"#69821b"},{"name":"涅色","ruby":"くりいろ","rgb":{"r":85,"g":71,"b":56},"hex":"#554738"},{"name":"苗色","ruby":"なえいろ","rgb":{"r":176,"g":202,"b":113},"hex":"#b0ca71"},{"name":"金茶","ruby":"きんちゃ","rgb":{"r":243,"g":152,"b":0},"hex":"#f39800"},{"name":"深縹","ruby":"こきはなだ","rgb":{"r":42,"g":64,"b":115},"hex":"#2a4073"},{"name":"柳色","ruby":"やなぎいろ","rgb":{"r":168,"g":201,"b":127},"hex":"#a8c97f"},{"name":"白茶","ruby":"しらちゃ","rgb":{"r":221,"g":187,"b":153},"hex":"#ddbb99"},{"name":"柿色","ruby":"かきいろ","rgb":{"r":237,"g":109,"b":61},"hex":"#ed6d3d"},{"name":"生成り色","ruby":"きなりいろ","rgb":{"r":251,"g":250,"b":245},"hex":"#fbfaf5"},{"name":"老竹色","ruby":"おいたけいろ","rgb":{"r":118,"g":145,"b":100},"hex":"#769164"},{"name":"橙色","ruby":"だいだいいろ","rgb":{"r":238,"g":120,"b":0},"hex":"#ee7800"},{"name":"藤色","ruby":"ふじいろ","rgb":{"r":187,"g":188,"b":222},"hex":"#bbbcde"},{"name":"朱色","ruby":"しゅいろ","rgb":{"r":235,"g":97,"b":1},"hex":"#eb6101"},{"name":"深川鼠","ruby":"ふかがわねずみ","rgb":{"r":151,"g":167,"b":145},"hex":"#97a791"},{"name":"銀鼠","ruby":"ぎんねず","rgb":{"r":175,"g":175,"b":176},"hex":"#afafb0"},{"name":"薄墨色","ruby":"うすずみいろ","rgb":{"r":163,"g":163,"b":162},"hex":"#a3a3a2"},{"name":"青鈍","ruby":"あおにび","rgb":{"r":107,"g":123,"b":110},"hex":"#6b7b6e"},{"name":"桔梗色","ruby":"ききょういろ","rgb":{"r":86,"g":84,"b":162},"hex":"#5654a2"},{"name":"鼠色","ruby":"ねずみいろ","rgb":{"r":148,"g":148,"b":149},"hex":"#949495"},{"name":"灰色","ruby":"はいいろ","rgb":{"r":125,"g":125,"b":125},"hex":"#7d7d7d"},{"name":"千歳緑","ruby":"ちとせみどり","rgb":{"r":49,"g":103,"b":69},"hex":"#316745"},{"name":"鉛色","ruby":"なまりいろ","rgb":{"r":123,"g":124,"b":125},"hex":"#7b7c7d"},{"name":"菜の花色","ruby":"なのはないろ","rgb":{"r":255,"g":236,"b":71},"hex":"#ffec47"},{"name":"若竹色","ruby":"わかたけいろ","rgb":{"r":104,"g":190,"b":141},"hex":"#68be8d"},{"name":"鈍色","ruby":"にびいろ","rgb":{"r":114,"g":113,"b":113},"hex":"#727171"},{"name":"黄檗色","ruby":"きはだいろ","rgb":{"r":254,"g":242,"b":99},"hex":"#fef263"},{"name":"常磐色","ruby":"ときわいろ","rgb":{"r":0,"g":123,"b":67},"hex":"#007b43"},{"name":"消炭色","ruby":"けしずみいろ","rgb":{"r":82,"g":78,"b":77},"hex":"#524e4d"},{"name":"曙色","ruby":"あけぼのいろ","rgb":{"r":241,"g":144,"b":114},"hex":"#f19072"},{"name":"刈安色","ruby":"かりやすいろ","rgb":{"r":245,"g":229,"b":107},"hex":"#f5e56b"},{"name":"千草色","ruby":"ちぐさいろ","rgb":{"r":146,"g":181,"b":169},"hex":"#92b5a9"},{"name":"江戸紫","ruby":"えどむらさき","rgb":{"r":116,"g":83,"b":153},"hex":"#745399"},{"name":"青磁色","ruby":"せいじいろ","rgb":{"r":126,"g":190,"b":165},"hex":"#7ebea5"},{"name":"羊羹色","ruby":"ようかんいろ","rgb":{"r":56,"g":60,"b":60},"hex":"#383c3c"},{"name":"青竹色","ruby":"あおたけいろ","rgb":{"r":126,"g":190,"b":171},"hex":"#7ebeab"},{"name":"葡萄色","ruby":"ぶどういろ","rgb":{"r":82,"g":47,"b":96},"hex":"#522f60"},{"name":"木賊色","ruby":"とくさいろ","rgb":{"r":59,"g":121,"b":96},"hex":"#3b7960"},{"name":"山吹色","ruby":"やまぶきいろ","rgb":{"r":248,"g":181,"b":0},"hex":"#f8b500"},{"name":"遠州茶","ruby":"えんしゅうちゃ","rgb":{"r":202,"g":130,"b":105},"hex":"#ca8269"},{"name":"鬱金色","ruby":"うこんいろ","rgb":{"r":250,"g":191,"b":20},"hex":"#fabf14"}];
    }

    distance3D(a, b) {
      return Math.sqrt((Math.pow((a.r - b.r), 2) + Math.pow((a.g - b.g), 2) + Math.pow((a.b - b.b), 2)));
    }

    regExpToRgb(result, decimal=10) {
      const r = parseInt(result[1], decimal)
      const g = parseInt(result[2], decimal)
      const b = parseInt(result[3], decimal)
      return {r, g, b}
    }

    rgbStrToObj(str) {
      // from text "rgb(4,8,16)" to obj { r: 4, g: 8, a:16 }
      var result = /([0-9]{1,3}),([0-9]{1,3}),([0-9]{1,3})/i.exec(str);
      return result ? this.regExpToRgb(result) : null;
    }

    hexToRgbObj(str){
      // "#1234aa" to { r: 12, g: 34, a: aa }
      var result = /([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})([a-zA-Z0-9]{2})/i.exec(str);
      return result ? this.regExpToRgb(result, 16) : null;
    }

    getNearColor(rgb) {
      let i = 0,
        approximationIndex = 0,
        minDiff = Math.abs(this.distance3D(this.colors[0].rgb, rgb)),
        diff;

      while (++i < this.colors.length) {
        diff = Math.abs(this.distance3D(this.colors[i].rgb, rgb));

        if (diff < minDiff) {
          minDiff = diff;
          approximationIndex = i;
        }
      }
      return this.colors[approximationIndex];
    }
  }

  window.TraditionalColors = window.TraditionalColors || TraditionalColors;
})(window);