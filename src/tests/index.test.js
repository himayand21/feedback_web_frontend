import checkDuplicateApplicant from "../calls/checkDuplicateApplicant";
import checkDuplicateName from "../calls/checkDuplicateName";
import checkDuplicateTeam from "../calls/checkDuplicateTeam";
import getFeedbackByTeamId from "../calls/getFeedbackByTeamId";
import getInterviewerFeedbacks from "../calls/getInterviewerFeedbacks";
import getInterviewersByTeamId from "../calls/getInterviewersByTeamId";
import getRequestsByTeamId from "../calls/getRequestsByTeamId";
import loadAllTeamNames from "../calls/loadAllTeamNames";
import verifyUserCreds from "../calls/verifyUserCreds";

test("Duplicate Applicant: ", () => {
  expect.assertions(1);
  return checkDuplicateApplicant("Vivek").then(data => {
    expect(data).toEqual({ message: "found" });
  });
});

test("Unique Applicant: ", () => {
  expect.assertions(1);
  return checkDuplicateApplicant("Varun").then(data => {
    expect(data).toEqual({ message: "not-found" });
  });
});

test("Duplicate Username: ", () => {
  expect.assertions(1);
  return checkDuplicateName("Johnson").then(data => {
    expect(data).toEqual({ message: "found" });
  });
});

test("Unique Username: ", () => {
  expect.assertions(1);
  return checkDuplicateName("Mayankh").then(data => {
    expect(data).toEqual({ message: "not-found" });
  });
});

test("Duplicate Teamname: ", () => {
  expect.assertions(1);
  return checkDuplicateTeam("Apple").then(data => {
    expect(data).toEqual({ message: "found" });
  });
});

test("Unique Teamname: ", () => {
  expect.assertions(1);
  return checkDuplicateTeam("Samsung").then(data => {
    expect(data).toEqual({ message: "not-found" });
  });
});

test("Invalid TeamID: ", () => {
  expect.assertions(1);
  return getFeedbackByTeamId("Apple").then(data => {
    expect(data.message).toEqual("not-found");
  });
});

test("Valid TeamID: ", () => {
  expect.assertions(1);
  return getFeedbackByTeamId("5c07a079eee7c010ea1c3e39").then(data => {
    expect(data.message).toEqual("found");
  });
});

test("Invalid UserID: ", () => {
  expect.assertions(1);
  return getInterviewerFeedbacks("Johnson").then(data => {
    expect(data.message).toEqual("not-found");
  });
});

test("Valid UserID: ", () => {
  expect.assertions(1);
  return getInterviewerFeedbacks("5c053e066a2ab212d8d145fa").then(data => {
    expect(data.message).toEqual("found");
  });
});

test("Interviewers with invalid TeamID: ", () => {
  expect.assertions(1);
  return getInterviewersByTeamId("Apple").then(data => {
    expect(data.message).toEqual("none");
  });
});
test("Interviewers with valid TeamID: ", () => {
  expect.assertions(1);
  return getInterviewersByTeamId("5c07a079eee7c010ea1c3e39").then(data => {
    expect(data.message).toEqual("found");
  });
});

test("Requests with invalid TeamID: ", () => {
  expect.assertions(1);
  return getRequestsByTeamId("Apple").then(data => {
    expect(data.message).toEqual("none");
  });
});

test("Requests with valid TeamID: ", () => {
  expect.assertions(1);
  return getRequestsByTeamId("5c07a079eee7c010ea1c3e39").then(data => {
    expect(data.message).toEqual("found");
  });
});

test("All teams: ", () => {
  return loadAllTeamNames().then(data => {
    expect(data.length > 0).toEqual(true);
  });
});

test("Verify with valid User Creds: ", () => {
  expect.assertions(1);
  return verifyUserCreds("Johnson", "johnson@gmail.com", "1234").then(data => {
    expect(data.message).toEqual("auth approved");
  });
});

test("Verify with invalid User Creds: ", () => {
  expect.assertions(1);
  return verifyUserCreds("Apple", "apple@gmail.com", "1234").then(data => {
    expect(data.message).toEqual("auth failed");
  });
});
