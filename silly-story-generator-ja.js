<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width">

    <title>Silly story generator</title>

    <style>

    body {
      font-family: helvetica, sans-serif;
      width: 350px;
    }

    label {
      font-weight: bold;  
    }

    div {
      padding-bottom: 20px;
    }

    input[type="text"] {
      padding: 5px;
      width: 150px;
    }

    p {
      background: #FFC125;
      color: #5E2612;
      padding: 10px;
      visibility: hidden;
    }

    </style>
  </head>

  <body>
    <div>
      <label for="customname">主人公の名前を入力</label>
      <input id="customname" type="text" placeholder="">
    </div>
    <div>
      <label for="us">US</label><input id="us" type="radio" name="ukus" value="us" checked>
      <label for="日本">日本</label><input id="日本" type="radio" name="jp" value="jp">
    </div>
    <div>
      <button class="randomize">ばか話を表示</button>
    </div>
    <!-- Thanks a lot to Willy Aguirre for his help with the code for this assessment -->
    <p class="story"></p>
    <script src="">silly-story-generator-ja.html</script>
  </body>
</html>

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '気温 :insertx: でとても暑かった. しかし :customName: さんは、韓国から :inserty: まで歩いた。 津田さんの体重は　:insertz:１日で落ちた. :inserty:の人は誰も驚かなかった。';
const insertX = ['摂氏38度', '華氏90度', '摂氏40度'];
const insertY = ['東京', '大阪', '北海道'];
const insertZ = ['59kg', '100kg', '30kg'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);//配列からランダムに取ってくる
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('梅子', name);
  }

  if (document.getElementById("日本").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
