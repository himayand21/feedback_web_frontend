import getRequestsByTeamId from "../../api/getRequestsByTeamId";
import getInterviewersByTeamId from "../../api/getInterviewersByTeamId";

export const resetState = () => {
    const action = {
        type: "RESET_STATE"
    };
    return action;
};
export const updateState = (key, value) => {
    const action = {
        type: "UPDATE_STATE",
        key,
        value
    };
    return action;
};
export const submitAndVerify = details => {
    const action = {
        type: "SUBMIT_AND_VERIFY",
        details
    };
    return action;
};

export const updateAdminData = details => {
    const action = {
        type: "UPDATE_ADMIN_DATA",
        details
    };
    return action;
};
export const updateData = details => {
    const action = {
        type: "UPDATE_DATA",
        details
    };
    return action;
};
export const removeFeedbackConfirmed = (index, id) => {
    const action = {
        type: "REMOVE_FEEDBACK",
        index,
        id
    };
    return action;
};
export const updateInterviewerData = details => {
    const action = {
        type: "UPDATE_INTERVIEWER_DATA",
        details
    };
    return action;
};
export const updateSearchBar = () => {
    const action = {
        type: "UPDATE_SEARCH_BAR"
    };
    return action;
};
export const getRequestsAndPanel = teamId => {
    return {
        type: "GET_REQ_PANEL",
        payload: new Promise((resolve, reject) => {
            getRequestsByTeamId(teamId)
                .then(details => {
                    let reqAndPanel = { requests: details.user };
                    return reqAndPanel;
                })
                .then(reqAndPanel => {
                    getInterviewersByTeamId(teamId)
                        .then(details => {
                            return { ...reqAndPanel, interviewers: details.user };
                        })
                        .then(reqAndPanel => {
                            resolve(reqAndPanel);
                        });
                });
        })
    };
};
export const removeUser = (id, index, category) => {
    return {
        type: "REMOVE_USER",
        id,
        index,
        category
    };
};
export const updateRequest = (id, index) => {
    return {
        type: "UPDATE_REQ",
        id,
        index
    };
};
export const updatePanel = (id, index) => {
    return {
        type: "UPDATE_PANEL",
        id,
        index
    };
};
export const search = (index, value) => {
    return {
        type: "SEARCH",
        index,
        value
    };
};
export const findByName = names => {
    return {
        type: "SEARCH_BY_NAME",
        names
    };
};
export const hydrateStateWithLocal = () => {
    const action = {
        type: "HYDRATE_STATE_WITH_LOCAL"
    };
    return action;
};
