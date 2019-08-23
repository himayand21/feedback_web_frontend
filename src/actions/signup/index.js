
import loadAllTeamNames from "../../api/loadAllTeamNames";
export const updateStateSignUp = (key, value) => {
    const action = {
        type: "UPDATE_STATE_SIGNUP",
        key,
        value
    };
    return action;
};
export const getTeamNames = () => {
    return {
        type: "GET_TEAM_NAMES",
        payload: new Promise((resolve, reject) => {
            loadAllTeamNames()
                .then(details => {
                    console.log(details);
                    let payload = [];
                    details.map(team => {
                        payload.push({
                            label: team.teamName,
                            value: team.teamName,
                            id: team._id
                        });
                    });
                    return payload;
                })
                .then(paylaod => {
                    resolve(paylaod);
                });
        })
    };
};
export const handleTeamChange = teamSelect => {
    return {
        type: "HANDLE_TEAM_CHANGE",
        team: teamSelect.id,
        teamSelect
    };
};
export const selectQuestion = selectedOption => {
    return {
        type: "SELECT_QUESTION",
        selectedOption
    };
};
export const resetSignUp = () => {
    return {
        type: "RESET_SIGN_UP"
    };
};