import {
  _saveQuestion,
  _saveQuestionAnswer,
  _getQuestions,
  _getUsers,
} from "./_data";

export function getInitData() {
  return Promise.all([_getQuestions(), _getUsers()]).then(
    ([questions, users]) => ({
      questions,
      users,
    })
  );
}
export function saveQuestionAnswer(authedUser, answer, qid) {
  return _saveQuestionAnswer(authedUser, answer, qid);
}
export function saveQuestion(varin) {
  return _saveQuestion(varin);
}
