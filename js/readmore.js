function hideShowArticle(spanID, buttonID) {
  var articleSpan = document.getElementById(spanID)
  var button = document.getElementById(buttonID)
  var currentClass = articleSpan.className
  var hiddenText = 'Read More'
  var unhiddenText = 'Show Less'

  if (currentClass.toString() === 'hidden_article') {
    articleSpan.className = 'unhidden_article'
    button.firstChild.data = unhiddenText
  } else if (currentClass.toString() === 'unhidden_article') {
    articleSpan.className = 'hidden_article'
    button.firstChild.data = hiddenText
  } else {
    articleSpan.className = 'hidden_article'
    button.firstChild.data = hiddenText
  }
}
