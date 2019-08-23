const loadData = function loadData(each, candidate) {
  each.name = candidate.applicant_name;
  each.designation = candidate.designation;
  each.comments = candidate.comments;
  each.date = candidate.interview_date;
  each.exp_year = candidate.exp_year;
  each.exp_month = candidate.exp_month;
  each.filePath = candidate.file;
  each.skill = candidate.skills;
  each.status = candidate.status;
  each.interviewer_name = candidate.interviewer_name;
  each.id = candidate._id;
};
export default loadData;
