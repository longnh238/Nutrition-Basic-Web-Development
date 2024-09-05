function hideAllOtherLists(currentQaId) {
     let answers = document.getElementsByClassName('answer_qa');
     let answerId = 'answer_' + currentQaId;
     for (let i = 0; i < answers.length; i++) {
          if (answers[i].id !== answerId) {
               answers[i].style.display = 'none';
          }
     }
}

function toggleList(qaId) {
     let answerId = 'answer_' + qaId;
     let answer = document.getElementById(answerId);
     if (answer.style.display === 'block') {
          answer.style.display = 'none';
     } else {
          hideAllOtherLists(qaId);
          answer.style.display = 'block';
     }
}