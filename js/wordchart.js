// List of words
var myWords = [{'word': 'app', 'size': 102430},
 {'word': 'game', 'size': 82302},
 {'word': 'like', 'size': 38748},
 {'word': 'good', 'size': 30970},
 {'word': 'time', 'size': 29138},
 {'word': 'use', 'size': 26186},
 {'word': 'play', 'size': 24400},
 {'word': 'one', 'size': 23611},
 {'word': 'really', 'size': 21260},
 {'word': 'please', 'size': 20806},
 {'word': 'even', 'size': 20440},
 {'word': 'phone', 'size': 20311},
 {'word': 'love', 'size': 19643},
 {'word': 'great', 'size': 18870},
 {'word': 'update', 'size': 18617},
 {'word': 'ads', 'size': 16630},
 {'word': 'much', 'size': 16093},
 {'word': 'many', 'size': 15926},
 {'word': 'new', 'size': 15080},
 {'word': 'want', 'size': 13744},
 {'word': 'still', 'size': 13668},
 {'word': 'fun', 'size': 13241},
 {'word': 'easy', 'size': 13194},
 {'word': 'problem', 'size': 12763},
 {'word': 'need', 'size': 12718},
 {'word': 'fix', 'size': 12512},
 {'word': 'work', 'size': 11741},
 {'word': 'best', 'size': 11677},
 {'word': 'way', 'size': 11502},
 {'word': 'back', 'size': 11455},
 {'word': 'using', 'size': 11267},
 {'word': 'playing', 'size': 10658},
 {'word': 'give', 'size': 10546},
 {'word': 'better', 'size': 10071},
 {'word': 'add', 'size': 10053},
 {'word': 'google', 'size': 10040},
 {'word': 'go', 'size': 10024},
 {'word': 'video', 'size': 9763},
 {'word': 'money', 'size': 9722},
 {'word': 'apps', 'size': 9645},
 {'word': 'download', 'size': 9474},
 {'word': 'always', 'size': 9336},
 {'word': 'see', 'size': 9292},
 {'word': 'lot', 'size': 9195},
 {'word': 'used', 'size': 9175},
 {'word': 'free', 'size': 9045},
 {'word': 'option', 'size': 8785},
 {'word': 'thing', 'size': 8569},
 {'word': 'people', 'size': 8513},
 {'word': 'keep', 'size': 8346},
 {'word': 'level', 'size': 8315},
 {'word': 'know', 'size': 8252},
 {'word': 'games', 'size': 8179},
 {'word': 'try', 'size': 8115},
 {'word': 'version', 'size': 8067},
 {'word': 'well', 'size': 8031},
 {'word': 'never', 'size': 7926},
 {'word': 'ever', 'size': 7893},
 {'word': 'years', 'size': 7869},
 {'word': 'music', 'size': 7793},
 {'word': 'times', 'size': 7757},
 {'word': 'without', 'size': 7741},
 {'word': 'find', 'size': 7649},
 {'word': 'open', 'size': 7618},
 {'word': 'since', 'size': 7615},
 {'word': 'able', 'size': 7459},
 {'word': 'u', 'size': 7403},
 {'word': 'screen', 'size': 7403},
 {'word': 'stars', 'size': 7246},
 {'word': 'got', 'size': 7065},
 {'word': 'think', 'size': 7026},
 {'word': 'working', 'size': 6940},
 {'word': 'pay', 'size': 6806},
 {'word': 'nice', 'size': 6765},
 {'word': 'things', 'size': 6697},
 {'word': 'issue', 'size': 6620},
 {'word': 'something', 'size': 6613},
 {'word': 'everything', 'size': 6496},
 {'word': 'getting', 'size': 6472},
 {'word': 'sometimes', 'size': 6453},
 {'word': 'account', 'size': 6403},
 {'word': 'amazing', 'size': 6383},
 {'word': 'first', 'size': 6370},
 {'word': 'last', 'size': 6131},
 {'word': 'works', 'size': 5969},
 {'word': 'different', 'size': 5965},
 {'word': 'change', 'size': 5950},
 {'word': 'long', 'size': 5911},
 {'word': 'tried', 'size': 5866},
 {'word': 'data', 'size': 5836},
 {'word': 'day', 'size': 5782},
 {'word': 'wont', 'size': 5646},
 {'word': 'makes', 'size': 5592},
 {'word': 'videos', 'size': 5563},
 {'word': 'take', 'size': 5511},
 {'word': 'hard', 'size': 5455},
 {'word': 'thats', 'size': 5450},
 {'word': 'features', 'size': 5406},
 {'word': 'keeps', 'size': 5386},
 {'word': 'help', 'size': 5382},
 {'word': 'star', 'size': 5371},
 {'word': 'going', 'size': 5366},
 {'word': 'levels', 'size': 5351},
 {'word': 'old', 'size': 5235},
 {'word': 'another', 'size': 5234},
 {'word': 'annoying', 'size': 5230},
 {'word': 'didnt', 'size': 5229},
 {'word': 'bad', 'size': 5202},
 {'word': 'buy', 'size': 5099},
 {'word': 'samsung', 'size': 5046},
 {'word': 'mobile', 'size': 4966},
 {'word': 'experience', 'size': 4947},
 {'word': 'wish', 'size': 4940},
 {'word': 'made', 'size': 4917},
 {'word': 'days', 'size': 4916},
 {'word': 'android', 'size': 4868},
 {'word': 'feature', 'size': 4859},
 {'word': 'graphics', 'size': 4847},
 {'word': 'nothing', 'size': 4802},
 {'word': 'awesome', 'size': 4690},
 {'word': 'say', 'size': 4672},
 {'word': 'theres', 'size': 4669},
 {'word': 'little', 'size': 4650},
 {'word': 'anything', 'size': 4586},
 {'word': 'takes', 'size': 4584},
 {'word': 'songs', 'size': 4573},
 {'word': 'hope', 'size': 4553},
 {'word': 'watch', 'size': 4515},
 {'word': 'recommend', 'size': 4503},
 {'word': 'though', 'size': 4458},
 {'word': 'start', 'size': 4390},
 {'word': 'ad', 'size': 4373},
 {'word': 'shows', 'size': 4372},
 {'word': 'making', 'size': 4337},
 {'word': 'put', 'size': 4301},
 {'word': 'thank', 'size': 4299},
 {'word': 'says', 'size': 4275},
 {'word': 'show', 'size': 4229},
 {'word': 'friends', 'size': 4197},
 {'word': 'trying', 'size': 4107},
 {'word': 'cannot', 'size': 4073},
 {'word': 'thanks', 'size': 4062},
 {'word': 'files', 'size': 4053},
 {'word': 'right', 'size': 4023},
 {'word': 'played', 'size': 4018},
 {'word': 'mode', 'size': 4018},
 {'word': 'device', 'size': 3975},
 {'word': 'let', 'size': 3973},
 {'word': 'updates', 'size': 3941},
 {'word': 'look', 'size': 3897}]

// set the dimensions and margins of the graph
var margin = {top: 10, right: 0, bottom: 0, left: 0},
    width = 700 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#wordchart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Constructs a new cloud layout instance. It run an algorithm to find the position of words that suits your requirements
// Wordcloud features that are different from one word to the other must be here
var layout = d3.layout.cloud()
  .size([width, height])
  .words(myWords.map(function(d) { return {text: d.word, size:d.size}; }))
  .padding(6)        //space between words
  .rotate(function() { return 4; })
   .spiral("archimedean")
  .fontSize(function(d) { return d.size/700; })      // font size of words
  .on("end", draw);
layout.start();

// This function takes the output of 'layout' above and draw the words
// Wordcloud features that are THE SAME from one word to the other can be here
function draw(words) {
  svg
    .append("g")
      .attr("transform", "translate(" + layout.size()[0] / 2 + "," + layout.size()[1] / 2 + ")")
      .selectAll("text")
        .data(words)
      .enter().append("text")
        .style("font-size", function(d) { console.log(d.size);
          return d.size; })
        .style("fill", "#38A1F3")
        .attr("text-anchor", "middle")
        .style("font-family", "Muli, sans-serif")
        .attr("transform", function(d) {
          return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
        })
        .text(function(d) { return d.text; });
}
